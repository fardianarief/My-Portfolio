import React, { useEffect, useState } from 'react';
import { FadeIn } from './FadeIn';
import { fetchSheetData } from '../services/sheetService';

const defaultGallery = [
  { id: 1, imageUrl: "https://picsum.photos/800/600?random=1", caption: "Digital Health Training Session" },
  { id: 2, imageUrl: "https://picsum.photos/800/600?random=2", caption: "Hospital Implementation" }
];

export const Gallery: React.FC = () => {
  const [items, setItems] = useState<any[]>(defaultGallery);

  useEffect(() => {
    const getData = async () => {
      const data: any = await fetchSheetData('Gallery');
      if (data && data.length > 0) setItems(data);
    };
    getData();
  }, []);

  return (
    <section id="gallery" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            <span className="border-b-4 border-neon-teal pb-2">Gallery</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((item, idx) => (
             <FadeIn key={item.id || idx} delay={idx * 200} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer">
                <img 
                  src={item.imageUrl} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-slate via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};