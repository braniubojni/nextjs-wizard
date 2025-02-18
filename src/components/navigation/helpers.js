import {
  Github,
  Gitlab,
  Home,
  Linkedin,
  Mails,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from 'lucide-react';
import NavButton from './NavButton';
import { BtnList } from '@/app/data';
import { HALF_DEGREE } from './consts';
import clsx from 'clsx';

export const getIcon = (iconName) => {
  const className = 'w-full h-auto';
  const HomeComponent = <Home className={className} strokeWidth={1.5} />;
  const icons = {
    home: HomeComponent,
    about: <User className={className} strokeWidth={1.5} />,
    projects: <Palette className={className} strokeWidth={1.5} />,
    contact: <Mails className={className} strokeWidth={1.5} />,
    github: <Github className={className} strokeWidth={1.5} />,
    linkedin: <Linkedin className={className} strokeWidth={1.5} />,
    gitlab: <Gitlab className={className} strokeWidth={1.5} />,
    resume: <NotebookText className={className} strokeWidth={1.5} />,
  };

  return icons[iconName] || HomeComponent;
};

export const getRadius = (width) => {
  if (width > 1024) return 'calc(20vw - 1rem)';
  if (width > 768) return 'calc(30vw - 1rem)';
  return 'calc(40vw - 1rem)';
};

export const renderNavContent = ({
  angleIncrement,
  width,
  slice = [],
  className,
  labelDir,
}) => {
  let list = BtnList;
  const [start, end] = slice;
  if (slice.length) {
    list = BtnList.slice(start, end);
  }

  return (
    <div
      className={clsx(
        'w-max flex items-center relative hover:pause group',
        className
      )}
    >
      {list.map((btn, i) => {
        const angleRed = (angleIncrement * Math.PI * i) / HALF_DEGREE;
        const radius = getRadius(width);
        const x = `calc(${radius} * ${Math.cos(angleRed)})`;
        const y = `calc(${radius} * ${Math.sin(angleRed)})`;

        return (
          <NavButton key={btn.label} x={x} y={y} labelDir={labelDir} {...btn} />
        );
      })}
    </div>
  );
};
