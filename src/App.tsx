import React from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Preloader from './components/Preloader';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <>
      <Preloader />
      <InteractiveBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[100] text-white backdrop-blur-sm bg-black/20">
        <div className="font-serif text-2xl tracking-widest">ABHI.</div>
        <nav className="flex gap-8">
          <a href="#home" className="font-sans text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#work" className="font-sans text-foreground hover:text-primary transition-colors">Work</a>
          <a href="#process" className="font-sans text-foreground hover:text-primary transition-colors">Process</a>
        </nav>
      </header>

      <main className="w-full">
        <Home />
        <Portfolio />
        <About />
      </main>

      <footer className="min-h-[50vh] flex flex-col justify-center items-center text-center bg-black/40 backdrop-blur-md p-8 border-t border-border relative">
        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white">Let's create something that moves.</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@abhi.design?subject=Project%20Inquiry&body=Hi%20Abhi,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you." className="text-lg px-10 py-4 border border-primary rounded-full hover:bg-primary hover:text-background transition-colors text-primary font-mono outline-glow uppercase tracking-widest text-sm">
            Work With Me
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-4 border border-border rounded-full hover:border-primary hover:text-primary transition-colors text-white font-mono uppercase text-sm tracking-wider">
            Instagram
          </a>
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
          <p className="text-foreground/50 font-sans text-sm tracking-wider uppercase text-left">
            Created By <a href="https://github.com/krsatyam11" target="_blank" rel="noreferrer" className="text-primary hover:underline transition-colors">Kr Satyam</a>
          </p>
          <a href="#home" className="text-foreground/50 font-sans text-sm tracking-wider uppercase hover:text-primary transition-colors">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
