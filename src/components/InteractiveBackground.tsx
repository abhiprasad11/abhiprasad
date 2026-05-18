import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let blob1X = 0;
    let blob1Y = 0;
    let blob2X = 0;
    let blob2Y = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      // Ease blobs towards mouse
      blob1X += (mouseX - blob1X) * 0.05;
      blob1Y += (mouseY - blob1Y) * 0.05;
      
      // Blob 2 trails slightly behind
      blob2X += (mouseX - blob2X) * 0.02;
      blob2Y += (mouseY - blob2Y) * 0.02;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${blob1X}px, ${blob1Y}px) translate(-50%, -50%)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${blob2X}px, ${blob2Y}px) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-black">
      {/* Primary Gold Blob */}
      <div 
        ref={blob1Ref}
        className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full mix-blend-screen opacity-30 blur-[100px] bg-primary"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
      
      {/* Accent Rust Blob */}
      <div 
        ref={blob2Ref}
        className="absolute top-0 left-0 w-[50vw] h-[50vw] rounded-full mix-blend-screen opacity-20 blur-[120px] bg-accent"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
    </div>
  );
};

export default InteractiveBackground;
