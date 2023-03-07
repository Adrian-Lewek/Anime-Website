import { configureStore  } from '@reduxjs/toolkit';
type State = string;


type Action = {
  type: string;
  payload: string;
};

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