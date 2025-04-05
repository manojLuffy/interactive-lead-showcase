
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
              Hello! I'm a passionate Frontend Lead Developer with over 8 years of experience creating engaging user interfaces and seamless experiences for the web. My journey in web development began when I built my first website from scratch in 2015.
            </p>
            
            <p>
              Since then, I've worked with companies ranging from startups to large enterprises, helping build products that are not only visually appealing but also highly performant and accessible. I believe that great frontend development is the perfect blend of <span className="highlight">art and technology</span>.
            </p>
            
            <p>
              My approach is to blend creativity with technical excellence, ensuring that every project I work on meets both business goals and user expectations. I enjoy tackling complex problems and turning them into elegant solutions.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> React & Next.js
                </li>
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> TypeScript
                </li>
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> Three.js & WebGL
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> Frontend Architecture
                </li>
                <li className="flex items-center">
                  <span className="text-teal mr-2">▹</span> Performance Optimization
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative group mx-auto max-w-xs md:max-w-sm">
            <div className="relative rounded-md overflow-hidden border-2 border-teal/20 transition-all duration-300 group-hover:border-teal/50">
              <div className="absolute inset-0 bg-teal/10 z-10 mix-blend-multiply transition-all duration-300 group-hover:bg-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="John Doe" 
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
