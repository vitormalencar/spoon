// @flow

import type { Recipe, Tag, Chef } from "./types";

export const mapChefs = (chef: Chef): string =>
  chef !== undefined ? chef.fields.name : "Anonimus";

export const mapTags = (tags: Tag): Array<string> =>
  tags !== undefined ? tags.map(({ fields: { name } }) => name) : [];

export const mapRecipe = ({
  sys: { id },
  fields: {
    chef,
    tags,
    title,
    description,
    photo: {
      fields: {
        file: { url }
      }
    }
  }
}: Recipe) => ({
  id,
  title,
  description,
  url,
  chef: mapChefs(chef),
  tags: mapTags(tags)
});
