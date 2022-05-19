export const siteMetadata = {
  title: "Hyemin's Blog",
  author: 'Hyemin Chae',
  description: "Hyemin's Blog",
  siteUrl: 'https://dkssyddico-blog.vercel.app',
  socialBanner: '/main/siteImg.png',
  mail: 'dkssyddico@naver.com',
  github: 'https://github.com/dkssyddico',
  comment: {
    giscusConfig: {
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
      category: 'General',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    },
  },
};
