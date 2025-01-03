import React from 'react';
import { Code2, Database, Layout } from 'lucide-react';

const technologies = [
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'React', category: 'Frontend' },
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MERN Stack', category: 'Full Stack' },
];

const SkillCard = ({ icon: Icon, title, color, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className={`flex items-center gap-2 mb-4`}>
      <div className={`p-2 rounded-lg ${color.bg}`}>
        <Icon className={color.text} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map(tech => (
        <li 
          key={tech.name} 
          className="flex items-center gap-2 p-2 rounded-md transition-colors duration-200 hover:bg-gray-50"
        >
          <span className={`w-2 h-2 rounded-full ${color.dot}`}></span>
          <span className="font-medium">{tech.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function TechStack() {
  const cards = [
    {
      icon: Code2,
      title: 'Languages',
      color: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        dot: 'bg-blue-600'
      },
      skills: technologies.filter(t => t.category === 'Languages')
    },
    {
      icon: Layout,
      title: 'Frontend',
      color: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        dot: 'bg-green-600'
      },
      skills: technologies.filter(t => t.category === 'Frontend')
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        dot: 'bg-purple-600'
      },
      skills: technologies.filter(t => ['Database', 'Full Stack'].includes(t.category))
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <SkillCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}