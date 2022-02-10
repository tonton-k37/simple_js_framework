// 実はテンプレートリテラルにはタグ付きすることができる

const myTag = (strings, favoriteNumber, stuff) => {
  const numToGive = Math.floor(Math.random() * favoriteNumber);
  return `${strings[0]} ${numToGive} ${stuff} `;
};

const hoge = myTag`You deserver only ${10} ${"Beer"}`;

console.log(hoge);


// 微妙に頭悩んだけど、こいつは結局t1Closureに関数返してるだけだった
function template(strings, ...keys) {
  return function (...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function (key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

let t1Closure = template`${0}${1}${0}!`;
//let t1Closure = template(["","","","!"],0,1,0);
t1Closure("Y", "A");
