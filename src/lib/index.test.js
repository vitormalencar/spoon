import { mapChefs, mapTags, mapRecipe } from "./index";
import { recipeMock } from "../mocks/recipe";

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
    const expected = {
      title: "Crispy Chicken and Rice\twith Peas & Arugula Salad",
      tags: ["gluten free", "healthy"],
      id: "437eO3ORCME46i02SeCW46",
      chef: "Jony Chives",
      url:
        "//images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg",
      description:
        "Crispy chicken skin, tender meat, and rich, tomatoey sauce form a winning trifecta of delicious in this one-pot braise. We spoon it over rice and peas to soak up every last drop of goodness, and serve a tangy arugula salad alongside for a vibrant boost of flavor and color. Dinner is served! Cook, relax, and enjoy!"
    };
    expect(mapRecipe(item)).toEqual(expected);
  });
});
