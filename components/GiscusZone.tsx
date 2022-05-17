import Giscus from '@giscus/react';
import { siteMetadata } from '../data/siteMetadata';

type GiscusZoneProp = {
  term: string;
};

export default function GiscusZone({ term }: GiscusZoneProp) {
  return (
    <section className='my-8'>
      <Giscus
        id='comments'
        repo='dkssyddico/blog'
        repoId={siteMetadata.comment.giscusConfig.repositoryId}
        category={siteMetadata.comment.giscusConfig.category}
        categoryId={siteMetadata.comment.giscusConfig.categoryId}
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
