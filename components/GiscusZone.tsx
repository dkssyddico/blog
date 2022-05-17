import Giscus from '@giscus/react';

type GiscusZoneProp = {
  term: string;
};

export default function GiscusZone({ term }: GiscusZoneProp) {
  return (
    <section className='my-8'>
      <Giscus
        id='comments'
        repo='dkssyddico/blog'
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID}
        category='General'
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping='specific'
        term={term}
        reactionsEnabled='1'
        emitMetadata='0'
        theme='dark_protanopia'
        lang='en'
        loading='lazy'
      ></Giscus>
    </section>
  );
}
