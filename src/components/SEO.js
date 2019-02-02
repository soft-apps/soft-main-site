import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import softShareImage from "../images/soft-share-image.png";
import softTwitterShareImage from "../images/soft-share-2_1.png";

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                property: "og:url",
                content: "https://soft.works"
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                property: "og:image",
                content: "https://soft.works" + softShareImage
              },
              {
                property: "og:image:width",
                content: "1200"
              },
              {
                property: "og:image:height",
                content: "630"
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`
              },
              {
                name: `twitter:image`,
                content: "https://soft.works" + softTwitterShareImage
              },
              {
                name: `twitter:image:alt`,
                content: "Soft logo graphic"
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:site`,
                content: data.site.siteMetadata.author
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ].concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
