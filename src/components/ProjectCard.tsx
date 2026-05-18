import React, { useRef } from 'react';
import { Play } from 'lucide-react';

interface ProjectCardProps {
  id: string | number;
  title: string;
  tag: string;
  mediaUrl: string;
  poster?: string;
  type: 'video' | 'image';
  onClick: () => void;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tag, mediaUrl, poster, type, onClick, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (type === 'video' && videoRef.current) {
      videoRef.current.pause();
      // Optional: reset video to start when leaving
      // videoRef.current.currentTime = 0;
    }
  };
  return (
    <div 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`project-card group cursor-pointer relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-md border border-border transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(201,162,74,0.15)] w-full ${className}`}
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {type === 'video' ? (
        <video 
          ref={videoRef}
          muted 
          loop 
          playsInline 
          poster={poster}
          src={mediaUrl} 
          className="w-full h-auto object-cover block"
        />
      ) : (
        <img 
          src={mediaUrl} 
          alt={title}
          className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Hover Icon */}
      {type === 'video' && (
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-100">
          <div className="w-16 h-16 rounded-full border border-primary/50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <Play className="text-primary w-6 h-6 ml-1" />
          </div>
        </div>
      )}

      {/* Metadata */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="font-mono text-xs font-semibold tracking-wider text-primary px-3 py-1 border border-primary/30 rounded-full w-fit bg-black/50 backdrop-blur-md uppercase">
          {tag}
        </span>
        <h3 className="text-xl md:text-2xl font-serif text-white m-0">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
