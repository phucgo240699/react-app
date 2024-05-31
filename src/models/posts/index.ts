export type PostAuthor = {
  _id?: string;
  name?: string;
  avatarUrl?: string;
};

export type Post = {
  _id?: string;
  title?: string;
  thumbnailUrl?: string;
  author?: PostAuthor;
};
