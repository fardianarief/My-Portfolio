import React, { useEffect, useState } from 'react';
import { ChevronDown, Database, HeartPulse } from 'lucide-react';
import { fetchSheetData } from '../services/sheetService';

const defaultPhoto = "https://picsum.photos/300/300";

export const Hero: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState(defaultPhoto);

  useEffect(() => {
    const getPhoto = async () => {
      // Kita coba ambil foto dari sheet Profile jika ada
      const data: any = await fetchSheetData('Profile');
      if (data && data.length > 0) {
        const photoEntry = data.find((row: any) => row.key === 'photoUrl');
        if (photoEntry && photoEntry.value) {
            setPhotoUrl(photoEntry.value);
        }
      }
    };
    getPhoto();
  }, []);

  const scrollToProfile = () => {
    document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-teal/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl animate-float-delayed"></div>
        {/* Abstract Particles */}
        <div className="absolute top-20 right-20 opacity-20 animate-pulse-slow">
           <Database size={48} className="text-neon-teal" />
        </div>
        <div className="absolute bottom-40 left-10 opacity-20 animate-float">
           <HeartPulse size={48} className="text-tech-blue" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-[fadeIn_1s_ease-out]">
            <div className="relative inline-block mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-teal to-tech-blue blur opacity-50 animate-pulse"></div>
                <img 
                    src={photoUrl} 
                    alt="Fardian Arief" 
                    className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-slate-800 object-cover mx-auto"
                />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Fardian <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-teal to-tech-blue">Arief</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-neon-teal mb-6">
              Tech-Driven Nurse
            </h2>
            
            <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
              “Menggabungkan keahlian keperawatan dengan teknologi untuk pelayanan kesehatan yang lebih baik.”
            </p>
            
            <button 
              onClick={scrollToProfile}
              className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-neon-teal text-neon-teal font-semibold transition-all hover:text-deep-slate"
            >
              <span className="absolute inset-0 w-full h-full bg-neon-teal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative flex items-center gap-2">
                Explore Profile <ChevronDown size={18} />
              </span>
            </button>
        </div>
      </div>
    </section>
  );
};