export type FrontMatter = {
  date: string;
  description: string;
  title: string;
  tags: string[];
  isDraft: boolean;
};

export type PostsProps = {
  posts: {
    frontMatter: FrontMatter;
    slug: string;
  }[];
  tags: Record<string, number>;
};

export type PostCardProps = {
  date: string;
  description: string;
  title: string;
  slug: string;
  tags: string[];
};

export type ContainerProps = {
  children: React.ReactNode;
  title?: string;
};
