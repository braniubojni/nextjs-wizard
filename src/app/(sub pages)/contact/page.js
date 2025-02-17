import RenderModel from '@/components/RenderModel';
import Hat from '@/components/models/Hat';
import Image from 'next/image';
import bg from '../../../../public/background/contact-background.png';
import AboutDetails from '@/components/about';
import { DESCRIPTION } from './consts';
import Form from '@/components/contact/Form';

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
      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light font-inter">{DESCRIPTION}</p>
        </div>
        <Form />
      </article>
    </>
  );
}
