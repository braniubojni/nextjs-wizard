'use client';

import { createPortal } from 'react-dom';

export const Modal = ({ toggle, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-insent text-center space-y-8">
        <p className="font-light">Do you like to play background music?</p>
        <div className="flex justify-center space-x-4 items-center">
          <button
            onClick={toggle}
            className="px-4 py-2 border border-accent/30 border-colid hover:shadow-glass-sm rounded "
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-accent/30 border-colid hover:shadow-glass-sm rounded "
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('my-modal')
  );
};
