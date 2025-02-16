import Image from 'next/image';
import bg from '../../../../public/background/projects-background.png';
import RenderModel from '@/components/RenderModel';
import Wizard from '@/components/models/Wizard';
import Navigation from '@/components/navigation';
import { Staff } from '@/components/models/Staff';
import ProjectList from '@/components/projects';
import { projectsData } from '@/app/data';

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background"
        className="-z-50 w-full h-full object-cover object-center opacity-25 fixed top-0 left-0"
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-16 lg:top-20 left-1/2 lg:-left-20 -translate-x-1/2 lg:translate-x-0 -z-10 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
