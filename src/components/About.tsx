
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-light-slate">
            <p>
              Hello! I'm Gaurav Sharma, a Senior Software Engineer with <span className="highlight">12+ years of experience</span> in building scalable web and mobile applications. I'm a Frontend Specialist with a passion for creating exceptional user experiences.
            </p>
            
            <p>
              Currently working at <span className="highlight">Tekion</span>, I collaborate closely with programmers, Product Managers, and Engineering Managers within an Agile framework to deliver high-quality software solutions. I've spearheaded the formalization of key processes, taking full ownership from inception to completion.
            </p>
            
            <p>
              My approach combines creativity with technical excellence, ensuring that every project meets both business goals and user expectations. I enjoy tackling complex problems and turning them into elegant solutions.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> React.js & Next.js
                </li>
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> JavaScript/TypeScript
                </li>
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> Redux & React Hooks
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> Micro-frontend Architecture
                </li>
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> AWS & Cloud Services
                </li>
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> Node.js & Backend Technologies
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative group mx-auto max-w-xs md:max-w-sm">
            <div className="relative rounded-md overflow-hidden border-2 border-teal/20 transition-all duration-300 group-hover:border-teal/50">
              <div className="absolute inset-0 bg-teal/10 z-10 mix-blend-multiply transition-all duration-300 group-hover:bg-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Gaurav Sharma" 
                className="w-full grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-teal rounded-md -z-10 transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
