import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-deep-slate min-h-screen text-slate-200 selection:bg-neon-teal selection:text-deep-slate">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Certificates />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;