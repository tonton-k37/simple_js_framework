import { div } from "../framework/elements";

export const User = ({ firstName, lastName }) =>
  div`Hello ${firstName} ${lastName} 3`;
