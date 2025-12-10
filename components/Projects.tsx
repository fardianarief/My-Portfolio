import React, { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { fetchSheetData } from '../services/sheetService';
import { getIcon } from '../utils/iconMap';

const defaultProjects = [
  {
    id: 1,
    title: "EMR Clinic Apps",
    description: "An integrated Electronic Medical Record system designed for small clinics to streamline patient data, diagnosis recording, and pharmacy integration with an intuitive UI.",
    icon: "TabletSmartphone",
    tags: ["Health Tech", "UI/UX", "Data Flow"]
  },
  {
    id: 2,
    title: "Nurse Sync Apps",
    description: "A collaborative digital workspace for nurses to manage shifts, handover notes, and patient monitoring tasks in real-time, improving team coordination.",
    icon: "Network",
    tags: ["Workflow", "Real-time", "Management"]
  }
];

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>(defaultProjects);

  useEffect(() => {
    const getData = async () => {
      const data: any = await fetchSheetData('Projects');
      if (data && data.length > 0) {
        const formatted = data.map((item: any) => ({
            ...item,
            tags: item.tags ? item.tags.split('|').map((t:string) => t.trim()) : []
        }));
        setProjects(formatted);
      }
    };
    getData();
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            <span className="border-b-4 border-neon-teal pb-2">Projects</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => {
             const IconComponent = getIcon(project.icon);
             return (
              <FadeIn key={project.id || idx} delay={idx * 200} direction="up">
                <div className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-neon-teal/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]">
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-700/50 rounded-lg text-neon-teal">
                        <IconComponent size={32} />
                      </div>
                      <ArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-teal transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Effect Bar */}
                  <div className="absolute bottom-0 left-0 h-1 bg-neon-teal w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  );
};