import React from 'react';
import { FadeIn } from './FadeIn';
import { Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Perawat Rawat Inap",
    period: "Februari 2021 – Juni 2024",
    tasks: [
      "Memberikan pelayanan keperawatan profesional",
      "Asuhan keperawatan komprehensif",
      "Dokumentasi EMR",
      "Koordinasi tim kesehatan multidisiplin",
      "Monitoring pasien & tanda vital"
    ]
  },
  {
    id: 2,
    role: "HIS Officer",
    period: "Juni 2024 – sekarang",
    tasks: [
      "Implementor Sistem HIS",
      "SuperAdmin Management (RBAC, data flow, user control)",
      "Educator — pelatihan staf digital",
      "Verificator Enhancement — validasi & akurasi data",
      "Workflow Enhancement — optimasi alur kerja digital"
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            <span className="border-b-4 border-neon-teal pb-2">Experience</span>
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800"></div>

            {experiences.map((exp, index) => (
                <div key={exp.id} className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-[-5px] md:left-1/2 md:-ml-[11px] w-6 h-6 rounded-full bg-deep-slate border-4 border-neon-teal z-10 shadow-[0_0_10px_#2dd4bf]"></div>

                    {/* Content Half */}
                    <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                        <FadeIn direction={index % 2 === 0 ? 'left' : 'right'}>
                             <div className={`glass-card p-6 rounded-xl hover:border-neon-teal/50 transition-colors ${index % 2 === 0 ? 'md:mr-12 md:text-left' : 'md:ml-12 md:text-left'}`}>
                                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                <div className="flex items-center gap-2 text-neon-teal mb-4 font-mono text-sm">
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>
                                <ul className="space-y-2">
                                    {exp.tasks.map((task, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                                            <CheckCircle2 size={16} className="text-tech-blue shrink-0 mt-0.5" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                    
                    {/* Empty Half for Balance */}
                    <div className="hidden md:block w-1/2"></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};