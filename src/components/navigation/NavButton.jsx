import Link from 'next/link';
import { getIcon } from './helpers';
import ResponsiveComponent from '../ResponsiveComponent';
import { MOBILE_WIDTH } from './consts';
import clsx from 'clsx';

const NavButton = ({ x, y, label, link, icon, newTab, labelDir = 'right' }) => {
  return (
    <ResponsiveComponent>
      {({ size }) =>
        size && size.width > MOBILE_WIDTH ? (
          <div
            className="absolute cursor-pointer z-50"
            style={{
              transform: `translate(${x}, ${y})`,
            }}
          >
            <Link
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              href={link}
              target={newTab ? '_blank' : '_self'}
            >
              <span className="relative w-14 h-14 p-4 animate-spint-slow-reverse group-hover:pause hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </Link>
          </div>
        ) : (
          <div className="cursor-pointer z-50">
            <Link
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              href={link}
              target={newTab ? '_blank' : '_self'}
            >
              <span className="relative w-14 h-14 p-4 hover:text-accent">
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className={clsx(
                    'absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap',
                    labelDir === 'left' ? 'right-full left-auto' : ''
                  )}
                >
                  {label}
                </span>
              </span>
            </Link>
          </div>
        )
      }
    </ResponsiveComponent>
  );
};
export default NavButton;
