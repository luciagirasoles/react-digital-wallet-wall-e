import { initialState } from "./reducer";

export const loadState = () => {
  try {
    const serializedState =
      JSON.parse(localStorage.getItem("state")) || initialState;
    if (serializedState === null || Object.keys(serializedState).length === 0) {
      return initialState;
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {}
};
