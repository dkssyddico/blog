import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  stack: string[];
  description: string;
  github: string;
  site: string;
  image: string;
}

export default function ProjectCard({
  name,
  stack,
  description,
  github,
  site,
  image,
}: ProjectCardProps) {
  return (
    <div className=''>
      <div className='mb-10 flex items-center bg-slate-700 p-8'>
        <div className='mr-8 flex h-60 basis-2/5 items-center justify-center bg-teal-100'>
          <Image src={image} width='300' height='250' alt='main' />
        </div>
        <div className='flex basis-3/5 flex-col items-end'>
          <h3 className='mb-4 text-2xl font-bold text-teal-400'>{name}</h3>
          <div className=''>
            <p className='mb-4  text-slate-200'>{description}</p>
          </div>
          <div className='mb-4 flex'>
            {stack.map((s) => (
              <div
                key={s}
                className='m-1 rounded-md bg-teal-400 p-2 text-sm font-bold text-gray-900'
              >
                {s}
              </div>
            ))}
          </div>
          <div className='flex items-center'>
            <a target='_blank' rel='noreferrer' href={github}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-github text-slate-200'
              >
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
              </svg>
            </a>
            <a target='_blank' className='ml-4' rel='noreferrer' href={site}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather  feather-external-link text-slate-200'
              >
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                <polyline points='15 3 21 3 21 9'></polyline>
                <line x1='10' y1='14' x2='21' y2='3'></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
