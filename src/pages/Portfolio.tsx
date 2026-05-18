import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import ProjectCard from '../components/ProjectCard';
import VideoModal from '../components/VideoModal';

const projects = [
  { id: 1, title: 'Mother\'s Day', tag: 'Social Media', type: 'image' as const, url: '/assets/Social Media post/Mothers_s Day ( Saffron Stories ).png' },
  { id: 2, title: 'Navratri Meta Ad', tag: 'Social Media', type: 'image' as const, url: '/assets/Social Media post/Navratri Meta Ad.jpg' },
  { id: 3, title: 'Standee Breakfast', tag: 'Standee', type: 'image' as const, url: '/assets/Standee/Standee CP Dasaprakash - breakfast.png' },
  { id: 4, title: 'Standee Mockup', tag: 'Standee', type: 'image' as const, url: '/assets/Standee/Standee dasaprakash  Mockup.png' },
  { id: 13, title: 'Growing Up Reel', tag: 'Videos', type: 'video' as const, url: '/assets/videos/Reel type edit for growing Up.mp4', poster: '/assets/thumbnails/Grow Up.jpg' },
  { id: 5, title: 'Mix Fruit Juice', tag: 'Tent Card', type: 'image' as const, url: '/assets/tent Card/Jamshedpur Ccreative ( Mix Fruit Juice ).png' },
  { id: 6, title: 'Juice Mockup', tag: 'Tent Card', type: 'image' as const, url: '/assets/tent Card/juice mockup.png' },
  { id: 14, title: 'Talking Head Long Form', tag: 'Videos', type: 'video' as const, url: '/assets/videos/Talking Head Edit Long form Video.mp4', poster: '/assets/thumbnails/Talking Head edit.jpeg' },
  { id: 11, title: 'Motion Graphic Animation', tag: 'Videos', type: 'video' as const, url: '/assets/videos/Motion graphic animation Long form VIdeo.mp4', poster: '/assets/thumbnails/Motion Graphics.jpeg' },
  { id: 21, title: 'Tharun Reel', tag: 'Videos', type: 'video' as const, url: '/assets/videos/Tharun Reel.mp4', poster: '/assets/thumbnails/THARUN.jpeg' },
  { id: 22, title: 'Metro Media SFX', tag: 'Videos', type: 'video' as const, url: '/assets/videos/metro media sfx- Reel.mp4', poster: '/assets/thumbnails/Metromedia.jpg' },
  { id: 23, title: 'UI Animation', tag: 'Videos', type: 'video' as const, url: '/assets/videos/ui_animation Reel.mp4', poster: '/assets/thumbnails/ui_animation.jpeg' },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.tag)))];

const Portfolio: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.tag === activeCategory);

  const getColumnProjects = (colIndex: number) => {
    if (activeCategory === 'All') {
      if (colIndex === 0) return filteredProjects.filter(p => [1, 4, 6, 21].includes(p.id));
      if (colIndex === 1) return filteredProjects.filter(p => [2, 13, 14, 11, 22].includes(p.id));
      if (colIndex === 2) return filteredProjects.filter(p => [3, 5, 23].includes(p.id));
    }
    return filteredProjects.filter((_, i) => i % 3 === colIndex);
  };

  useEffect(() => {
    // Basic Intersection Observer to trigger stagger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && gridRef.current) {
          const cards = gridRef.current.querySelectorAll('.project-card');
          anime({
            targets: cards,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            delay: anime.stagger(100),
            easing: 'easeOutExpo'
          });
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Re-animate when category changes
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.project-card');
      anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        delay: anime.stagger(50),
        easing: 'easeOutQuad'
      });
    }
  }, [activeCategory]);

  return (
    <section id="work" className="container mx-auto px-5 py-24 min-h-screen">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Selected Work</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mb-8">
          A curated collection of my recent projects. Click on any video project to explore its layers and anatomy.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-background'
                  : 'bg-transparent text-foreground border border-border hover:border-primary/50 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={gridRef}
        className="flex flex-col md:flex-row gap-6 w-full"
      >
        {/* Column 1 */}
        <div className="flex-1 flex flex-col gap-6">
          {getColumnProjects(0).map((proj) => (
            <ProjectCard
              key={proj.id}
              id={proj.id}
              title={proj.title}
              tag={proj.tag}
              type={proj.type}
              mediaUrl={proj.url}
              poster={'poster' in proj ? proj.poster : undefined}
              onClick={() => setSelectedProject(proj)}
            />
          ))}
          {/* Flexible Bottom Spacer */}
          <div className="flex-grow project-card rounded-xl border border-border/10 bg-white/[0.02] backdrop-blur-sm min-h-[120px] opacity-0 flex items-center justify-center p-6">
            <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-center">
              Visual<br/>Storytelling
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 flex flex-col gap-6">
          {getColumnProjects(1).map((proj) => (
            <ProjectCard
              key={proj.id}
              id={proj.id}
              title={proj.title}
              tag={proj.tag}
              type={proj.type}
              mediaUrl={proj.url}
              poster={'poster' in proj ? proj.poster : undefined}
              onClick={() => setSelectedProject(proj)}
            />
          ))}
          {/* Flexible Bottom Spacer */}
          <div className="flex-grow project-card rounded-xl border border-border/10 bg-white/[0.02] backdrop-blur-sm min-h-[120px] opacity-0 flex items-center justify-center p-6">
            <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-center">
              Dynamic<br/>Motion
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex-1 flex flex-col gap-6">
          {getColumnProjects(2).map((proj) => (
            <ProjectCard
              key={proj.id}
              id={proj.id}
              title={proj.title}
              tag={proj.tag}
              type={proj.type}
              mediaUrl={proj.url}
              poster={'poster' in proj ? proj.poster : undefined}
              onClick={() => setSelectedProject(proj)}
            />
          ))}
          {/* Flexible Bottom Spacer */}
          <div className="flex-grow project-card rounded-xl border border-border/10 bg-white/[0.02] backdrop-blur-sm min-h-[120px] opacity-0 flex items-center justify-center p-6">
            <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest text-center">
              Always<br/>Creating
            </p>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject ? { title: selectedProject.title, mediaUrl: selectedProject.url, type: selectedProject.type } : null}
      />
    </section>
  );
};

export default Portfolio;
