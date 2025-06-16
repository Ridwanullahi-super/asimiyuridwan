import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WhatsAppChat from './components/WhatsAppChat';
import Resume from './components/Resume';

// import Cv from './components/Cv';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Services />
          <Resume />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Asimiyu Ridwan. All rights reserved.</p>
          </div>
        </footer>
        <WhatsAppChat />
      </div>
    </ThemeProvider>
  );
}

export default App;