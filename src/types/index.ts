export type Param<T> = {
  params: T;
};

export type Blog = {
  slug: string;
};

export type Contributor = {
  name: string;
  description?: string;
  link: string;
  imageUri: string;
  color?: string;
};
