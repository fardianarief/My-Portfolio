import React from 'react';
import { FadeIn } from './FadeIn';
import { Mail, Instagram, Linkedin, Github, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            <span className="border-b-4 border-neon-teal pb-2">Get In Touch</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <FadeIn direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-slate-400">
                Interested in Health Tech collaboration or just want to say hi? Feel free to reach out through any of these platforms.
              </p>

              <div className="space-y-4">
                <a href="https://wa.me/6282388308450" className="flex items-center gap-4 text-slate-300 hover:text-neon-teal transition-colors group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                         <Phone size={20} />
                    </div>
                    <span>+62 82388308450</span>
                </a>
                
                <a href="mailto:fardianarief@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-neon-teal transition-colors group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                        <Mail size={20} />
                    </div>
                    <span>fardianarief@gmail.com</span>
                </a>

                <a href="https://instagram.com/fardianarief" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-neon-teal transition-colors group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                        <Instagram size={20} />
                    </div>
                    <span>@fardianarief</span>
                </a>

                <a href="https://linkedin.com/in/fardianarief" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-neon-teal transition-colors group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                        <Linkedin size={20} />
                    </div>
                    <span>linkedin.com/in/fardianarief</span>
                </a>

                <a href="https://github.com/fardianarief" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-neon-teal transition-colors group">
                    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                        <Github size={20} />
                    </div>
                    <span>github.com/fardianarief</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn direction="left" delay={200}>
            <form className="glass-card p-8 rounded-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-teal focus:ring-1 focus:ring-neon-teal transition-all"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>
              <button className="w-full py-3 bg-neon-teal text-deep-slate font-bold rounded-lg hover:bg-teal-300 transition-colors flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};