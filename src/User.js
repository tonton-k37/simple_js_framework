import { div } from "../framework/elements";
import { onClick } from "../framework/event";

export const User = ({ firstName, lastName }) =>
  div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName} 3`;
