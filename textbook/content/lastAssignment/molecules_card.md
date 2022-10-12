---
title: "Molecules/Cardの作成"
index: 515
label: "Chapter 5"
---

### 作るもの

![molecules_card](./images/molecules_card.png)

### ファイル名、ディレクトリ構造

```
src
├ components
│ └ molecules
│   └ card
│     ├ card.html
│     └ card.scss
└ stories
  └ molecules-card.stories.js
```

### Figma から asset を export する

このセクションでは画像を用います。  
それは Figma のプロジェクトに用意されています。  
コンポーネントのあるページの`ASSET`と区分けされた箇所を見てみましょう。  
使う画像が全て用意されていることがわかるはずです。
![img_export](./images/img_export.png)

画像を選択した状態の右サイドバーを見てみると、下部に`Export`という項目があります。  
+ボタンを押してみましょう。  
下の画像をように Export する際の設定が行えます。
![img_export](./images/img_export_detail.png)
画像の場合は`png`に設定しましょう(jpg でも有りだが基本は png)。  
`Export ~~`というボタンを押すことで export が完了します。  
全ての画像を export して使ってください。

### コンポーネントのあるページ

[cards](https://www.figma.com/file/itngQHR9R5RB7xwCXAKOde/?node-id=807%3A1670)

### 注意点

- Bootstrap の Card を使えば、簡単に実装できますね！Bootstrap の利点をわかっていただけたでしょうか？
- ボタンはすでに作成してますね。
- storybook では、作成済みの scss ファイルは css に変換されたうえで全体に適用されるようになっています。card.scss 内にボタンのスタイルを書き直さずとも、ボタンの html をコピペしてくるだけで button.scss で定義されたスタイルが当たるようになっています。
- ホバー時の挙動も再現してください。
- Figma に載っているのは、ある瞬間の画面幅での表示です。画面幅が変わった時の Card 全体の横幅の指定は Organisms で設定するので、scss の中で横幅を指定しないようにしてください。
