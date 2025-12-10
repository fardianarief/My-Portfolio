import React from 'react';
import { FadeIn } from './FadeIn';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            <span className="border-b-4 border-neon-teal pb-2">Gallery</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Photo 1 */}
          <FadeIn delay={100} direction="left">
            <div className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Activities 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-slate via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Digital Health Training Session
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Photo 2 */}
          <FadeIn delay={300} direction="right">
            <div className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer">
              <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Activities 2" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-slate via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Hospital Implementation
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};