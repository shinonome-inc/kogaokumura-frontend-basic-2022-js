import React from "react";
import { Link, graphql } from "gatsby";
import moment from "moment-timezone";

import Layout from "../components/layout";
import { rhythm, scale } from "../utils/typography";

const PageTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = post.frontmatter.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1.2),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1.2),
            }}
          >
            Updated at{" "}
            {moment(post.parent.modifiedTime)
              .tz("Asia/Tokyo")
              .format("YYYY.MM.DD HH:mm")}
            .
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            marginInlineStart: 0,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        label
      }
      parent {
        ... on File {
          modifiedTime
        }
      }
    }
  }
`;
