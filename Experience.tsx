import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-16 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Briefcase className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Data Science Intern</h3>
              <p className="text-gray-600 mb-2">Tech Elecon</p>
              <p className="text-gray-700">
                Developed a Signature Verification system using Deep Learning YOLO Algorithm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}