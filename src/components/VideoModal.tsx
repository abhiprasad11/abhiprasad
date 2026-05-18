import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    mediaUrl: string;
    type: 'video' | 'image';
  } | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, project }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      anime({
        targets: overlayRef.current,
        opacity: [0, 1],
        duration: 400,
        easing: 'easeOutSine'
      });
      anime({
        targets: contentRef.current,
        scale: [0.95, 1],
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 100,
        easing: 'easeOutExpo'
      });
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleClose = () => {
    anime({
      targets: [contentRef.current, overlayRef.current],
      opacity: 0,
      scale: 0.95,
      duration: 400,
      easing: 'easeInSine',
      complete: onClose
    });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-24">
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={handleClose}
      />
      
      <div 
        ref={contentRef}
        className="relative w-full max-w-6xl aspect-video bg-background border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-[210] bg-gradient-to-b from-black/80 to-transparent">
          <h2 className="text-xl font-serif text-white">{project.title}</h2>
          <button 
            onClick={handleClose}
            className="p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="relative flex-grow flex items-center justify-center bg-black overflow-hidden">
          {project.type === 'video' ? (
            <video muted loop playsInline autoPlay src={project.mediaUrl} className="w-full h-full object-cover" />
          ) : (
            <img src={project.mediaUrl} alt={project.title} className="w-full h-full object-contain" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
