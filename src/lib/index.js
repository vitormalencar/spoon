// @flow

import type { Recipe, Tag, Chef } from "./types";

export const mapChefs = (chef: Chef): string =>
  chef !== undefined ? chef.fields.name : "Anonimus";

export const mapTags = (tags: Tag): Array<string> =>
  tags !== undefined ? tags.map(({ fields: { name } }) => name) : [];

export const mapTitle = (title: string, pattern: string): string =>
  title.substring(0, title.indexOf(pattern));

export const mapSubtitle = (title: string, pattern: string): string =>
  title.substring(title.indexOf(pattern));

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
  title: mapTitle(title, "with"),
  subtitle: mapSubtitle(title, "with"),
  description,
  url,
  chef: mapChefs(chef),
  tags: mapTags(tags)
});
