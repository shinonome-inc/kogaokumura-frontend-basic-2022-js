---
title: "Molecules/Planの作成"
index: 516
label: "Chapter 5"
---

### 作るもの

![molecules_plan](./images/molecules_plan.png)

### ファイル名、ディレクトリ構造

```
src
├ components
│ └ molecules
│   └ plan
│     ├ plan.html
│     └ plan.scss
└ stories
  └ molecules-plan.stories.js
```

### コンポーネントのあるページ

[plan](https://www.figma.com/file/itngQHR9R5RB7xwCXAKOde/TCD-Theme?node-id=822%3A2429)

### 注意点

- 写真のように、デイタイムプランとスタンダードプランの 2 つを作成しましょう。
- どのように記述すれば、簡潔に書けるか考えましょう。
- どのタグを使えばわかりやすいか考えましょう。
- Css Diner で学んだ nth-child をうまく使ってみましょう。
- Card と同様、横幅は Organisms で設定するので、指定しないようにしてください。
- デイタイムプランとスタンダードプランを横並びにしたときに border も込みで高さが揃っているようにしてください。
