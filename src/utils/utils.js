import { v4 as uuidv4 } from "uuid";

export const stringifyDate = () => {
  const date = new Date();
  return `${date.toLocaleDateString("en-US")} ${date.toLocaleTimeString(
    "en-US"
  )} `;
};

export const newId = () => uuidv4();
