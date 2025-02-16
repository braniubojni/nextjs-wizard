import RenderModel from '@/components/RenderModel';
import Hat from '@/components/models/Hat';
import Image from 'next/image';
import bg from '../../../../public/background/about-background.png';
import AboutDetails from '@/components/about';

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background"
        className="-z-50 w-full h-full object-cover object-center opacity-25 fixed top-0 left-0"
      />
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/3 -translate-y-1/4 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex items-center justify-center flex-col">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/3">
          <h1 className="font-bold text-6xl xs:text-7xl lg:text-8xl text-accent">
            braniubojni
          </h1>
          <p className="font-light text-foreground text-ls">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
