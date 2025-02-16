/* eslint-disable @next/next/no-img-element */
import {
  ABOUT_DESC,
  githubRepo,
  githubStreak,
  githubSummary,
  githubTopLangs,
  skillsIcon,
} from './consts';
import LayoutItem from './LayoutItem';

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <LayoutItem className="col-span-full lg:col-span-8 row-span-2 flex flex-col items-start justify-center gap-3">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Creator of wonder
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {ABOUT_DESC}
          </p>
        </LayoutItem>
        <LayoutItem className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <span>40+</span>{' '}
            <sub className="font-semibold text-base">Clients</sub>
          </p>
        </LayoutItem>
        <LayoutItem className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            <span>7+</span>{' '}
            <sub className="font-semibold text-base">Years of Experience</sub>
          </p>
        </LayoutItem>
        <LayoutItem className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src={githubTopLangs}
            alt="Github Top Languages"
            loading="lazy"
          />
        </LayoutItem>
        <LayoutItem className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src={githubSummary}
            alt="Github Stats"
            loading="lazy"
          />
        </LayoutItem>
        <LayoutItem className="col-span-full">
          <img
            className="w-full h-auto"
            src={skillsIcon}
            alt="Github Stats"
            loading="lazy"
          />
        </LayoutItem>
        <LayoutItem className="col-span-full md:col-span-6 !p-0">
          <img
            src={githubStreak}
            loading="lazy"
            className="w-full h-auto"
            alt="Github Streak"
          />
        </LayoutItem>
        <LayoutItem className="col-span-full md:col-span-6 !p-0">
          <img
            src={githubRepo}
            loading="lazy"
            className="w-full h-auto"
            alt="Github Repository"
          />
        </LayoutItem>
      </div>
    </section>
  );
};
export default AboutDetails;
