// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link, graphql } from "gatsby";
import moment from "moment-timezone";

import Layout from "../components/layout";
import { rhythm } from "../utils/typography";

import CI1 from "../components/images/CI1.png";
import CI4 from "../components/images/CI4.png";
import CI5 from "../components/images/CI5.png";
import Label from "../components/images/label.png";

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          label: string;
        };
        fields: {
          slug: string;
        };
        parent: {
          modifiedTime: string;
        };
      };
    }[];
  };
};

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>課題一覧</h1>
      <div className="posts">
        {posts.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.slug;
          let prevPostLabel =
            index > 0 ? posts[index - 1].node.frontmatter.label : undefined;
          let currentPostLabel = posts[index].node.frontmatter.label;
          return (
            <>
              {prevPostLabel !== currentPostLabel && (
                <h3 className="post-label">{currentPostLabel}</h3>
              )}
              <article
                key={node.fields.slug}
                style={{
                  marginBottom: rhythm(1 / 2),
                  marginLeft: rhythm(1),
                }}
              >
                <h4
                  style={{
                    fontSize: `1.2rem`,
                    marginBottom: 0,
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {index + 1}. {title}
                  </Link>
                </h4>
                <small>
                  {moment(node.parent.modifiedTime)
                    .tz("Asia/Tokyo")
                    .format("YYYY.MM.DD")}
                  .
                </small>
              </article>
            </>
          );
        })}
      </div>
      <div className="about-course">
        <section>
          <h1>定例会について</h1>
          <p>
            <code className="language-text">毎週土曜日 21:00~</code>
            1時間程度dawnでコース受講者を対象に定例会を行なっています。
            <br />
            用事がある場合を除いて参加必須なので出来るだけ時間を空けておいて下さい。
            <br />
            欠席する場合は講師にSlackの
            <code className="language-text">#dev_frontend</code>
            で、連絡をしましょう。
          </p>
          <h3>定例会までにPGritですること</h3>
          <ul>
            <li>
              目標の振り返り・達成度(達成しなかった場合は原因と何割達成できたか)
            </li>
          </ul>
          <h3>定例会が終わった後にすること</h3>
          <ul>
            <li>学習申告フォームを提出する</li>
            <li>PGritで必達・理想目標の 2 つを宣言する</li>
          </ul>
        </section>
        <section>
          <h1>調べるサイトはここ！</h1>
          <p>
            わからないことが出てきた場合、必ず調べると思うが、ネットの情報は
            100%正しいとは限らない。
            <br />
            また、ウェブの技術は日々進化する、昔のやり方であったり、現在は使えないものなどもある。
            <br />
            そこで頼りになるのが
            <a
              href="https://developer.mozilla.org/ja/docs/Web"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN Web Docs
            </a>
            だ。
            <br /> MDN はウェブ開発者向けのドキュメントのサイトで、HTML,CSS ,JS
            のドキュメントが作られている。
            <br />
            基本的には MDN のサイトから情報を得るようにしよう。
          </p>
        </section>
        <section>
          <h1>質問の仕方</h1>
          <p>
            質問する時も成長するチャンスです。答えを聞こうとするのではなく、どういう考え方・調べ方をしたら良いのかを聞きましょう。
            <br />
            <strong>
              まずは
              <a
                href="https://github.com/shinonome-inc/frontend-basic/issues?q=is%3Aissue+label%3AQuestion+is%3Aclosed"
                target="_blank"
                rel="noopener noreferrer"
              >
                過去の質問
              </a>
              に自分の質問したいことがないか見てみましょう！
            </strong>
            <br />
          </p>
          <strong>ない場合は以下の手順で質問用の Issue を立てる</strong>
          <h3>1. New Issue をクリック</h3>
          <img src={CI1} className="gatsby-resp-image-image" />
          <h3>2. Question のテンプレートを選択</h3>
          <img src={CI4} className="gatsby-resp-image-image" />
          <h3>
            3. 質問のタイトルや質問内容などを記入して Submit Issue をクリック
          </h3>
          <p>
            ＊ assignees は自分、label は
            <code className="language-text">Question</code>と
            <code className="language-text">内容に合ったもの</code>を選択する
          </p>
          <div className="c2">
            <div className="lc">
              <img src={CI5} className="gatsby-resp-image-image" />
            </div>
            <div className="rc">
              <img src={Label} className="gatsby-resp-image-image" />
            </div>
          </div>
          <h3>
            4. PGritで
            <code className="language-text">#frontend</code>
            のハッシュタグをつけて質問の Issue
            を立てたことをリンクとともに報告し、お願いする。
          </h3>
          <h3>
            5. 質問が解決したらどうやって解決したかを記述し、Issue を close する
          </h3>

          <h2>注意</h2>
          <ul>
            <li>
              <strong>
                わからないことがあっても、最初の 15
                分だけは自分で調べて自分で考えてください。
              </strong>
            </li>
          </ul>
          <blockquote>
            <p>15 分だけ自分で考えることの利点</p>
            <ul>
              <li>少し調べることで検索能力が上がる</li>
              <li>
                あまり長く考え過ぎても解決につながらないことが多く、時間の無駄遣いになってしまう
              </li>
              <li>
                <a
                  href="https://qiita.com/seki_uk/items/4001423b3cd3db0dada7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  質問は恥ではないし役に立つ
                </a>
              </li>
            </ul>
          </blockquote>
        </section>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___index], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
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
    }
  }
`;
