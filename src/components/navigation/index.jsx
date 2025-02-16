'use client';

import { BtnList } from '@/app/data';
import useScreenSize from '@/hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';
import { MAX_DEGREE, MOBILE_WIDTH } from './consts';
import { renderNavContent } from './helpers';

const Navigation = () => {
  const angleIncrement = MAX_DEGREE / BtnList.length;
  const size = useScreenSize();

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) =>
          size && size.width > MOBILE_WIDTH ? (
            renderNavContent({
              angleIncrement,
              width: size.width,
              className: 'animate-spin-slow justify-center',
            })
          ) : (
            <div className="flex items-center justify-between w-full">
              {renderNavContent({
                angleIncrement,
                width: size.width,
                slice: [0, BtnList.length / 2],
                className:
                  'w-full  flex-col px-2.5 xs:w-14 xs:w-max xs:items-center space-y-4 xs:p-0',
              })}
              {renderNavContent({
                angleIncrement,
                width: size.width,
                labelDir: 'left',
                slice: [BtnList.length / 2, BtnList.length],
                className:
                  'w-full  flex-col px-2.5 xs:w-14 xs:w-max xs:items-center space-y-4 xs:p-0',
              })}
            </div>
          )
        }
      </ResponsiveComponent>
    </div>
  );
};
export default Navigation;
