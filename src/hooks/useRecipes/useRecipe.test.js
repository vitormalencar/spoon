import { renderHook, act } from "@testing-library/react-hooks";
import {
  useRecipes,
  useRecipeEffect,
  fetchSuccess,
  initFetch,
  fetchFailure
} from "./index";
import { dataFetchReducer, INITIAL_STATE } from "./reducer";
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE } from "./constants";
import { mappedRecipe } from "../../mocks/recipe";
import * as API from "../../api";

describe("Recipe hook", () => {
  it("should return the correct initial State", () => {
    const { result } = renderHook(() => useRecipes());
    expect(result.current[0]).toEqual({
      isLoading: true,
      isError: false,
      recipes: []
    });
  });

  it("should call dispatch with Success when the promise resolves", async () => {
    const mockPromise = jest.spyOn(API, "fetchtRecipes").mockResolvedValue([]);
    const mockDispatch = jest.fn();
    const response = renderHook(() => useRecipeEffect(mockDispatch));

    await mockPromise();

    expect(mockDispatch).toHaveBeenNthCalledWith(1, initFetch());
    expect(mockDispatch).toHaveBeenNthCalledWith(2, fetchSuccess([]));
  });

  it("should call dispatch with Error when the promise rejects", async () => {
    const mockPromise = jest
      .spyOn(API, "fetchtRecipes")
      .mockRejectedValueOnce();

    const mockDispatch = jest.fn();
    const response = renderHook(() => useRecipeEffect(mockDispatch));

    await mockPromise().catch();
    expect(mockDispatch).toHaveBeenNthCalledWith(1, initFetch());
    expect(mockDispatch).toHaveBeenNthCalledWith(2, fetchFailure());
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
