import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className='mx-auto max-w-4xl px-8 py-10'>
      <div className='flex items-center justify-between'>
        <div>
          <Link href='/'>
            <a className='text-2xl font-extrabold text-teal-400'>Hyemin Chae</a>
          </Link>
        </div>
        <div>
          <Link href='/posts'>
            <a
              className={`text-xl font-bold text-slate-200 transition hover:text-slate-400 ${
                router.pathname === '/posts' ? 'text-slate-400' : ''
              } `}
            >
              Posts
            </a>
          </Link>
          <Link href='/projects'>
            <a
              className={`ml-8 text-xl font-bold text-slate-200 transition hover:text-slate-400 ${
                router.pathname === '/projects' ? 'text-slate-400' : ''
              } `}
            >
              Projects
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
