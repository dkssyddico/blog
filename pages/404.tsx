import Link from 'next/link';
import Container from '../components/Container';

export default function NotFound() {
  return (
    <Container>
      <div className='my-20 flex w-full flex-col items-center justify-center'>
        <h1 className='mb-10 text-2xl font-bold text-slate-200'>404 | Page Not Found</h1>
        <button className='rounded-md bg-teal-400 px-4 py-2'>
          <Link href='/'>
            <a className='font-bold'>Go to main</a>
          </Link>
        </button>
      </div>
    </Container>
  );
}
