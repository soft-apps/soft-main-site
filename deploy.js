require("dotenv").config();
const s3 = require("s3");
const fetch = require("node-fetch");

const config = {
  uploadDir: __dirname + "/public"
};

const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
    region: process.env.AWS_REGION
  }
});

const uploadFilesToBucket = bucket => {
  console.log("Uploading to", bucket);

  return new Promise((resolve, reject) => {
    const params = {
      localDir: config.uploadDir,
      deleteRemoved: false,
      s3Params: {
        ACL: "public-read",
        Bucket: bucket,
        Prefix: "",
        CacheControl: "max-age=604800"
      }
    };

    const uploader = client.uploadDir(params);

    uploader.on("fileUploadStart", (path, key) => {});
    uploader.on("fileUploadEnd", (path, key) => {});

    uploader.on("error", function(err) {
      console.error("unable to sync:", err.stack);
    });

    uploader.on("progress", function() {
      const progress = uploader.progressAmount / uploader.progressTotal;
      console.log(progress.toFixed(2) * 100 + "%");
    });

    uploader.on("end", function() {
      resolve();
    });
  });
};

const mapSequential = (arr, promiseFn, result = []) => {
  if (result.length === arr.length) return result;
  return promiseFn(arr[result.length]).then(v =>
    mapSequential(arr, promiseFn, [...result, v])
  );
};

const upload = () => {
  const buckets = process.env.AWS_BUCKETS.split(",");
  return mapSequential(buckets, b => {
    return uploadFilesToBucket(b);
  });
};

const invalidateCaches = () => {
  const zoneIds = process.env.CLOUDFLARE_ZONE_IDS.split(",");
  return mapSequential(zoneIds, id => {
    console.log("Invalidating Cloudflare cache for", id);
    return fetch(
      `https://api.cloudflare.com/client/v4/zones/${id}/purge_cache`,
      {
        method: "POST",
        headers: {
          "X-Auth-Email": process.env.CLOUDFLARE_EMAIL,
          "X-Auth-Key": process.env.CLOUDFLARE_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ purge_everything: true })
      }
    );
  });
};

upload().then(invalidateCaches);
