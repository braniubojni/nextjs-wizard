import { projectsData } from '@/app/data';
import RenderModel from '@/components/RenderModel';
import { Staff } from '@/components/models/Staff';
import ProjectList from '@/components/projects';
import Image from 'next/image';
import bg from '../../../../public/background/projects-background.png';

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
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
