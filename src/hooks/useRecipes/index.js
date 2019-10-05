// @flow
import { useEffect, useReducer } from "react";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "./constants";
import { INITIAL_STATE, dataFetchReducer } from "./reducer";
import { fetchtRecipes } from "../../api";

export const useRecipes = () => {
  const [state, dispatch] = useReducer(dataFetchReducer, INITIAL_STATE);

  useEffect(() => {
    let didCancel = false;
    const fetchRecipes = async () => {
      dispatch({ type: FETCH_INIT });
      try {
        const result = await fetchtRecipes();
        if (!didCancel) {
          dispatch({ type: FETCH_SUCCESS, payload: result });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: FETCH_FAILURE });
        }
      }
    };

    fetchRecipes();
    return () => {
      didCancel = true;
    };
  }, []);

  return [state];
};
