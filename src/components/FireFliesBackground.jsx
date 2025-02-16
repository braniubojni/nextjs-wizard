'use client';

import { useEffect, useState } from 'react';
import { createFireFly } from './helpers';

const FireFliesBackground = () => {
  const [fireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireFlyPeriodically = () => {
      const newFireFly = createFireFly();
      setFireFlies((p) => [...p.slice(-14), newFireFly]);
    };
    const interval = setInterval(addFireFlyPeriodically, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {fireFlies?.map(({ id, top, left, animationDuration }) => (
        <div
          key={id}
          className="absolute w-[10px] h-[10px] rounded-full bg-firefly-radial"
          style={{
            top,
            left,
            animation: `move ${animationDuration} infinite alternate`,
          }}
        ></div>
      ))}
    </div>
  );
};
export default FireFliesBackground;
