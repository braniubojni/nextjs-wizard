import Image from 'next/image';
import bg from '../../public/background/projects-background.png';
import RenderModel from '@/components/RenderModel';
import Wizard from '@/components/models/Wizard';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">
        {/* render navigation & 3d component */}
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
