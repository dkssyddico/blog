import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='mx-auto max-w-3xl py-10'>
      <div className='flex items-center justify-between'>
        <Link href='/'>
          <a className='text-2xl font-extrabold text-teal-400'>Hyemin Chae</a>
        </Link>
        <Link href='/blog'>
          <a className='text-xl font-bold text-slate-200'>Blog</a>
        </Link>
      </div>
    </nav>
  );
}
