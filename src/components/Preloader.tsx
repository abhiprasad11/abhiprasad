import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

const Preloader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const bgElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = anime.timeline({
      easing: 'easeInOutQuad',
      complete: () => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
      }
    });

    // Animate background elements
    tl.add({
      targets: bgElementsRef.current,
      scale: [0.5, 1.5],
      opacity: [0, 0.3],
      rotateZ: [-45, 45],
      duration: 2500,
      easing: 'easeOutExpo'
    });

    // Animate words in with a colorful stagger (overlap with bg animation)
    tl.add({
      targets: wordsRef.current,
      translateY: [40, 0],
      opacity: [0, 1],
      rotateZ: [-5, 0],
      color: (el: HTMLElement, i: number) => {
        const colors = ['#ffffff', '#C9A24A', '#8B3A2B', '#ffffff'];
        return ['#ffffff', colors[i % colors.length]]; // animate color
      },
      duration: 1200,
      delay: anime.stagger(150),
      easing: 'easeOutExpo'
    }, '-=2000'); // start 2000ms earlier to overlap

    // Hold
    tl.add({
      duration: 800
    });

    // Animate words out
    tl.add({
      targets: wordsRef.current,
      translateY: [0, -40],
      opacity: [1, 0],
      duration: 600,
      delay: anime.stagger(100),
      easing: 'easeInExpo'
    });

    // Fade out background and container
    tl.add({
      targets: [containerRef.current, ...bgElementsRef.current],
      opacity: 0,
      scale: 1.1,
      duration: 800,
      easing: 'easeInOutSine'
    }, '-=400');

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  const words = ['Welcome', 'to', 'my', 'portfolio.'];

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div 
        ref={el => { if (el) bgElementsRef.current[0] = el; }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary mix-blend-screen blur-[120px] opacity-0"
      />
      <div 
        ref={el => { if (el) bgElementsRef.current[1] = el; }}
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-accent mix-blend-screen blur-[150px] opacity-0"
      />
      
      {/* Text Layer */}
      <div ref={textRef} className="relative z-10 flex gap-4 font-serif text-4xl md:text-6xl overflow-hidden py-4">
        {words.map((word, i) => (
          <span 
            key={i} 
            ref={el => { if (el) wordsRef.current[i] = el; }}
            className="inline-block transform origin-bottom font-medium"
            style={{ opacity: 0 }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
