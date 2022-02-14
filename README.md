# アプリについて

このアプリは JS で作られたフレームワーク（react や Vue）の原理をより深く理解するために作った学習目的の JS フレームワークである

- 人に見せるように作ってないので、コメだらけ。 hot reaload 動かんからいつか直す

## 学習のゴール

- テンプレートエンジンに対して理解を深める
- バーチャル DOM の振る舞いと良さを掘り出す
- ステート管理について理解を深める

# template literals

テンプレートエンジンはテンプレートリテラルに渡された値を評価して返している。

# サンプルで使用するテンプレートエンジンについて

今回の自作 SPA でのテンプレートエンジンは Vue や Cycle などでも利用されている Snabbdom を利用する。
snabbdom は第１引数にタグ名（セレクタも OK）、第２引数に属性、第３引数に子要素（配列）で指定する。
[snbbdom git](https://github.com/snabbdom/snabbdom)
[日本の記事](https://tech.recruit-mp.co.jp/front-end/post-12144/)

> import h from "snabbdom/h"

```javascript
const vnode = h("div#container", { on: { click: executeSomeFunction } }, [
  h("span", { style: { "font-weight": bold } }, "this is bold text"),
]);
// この h の意味はハイパースクリプトの頭文字をもじったもの。
```

属性は全てハッシュで指定する。react などでもお馴染みの属性のケースは以下

```javascript
const attributes = {
  props: {
    href: "Yama3",
  },
  attr: {
    type: "text",
  },
  dataset: {
    action: "reset",
  },
  class: {
    "bold-text": boolean,
  },
  style: {
    color: "red",
  },
};
```
