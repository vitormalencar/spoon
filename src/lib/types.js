export type Tag = {
  fields: {
    name: string
  }
};

export type Chef = {
  fields: {
    name: string
  }
};

export type Recipe = {
  sys: {
    id: string
  },
  fields: {
    chef: Object<Chef>,
    tags: Array<Tag>,
    title: string,
    description: string,
    photo: {
      fields: {
        file: {
          url: string
        }
      }
    }
  }
};
