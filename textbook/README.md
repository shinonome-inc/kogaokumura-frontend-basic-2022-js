# Basic Frontend 教材

## 仕組み

content 配下の index 順にサイトも構成されている。
index の数字は特に決まりはないが、課題が増えることも視野に入れ、連続しないように気をつけた。

## Getting started

### npm パッケージのインストール

    npm install
    npm install -g gatsby-cli

## 教材を編集する

ローカルで開発サーバーが起動する。

    gatsby develop

## 配布ファイルをビルドする

ローカルで配布ファイルを確認したい時に使う。

    gatsby build

## デプロイ

github のリポジトリに netlify を紐付けしてある。master ブランチへ push すれば自動的に netlify にデプロイされる。

    git push origin master

## 参考文献

Netlify を使うときに参考にした記事

- [Netlify と Github を連携させ、サイトのアップロード作業を自動化する方法][https://rightcode.co.jp/blog/information-technology/netlify-github-up]
