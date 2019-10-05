import { renderHook, act } from "@testing-library/react-hooks";
import { useRecipes } from "./index";
import { dataFetchReducer, INITIAL_STATE } from "./reducer";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "./constants";
import { mappedRecipe } from "../../mocks/recipe";

describe("Recipe hook", () => {
  it("should return the correct initial State", () => {
    const { result } = renderHook(() => useRecipes());
    expect(result.current[0]).toEqual({
      isLoading: true,
      isError: false,
      recipes: []
    });
  });
});

describe("Recipe Reducer", () => {
  it("should  return the correct initial state", () => {
    const state = INITIAL_STATE;
    const action = { type: null, payload: null };
    const result = dataFetchReducer(state, action);
    expect(result).toEqual(INITIAL_STATE);
  });

  it("should set the loading state on fetch init", () => {
    const expectedState = {
      ...INITIAL_STATE,
      isLoading: true
    };
    const action = { type: FETCH_INIT, payload: null };
    const result = dataFetchReducer(INITIAL_STATE, action);
    expect(result).toEqual(expectedState);
  });

  it("should return the list of recipes and reset loders on fetch success", () => {
    const expectedState = {
      isLoading: false,
      isError: false,
      recipes: [mappedRecipe]
    };
    const action = { type: FETCH_SUCCESS, payload: [mappedRecipe] };
    const result = dataFetchReducer(INITIAL_STATE, action);
    expect(result).toEqual(expectedState);
  });

  it("should return state error if fetch recipe fails", () => {
    const expectedState = {
      ...INITIAL_STATE,
      isError: true
    };
    const action = { type: FETCH_FAILURE };
    const result = dataFetchReducer(INITIAL_STATE, action);
    expect(result).toEqual(expectedState);
  });
});
