import React, { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { Award, BadgeCheck } from 'lucide-react';
import { fetchSheetData } from '../services/sheetService';

const defaultCertificates = [
  {
    id: 1,
    title: "Registered Nurse License",
    issuer: "Kemenkes RI",
    year: "2023",
    color: "blue"
  },
  {
    id: 2,
    title: "Health Informatics Certification",
    issuer: "IHIA",
    year: "2023",
    color: "teal"
  }
];

export const Certificates: React.FC = () => {
  const [certificates, setCertificates] = useState<any[]>(defaultCertificates);

  useEffect(() => {
    const getData = async () => {
      const data: any = await fetchSheetData('Certificates');
      if (data && data.length > 0) {
        setCertificates(data);
      }
    };
    getData();
  }, []);

  const getGradient = (colorName: string) => {
    if (colorName === 'teal') return "from-teal-400 to-emerald-400";
    if (colorName === 'blue') return "from-blue-500 to-cyan-400";
    if (colorName === 'purple') return "from-purple-500 to-indigo-500";
    return "from-slate-500 to-gray-400";
  };

  return (
    <section id="certificates" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            <span className="border-b-4 border-neon-teal pb-2">Certificates</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <FadeIn key={cert.id || idx} delay={idx * 200}>
              <div className="relative group h-full">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${getGradient(cert.color)} rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-300`}></div>
                <div className="relative h-full glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="mb-6 p-4 bg-slate-800 rounded-full border border-slate-700">
                    <Award className="text-white w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-slate-400 mb-4">{cert.issuer}</p>
                  <div className="mt-auto flex items-center gap-2 px-4 py-1 bg-slate-800 rounded-full border border-slate-700 text-sm text-neon-teal">
                    <BadgeCheck size={14} />
                    <span>Verified {cert.year}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};