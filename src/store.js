import { createStore } from "redux";
import reducer from "./reducer";
import { loadState, saveState } from "./utils";

const store = createStore(
  reducer,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
