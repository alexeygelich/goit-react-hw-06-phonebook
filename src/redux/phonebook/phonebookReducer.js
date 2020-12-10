import { combineReducers } from "redux";
import { ADD, REMOVE, FILTER } from "./phonebookTypes";

const conactsBase = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const localstorageContacts = JSON.parse(localStorage.getItem("contacts"));

const initialState = localstorageContacts || conactsBase;

const itemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case REMOVE:
      // const idx = state.indexOf(payload);
      return state.filter((item) => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
