import React, { Component } from "react";
import MailingListSignup from "../components/MailingListSignup";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "../styles/AboutPage.scss";

class AboutPage extends Component {
  state = {
    showMailingList: false
  };

  render() {
    return (
      <Layout>
        <SEO title="About Soft" />

        <div className="AboutPage">
          <div className="AboutPage-content">
            <p>
              Soft is a software publisher working to develop novel utilities.
            </p>
            <p>
              For more information, please email{" "}
              <a href="mailto:info@soft.works">info@soft.works</a> or{" "}
              <a
                className="AboutPage-mailing-list-link"
                onClick={this.toggleMailingList}
              >
                sign up for our mailing list
              </a>
              .
            </p>

            {this.state.showMailingList && <MailingListSignup />}
          </div>
        </div>

        <div className="meta-links">
          <a href="/" className="soft-email">
            Back
          </a>
        </div>
      </Layout>
    );
  }

  toggleMailingList = () => {
    this.setState({
      showMailingList: !this.state.showMailingList
    });
  };
}

export default AboutPage;
