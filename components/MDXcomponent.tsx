import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';

const MDXcomponents = {
  Image,
};

export const MDXLayoutRenderer = ({ code }) => {
  const MDXLayout = useMemo(() => getMDXComponent(code), [code]);

  return <MDXLayout components={MDXcomponents} />;
};
