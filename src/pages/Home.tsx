import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const Home: React.FC = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Blur-Fade-Reveal for Hero text
    if (heroTextRef.current) {
      const texts = heroTextRef.current.querySelectorAll('.hero-anim');
      anime({
        targets: texts,
        opacity: [0, 1],
        filter: ['blur(10px)', 'blur(0px)'],
        scale: [1.05, 1],
        translateY: [20, 0],
        duration: 1200,
        delay: anime.stagger(200, { start: 2000 }), // start after preloader finishes
        easing: 'spring(1, 80, 10, 0)'
      });
    }

    if (heroVisualRef.current) {
      anime({
        targets: heroVisualRef.current,
        opacity: [0, 1],
        scale: [0.95, 1],
        duration: 1500,
        delay: 2400,
        easing: 'easeOutExpo'
      });

      // Ambient floating animation for the photo
      anime({
        targets: '.photo-float',
        translateY: [-10, 10],
        direction: 'alternate',
        loop: true,
        duration: 3000,
        easing: 'easeInOutSine'
      });
    }
  }, []);

  // 3D Tilt Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroVisualRef.current) return;
    const { left, top, width, height } = heroVisualRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    heroVisualRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!heroVisualRef.current) return;
    heroVisualRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    heroVisualRef.current.style.transition = 'transform 0.5s ease';
    setTimeout(() => {
      if (heroVisualRef.current) heroVisualRef.current.style.transition = '';
    }, 500);
  };

  return (
    <section id="home" className="container mx-auto px-5 min-h-screen flex items-center pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <div ref={heroTextRef} className="flex flex-col gap-4">
          <h1 className="hero-anim text-5xl md:text-8xl font-serif text-white leading-tight">
            Hi, I am Abhi
          </h1>
          <p className="hero-anim text-xl md:text-2xl font-light text-foreground/80">
            Motion Graphic Designer & Video Editor
          </p>
          <p className="hero-anim text-2xl md:text-3xl font-serif italic text-primary">
            Design that moves.
          </p>
          <div className="hero-anim flex flex-wrap gap-4 mt-6">
            <a href="mailto:hello@abhi.design?subject=Project%20Inquiry&body=Hi%20Abhi,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you." className="px-8 py-3 bg-primary text-background font-mono text-sm uppercase rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(201,162,74,0.3)]">Mail</a>
            <a href="#work" className="px-8 py-3 border border-border text-white font-mono text-sm uppercase rounded-full hover:border-primary hover:text-primary transition-colors">Portfolio</a>
          </div>
        </div>

        <div
          className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center perspective-[1000px]"
        >
          <div
            ref={heroVisualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-4/5 h-4/5 rounded-2xl glass-card p-2 transition-transform duration-75 cursor-crosshair z-10"
            style={{ opacity: 0 }}
          >
            {/* Animated glowing backdrop */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full mix-blend-screen -z-10 photo-float animate-pulse"></div>

            <div className="w-full h-full rounded-xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-transparent to-primary/20 pointer-events-none z-10 mix-blend-overlay"></div>
              <img
                src="/assets/abhi.jpeg"
                alt="Abhi"
                className="w-full h-full object-cover filter contrast-125 saturate-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
