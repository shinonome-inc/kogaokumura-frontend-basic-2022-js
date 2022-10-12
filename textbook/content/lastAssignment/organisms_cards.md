---
title: "Organisms/Cardsの作成"
index: 522
label: "Chapter 5"
---

### 作るもの

![organisms_cards](./images/organisms_cards.png)

### ファイル名、ディレクトリ構造

```
src
├ components
│ └ organisms
│   └ cards
│     └ cards.html
│
└ stories
  └ organisms-cards.stories.js
```

### コンポーネントのあるページ

[cards](https://www.figma.com/file/itngQHR9R5RB7xwCXAKOde/?node-id=807%3A1670)

### 注意点

- molecules で作成した card を並べましょう。
- 並べたときにお手本と違っていて違和感がある場合は、原因となっている部分を探して修正しましょう。
- きちんと書けていれば scss ファイルを作成せずに Bootstrap の機能だけで実装できます。必要な CSS プロパティが Bootstrap の機能として入ってないか探してみましょう。
- また、これは実装しなくても良いですが、少し scss を足すことでボタンの位置を揃えられます。やってみたい人や時間がある人はやってみましょう。
