import React, { Component } from "react";
import FlightSimulatorIcon from "../components/FlightSimulatorIcon";
import ColorChatIcon from "../components/ColorChatIcon";
import Tagline from "../components/Tagline";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MailingListSignup from "../components/MailingListSignup";

import "../styles/IndexPage.scss";

const apps = [
  {
    slug: "fs",
    name: "Flight Simulator",
    tagline: "An ode to Airplane Mode.",
    url: "https://flightsimulator.soft.works",
    component: FlightSimulatorIcon,
    className: "FlightSimulatorIcon"
  }
  // {
  //   slug: "colorchat",
  //   name: "Color Chat",
  //   tagline: "Chat with colors instead of words.",
  //   url: "https://colorchat.soft.works",
  //   component: ColorChatIcon,
  //   className: "ColorChatIcon"
  // }
];

class IndexPage extends Component {
  state = {
    taglineActive: false,
    taglineText: ""
  };

  render() {
    return (
      <Layout>
        <SEO title="Soft" />

        <div className="IndexPage">
          <Tagline
            active={this.state.taglineActive}
            text={this.state.taglineText}
          />

          <div className="soft-logo-container">
            <a href="/" className="soft-logo">
              soft
            </a>
          </div>

          {this.renderIcons()}

          <div className="meta-links">
            <a href="/about/" className="soft-email">
              About
            </a>
            {/* <a onClick={this.handleClickMailingList} className="soft-email">
              Mailing List
            </a> */}

            {this.state.mailingListActive && <MailingListSignup />}
          </div>
        </div>
      </Layout>
    );
  }

  renderIcons() {
    return (
      <div className="IndexPage-icons-container">
        {apps.map(a => {
          const { component: Icon, ...props } = a;
          return (
            <Icon
              key={a.slug}
              {...props}
              onMouseEnter={() => this.handleMouseOverIcon(a)}
              onMouseLeave={() => this.handleMouseLeaveIcon(a)}
            />
          );
        })}
      </div>
    );
  }

  handleClickMailingList = () => {
    this.setState({
      mailingListActive: !this.state.mailingListActive
    });
  };

  handleMouseOverIcon = app => {
    this.setState({
      taglineActive: true,
      taglineText: app.tagline
    });
  };

  handleMouseLeaveIcon = app => {
    this.setState({
      taglineActive: false
    });
  };
}
export default IndexPage;
