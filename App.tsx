import React from 'react';
import Header from './components/Header';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Vedant Solanki. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;