// @flow
import { useEffect, useReducer } from "react";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "./constants";
import { INITIAL_STATE, dataFetchReducer } from "./reducer";
import { fetchtRecipes } from "../../api";
import Recipe from "../useRecipes/types";

export const initFetch = () => ({ type: FETCH_INIT });
export const fetchFailure = () => ({ type: FETCH_FAILURE });
export const fetchSuccess = (payload: Array<Recipe>) => ({
  type: FETCH_SUCCESS,
  payload
});

export const useRecipeEffect = (dispatch: any) => {
  useEffect(() => {
    const fetchRecipes = async () => {
      dispatch(initFetch());
      try {
        const result = await fetchtRecipes();
        dispatch(fetchSuccess(result));
      } catch (error) {
        dispatch(fetchFailure());
      }
    };

    fetchRecipes();
  }, [dispatch]);
};

export const useRecipes = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, INITIAL_STATE);
  useRecipeEffect(dispatch);
  return [state];
};
