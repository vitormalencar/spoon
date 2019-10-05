// @flow
import { State, Action } from "./types";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "./constants";

export const INITIAL_STATE: State = {
  isLoading: false,
  isError: false,
  recipes: []
};

export const dataFetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        recipes: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};
