import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';

import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import About          from './components/About';
import Skills         from './components/Skills';
import Experience     from './components/Experience';
import Projects       from './components/Projects';
import Certifications from './components/Certifications';
import Contact        from './components/Contact';
import Footer         from './components/Footer';

const App = () => (
  <ThemeProvider>
    {/* Toast notifications */}
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: { borderRadius: '12px', fontSize: '14px' },
      }}
    />

    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
