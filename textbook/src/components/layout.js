import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import "../styles/base.scss";
import FrontendBasic from "./images/frontend-basic.svg";
import Favicon from "./images/frontend.png";
import OGP from "./images/ogp.png";

const Layout = ({ location, title, children }) => {
  return (
    <div className="article">
      <Helmet
        htmlAttributes={{
          lang: "ja",
        }}
        title={title}
        link={[{ rel: "icon", type: "image/png", href: Favicon }]}
        meta={[
          { name: "description", content: "フロントエンド コースです。" },
          { property: "og:title", content: title },
          { property: "og:site_name", content: "Frontend Basic" },
          { property: "og:type", content: "website" },
          { property: "og:url", content: location },
          { property: "og:image", content: OGP },
          {
            property: "og:description",
            content: "フロントエンド コースです。",
          },
          {
            property: "robots",
            content: "noindex",
          },
        ]}
      />
      <header>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          <img className="logo" src={FrontendBasic} alt="Frontend Basic" />
        </Link>
      </header>
      <main>{children}</main>
      <footer
        style={{
          textAlign: `center`,
        }}
      >
        <a
          href="https://shinonome.io/"
          target="_blank"
          rel="noreferrer"
          className="gatsby-resp-image-link"
        >
          Shinonome.io
        </a>
      </footer>
    </div>
  );
};

export default Layout;
