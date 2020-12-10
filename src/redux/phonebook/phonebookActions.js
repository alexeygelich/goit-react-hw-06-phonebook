import { ADD, REMOVE, FILTER } from "./phonebookTypes";
import { v4 as uuid } from "uuid";

const addItem = (name, number) => {
  return {
    type: ADD,
    payload: {
      id: uuid(),
      name: name,
      number: number,
    },
  };
};

const removeItem = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};

const filter = (str) => {
  return {
    type: FILTER,
    payload: str,
  };
};

export default { addItem, removeItem,filter };
