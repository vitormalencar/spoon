export type Recipe = {
  id: string,
  title: string,
  description: string,
  subtitle: string,
  url: string,
  chef: string,
  tags: Array<string>
};

export type State = {
  isLoading: boolean,
  isError: boolean,
  recipes: Array<Recipe>
};

export type Action = {
  type: string,
  payload: ?mixed
};
