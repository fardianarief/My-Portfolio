import React, { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { User, MapPin, GraduationCap, Quote } from 'lucide-react';
import { fetchSheetData } from '../services/sheetService';

const defaultProfile = {
  bio: "Saya adalah seorang perawat profesional yang passionate dalam mengintegrasikan teknologi ke dalam praktik keperawatan. Dengan latar belakang di bidang kesehatan dan ketertarikan pada inovasi digital, saya berupaya meningkatkan kualitas pelayanan kesehatan melalui solusi berbasis teknologi.",
  fullName: "Ns. Muhammad Arief Fardhiansyah",
  nickname: "Fardian Arief",
  address: "Cilandak, Jakarta Selatan",
  education: "Profesi Ners",
  motto: "Tech-Driven Nurse",
  photoUrl: "https://picsum.photos/600/400"
};

export const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>(defaultProfile);

  useEffect(() => {
    const getData = async () => {
      const data: any = await fetchSheetData('Profile');
      if (data && data.length > 0) {
        // Convert array of key-value pairs to object
        const profileObj = data.reduce((acc: any, curr: any) => {
          if (curr.key && curr.value) {
            acc[curr.key] = curr.value;
          }
          return acc;
        }, {});
        
        // Merge with default to ensure no missing keys
        setProfile((prev: any) => ({ ...prev, ...profileObj }));
      }
    };
    getData();
  }, []);

  return (
    <section id="profile" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            <span className="border-b-4 border-neon-teal pb-2">Profile</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-teal to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                 <img 
                    src={profile.photoUrl} 
                    alt="Profile" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                 />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                “{profile.bio}”
              </p>

              <div className="glass-card p-6 rounded-xl space-y-4 mt-8">
                <div className="flex items-center gap-4">
                  <User className="text-neon-teal shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider">Nama Lengkap</span>
                    <span className="text-white font-medium">{profile.fullName}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                   <div className="w-6 shrink-0" /> 
                   <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider">Nama Panggilan</span>
                    <span className="text-white font-medium">{profile.nickname}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-neon-teal shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider">Alamat</span>
                    <span className="text-white font-medium">{profile.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <GraduationCap className="text-neon-teal shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider">Pendidikan</span>
                    <span className="text-white font-medium">{profile.education}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Quote className="text-neon-teal shrink-0" />
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider">Motto</span>
                    <span className="text-neon-teal font-bold tracking-wide">{profile.motto}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};