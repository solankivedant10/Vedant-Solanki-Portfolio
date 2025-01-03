import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Vedant Solanki</h1>
        <div className="flex flex-wrap gap-4 items-center text-gray-300">
          <a href="tel:+919484697392" className="flex items-center gap-2 hover:text-white">
            <Phone size={18} />
            +91 9484697392
          </a>
          <a href="mailto:vedants1084@gmail.com" className="flex items-center gap-2 hover:text-white">
            <Mail size={18} />
            vedants1084@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/vedant-solanki-842519249/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/solankivedant10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}