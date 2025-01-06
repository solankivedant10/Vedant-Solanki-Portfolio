import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">CAMPUS PLACEMENT WEBAPP</h3>
            <div className="flex gap-2">
              <a 
                href="https://elevateplacements.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </div>
          <p className="text-gray-600 mb-4">AUG '24 - OCT '24</p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Developed a comprehensive web app to streamline campus placement processes by integrating announcements, data collection, and communication into a single platform.</li>
            <li>Addressed the inefficiencies of using multiple platforms (Facebook, Google Forms, WhatsApp) for placement-related activities.</li>
            <li>Enhanced user experience by providing a centralized point for all placement processes, improving accessibility and reducing errors.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
