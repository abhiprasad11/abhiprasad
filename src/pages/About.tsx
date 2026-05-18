import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const About: React.FC = () => {
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && processRef.current) {
          const steps = processRef.current.querySelectorAll('.process-step');
          anime({
            targets: steps,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="container mx-auto px-5 py-24 min-h-[80vh] flex flex-col justify-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">A Refined Process</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          My workflow is designed to ensure maximum creativity while delivering highly technical and polished results.
        </p>
      </div>

      <div ref={processRef} className="flex flex-col md:flex-row justify-between items-start gap-8 relative w-full max-w-6xl mx-auto">
        {/* Connector Line (hidden on mobile) */}
        <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-border z-0"></div>

        {[
          { num: '01', title: 'Concept', desc: 'Defining the core message and visual strategy.' },
          { num: '02', title: 'Design', desc: 'Crafting static assets with motion in mind.' },
          { num: '03', title: 'Motion', desc: 'Animating key elements to tell a story.' },
          { num: '04', title: 'Final', desc: 'Delivering polished, high-impact visuals.' },
        ].map((step, idx) => (
          <div key={idx} className="process-step w-full md:w-1/4 relative z-10 bg-background/80 backdrop-blur-sm p-6 rounded-lg opacity-0 border border-border/50 shadow-lg">
            <span className="font-mono text-xl text-accent font-bold">{step.num}</span>
            <h3 className="text-2xl font-serif text-primary mt-3 mb-2">{step.title}</h3>
            <p className="text-foreground/80">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
