/**
 * 本番
 */

/** snabbdomなし
export const init = (selector, component) => {
  const app = document.querySelector(selector);
  // newElementはタグ名になるので、以下のようにすることで好きなDOMを生成できる
  const newElement = document.createElement(component.type);
  const newTextContent = document.createTextNode(component.template);

  newElement.append(newTextContent);
  app.append(newElement);
};
 */

/** snabbdomで書き換え */
import { init as snabbdomInit, eventListenersModule } from "snabbdom";

const patch = snabbdomInit([eventListenersModule]);

export const init = (selector, component) => {
  const app = document.querySelector(selector);
  patch(app, component.template);
};
