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

const createElement =
  (tagName) =>
  (strings, ...args) => ({
    type: tagName,
    template: strings.reduce(
      (prev, current, index) => prev + current + (args[index] || ""),
      ""
    ),
  });

const p = createElement("p");

const { template } = p`Hello ${"yama"} 3`;
console.log(template);
