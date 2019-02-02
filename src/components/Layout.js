import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "../styles/fonts.scss";
import "../styles/Layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <div className="Layout">{children}</div>}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
