import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className='mx-auto max-w-3xl py-10'>
      <div className='flex items-center justify-between'>
        <div>
          <Link href='/'>
            <a className='text-2xl font-extrabold text-teal-400'>Hyemin Chae</a>
          </Link>
        </div>
        <div>
          <Link href='/blog'>
            <a
              className={`text-xl font-bold text-slate-200 ${
                router.pathname === '/blog' ? 'text-slate-400' : ''
              } `}
            >
              Blog
            </a>
          </Link>
          <Link href='/projects'>
            <a
              className={`ml-8 text-xl font-bold text-slate-200 ${
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
