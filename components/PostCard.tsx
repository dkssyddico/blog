import Link from 'next/link';
import { PostCardProps } from '../lib/types';

export default function PostCard({ date, description, title, slug, tags }: PostCardProps) {
  return (
    <Link href={'/posts/' + slug} passHref>
      <a>
        <div className='mb-10 rounded-md bg-slate-700 p-6 transition hover:bg-slate-600'>
          <p className='mb-3 text-xs text-slate-300'>{date}</p>
          <h3 className='mb-5 text-2xl font-semibold text-teal-400'>{title}</h3>
          <div className='mb-6'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='mr-4 rounded-md bg-teal-400 p-2 text-sm font-bold text-slate-700'
              >
                {tag}
              </span>
            ))}
          </div>
          <p className='text-lg leading-4 text-slate-300'>{description}</p>
        </div>
      </a>
    </Link>
  );
}
