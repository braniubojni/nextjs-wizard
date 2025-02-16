import HomeBtn from '@/components/HomeBtn';
import clsx from 'clsx';

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center px-8 xs:px-16 justify-center lg:px-32 py-32">
      <HomeBtn />
      {children}
    </main>
  );
}
