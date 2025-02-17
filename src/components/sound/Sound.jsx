'use client';

import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BIRDS_SOUND, PLAY_EVENTS } from '../consts';
import { Modal } from './Modal';

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggler = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    localStorage.setItem('musicConsent', isPlaying ? 'false' : 'true');
    setShowModal(false);
  };
  const onClose = () => {
    setIsPlaying(false);
    audioRef.current.pause();
    localStorage.setItem('musicConsent', 'false');
    setShowModal(false);
  };
  const handleFirstIserInteraction = useCallback(() => {
    const consent = localStorage.getItem('musicConsent');
    if (consent === 'true' && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    PLAY_EVENTS.forEach((event) => {
      document.removeEventListener(event, handleFirstIserInteraction);
    });
  }, [isPlaying]);

  useEffect(() => {
    const consent = localStorage.getItem('musicConsent');
    if (consent) {
      const condition = consent === 'true';
      setIsPlaying(condition);
      if (condition) {
        PLAY_EVENTS.forEach((event) => {
          document.addEventListener(event, handleFirstIserInteraction);
        });
      }
    } else {
      setShowModal(true);
    }
  }, [handleFirstIserInteraction]);

  return (
    <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
      {showModal && <Modal toggle={toggler} onClose={onClose} />}
      <audio ref={audioRef} autoPlay={true} loop>
        <source src={BIRDS_SOUND} type="audio/mpeg" />
        your browser does not support the audio element.
      </audio>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-10 h-10 xs:h-14 xs:w-14 text-foreground rounded-full flex items-center justify-center custom-bg cursor-pointer z-50 p-2.5 xs:p-4"
        aria-label={'Sound'}
        onClick={toggler}
      >
        {isPlaying ? (
          <Volume2
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        ) : (
          <VolumeX
            className="w-full h-full text-foreground group-hover:text-accent"
            strokeWidth={1.5}
          />
        )}
      </motion.button>
    </div>
  );
};
export default Sound;
