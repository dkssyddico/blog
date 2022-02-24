import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className='flex items-center justify-between px-60 py-10'>
        <Link href='/'>
          <a className='text-2xl font-extrabold text-teal-400'>Hyemin Chae</a>
        </Link>
        <Link href='/blog'>
          <a className='text-xl font-bold'>Blog</a>
        </Link>
      </div>
    </nav>
  );
}
