import { init } from "../framework/index";
import { User } from "./User";

window.addEventListener("DOMContentLoaded", () => {
  const lastName = "yama";
  const firstName = "kyoaaaaaa";

  init("#myApp", User({ firstName, lastName }));
});
