import { configureStore  } from '@reduxjs/toolkit';
type State = string;

// Define the type of the actions
type Action = {
  type: string;
  payload: string;
};

// Define the reducer function
function reducer(state: State = "", action: Action): State {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
}
export const store = configureStore({
    reducer: reducer,
});