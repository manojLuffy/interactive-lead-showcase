
import React, { useEffect, useRef } from 'react';
import ThreeScene from './ThreeScene';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const textRefs = {
    greeting: useRef<HTMLDivElement>(null),
    name: useRef<HTMLHeadingElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    bio: useRef<HTMLParagraphElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  // Animation on mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(textRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl transition-all duration-500 delay-300">
          <div 
            ref={textRefs.greeting} 
            className="opacity-0 translate-y-8 transition-all duration-700 delay-[300ms]"
          >
            <p className="text-teal font-mono mb-5 text-lg">Hi, my name is</p>
          </div>
          
          <h1 
            ref={textRefs.name}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4 opacity-0 translate-y-8 transition-all duration-700 delay-[600ms]"
          >
            John Doe.
          </h1>
          
          <h2 
            ref={textRefs.title}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-[900ms]"
          >
            I build exceptional digital experiences.
          </h2>
          
          <p 
            ref={textRefs.bio}
            className="text-slate text-lg md:text-xl mb-8 max-w-xl opacity-0 translate-y-8 transition-all duration-700 delay-[1200ms]"
          >
            I'm a <span className="text-teal">Frontend Lead</span> with a passion for creating innovative, high-performance web applications. Specializing in modern JavaScript frameworks and interactive user experiences.
          </p>
          
          <div 
            ref={textRefs.cta}
            className="opacity-0 translate-y-8 transition-all duration-700 delay-[1500ms] flex space-x-4"
          >
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-primary bg-teal/10">Get In Touch</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={36} />
      </button>
    </section>
  );
};

export default Hero;
