import { h } from "snabbdom";

/**
 * createElementの大元はこんな感じ。
 * これをリファクタして使いまわせるようにした
 */

// const div = (strings, ...args) => {
//     // ""で初期値を設定して、順に文字列に戻している
//     // 引数の順番がどうであろうと、placeholderと交互に展開する
//     // placeholderが連w続する場合にはstringsにブランクが追加される
//     // よっていい感じに順番が保持されて出力される
//   return strings.reduce(
//     (previouse, currentString, index) =>
//       previouse + currentString + (args[index] || ""),
//     ""
//   );
// };

// const firstName = "Kyohei";
// const lastName = "Yama";

// const result = div`Hello aa ${firstName} ${"aa"} ああ ${lastName} san`;

/**
 * こやつらはただの動作のおさらい
 */

// const hoge = (hoge) => (arg) => ({
//   name: hoge,
//   fuga: () => console.log(arg)
// });
// const a = hoge("hoge");
// a("a").fuga()

/**　こっちがモノホン */
/** snabbdomに書き換えたのでコメントアウト

const createElement =
  (tagName) =>
  (strings, ...args) => ({
    type: tagName,
    template: strings.reduce(
      (prev, current, index) => prev + current + (args[index] || ""),
      ""
    ),
  });

export const p = createElement("p");
export const div = createElement("div");
 */

/** snabbdomで書き換えたやつ */

// const createElement =
//   (tagName) =>
//   (strings, ...args) => ({
//     type: "element",
//     template: h(
//       tagName,
//       {},
//       strings.reduce(
//         (prev, currentString, index) =>
//           prev + currentString + (args[index] || ""),
//         ""
//       )
//     ),
//   });

const createReducer = (args) => (prev, currentString, index) => {
  return {
    ...prev,
    template: prev.template + currentString + (args[index] || ""),
  };
};

const createElement =
  (tagName) =>
  (strings, ...args) => {
    const myreducer = strings.reduce(createReducer(args));

    return {
      type: "element",
      template: h(tagName, {}, myreducer.template),
    };
  };

export const div = createElement("div");
export const p = createElement("p");
