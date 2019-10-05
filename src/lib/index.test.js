import { mapChefs, mapTags, mapRecipe } from "./index";
import { recipeMock, mappedRecipe } from "../mocks/recipe";

describe("Lib", () => {
  it("should return the correct mapping for chefs name", () => {
    const chef = { fields: { name: "Jhon doe" } };
    expect(mapChefs(undefined)).toEqual("Anonimus");
    expect(mapChefs(chef)).toEqual("Jhon doe");
  });
  it("should return the correct mapping for tags array", () => {
    const tags = [{ fields: { name: "foo" } }, { fields: { name: "bar" } }];
    expect(mapTags(undefined)).toEqual([]);
    expect(mapTags(tags)).toEqual(["foo", "bar"]);
  });

  it("should return the correct mapping for Recipe", () => {
    const item = recipeMock;
    const expected = mappedRecipe;
    expect(mapRecipe(item)).toEqual(expected);
  });
});
