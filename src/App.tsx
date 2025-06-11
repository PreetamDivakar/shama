import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Hero />
          <About />
          <Skills />
          <Blog />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;