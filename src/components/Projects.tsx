import React, { useRef, useEffect } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  imageUrl?: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const featuredProjects: Project[] = [
    {
      title: "Immersive Portfolio Experience",
      description: "A fully interactive 3D portfolio website built with Three.js and React. Features custom shaders, interactive models, and smooth animations for a unique user experience.",
      technologies: ["React", "Three.js", "WebGL", "GSAP", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1618673747378-7e0d3561371a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing e-commerce operations. Includes real-time sales analytics, inventory management, and customer insights with advanced filtering options.",
      technologies: ["Next.js", "TypeScript", "Redux", "Chart.js", "Tailwind CSS"],
      github: "#",
      demo: "#",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
  ];

  const otherProjects: Project[] = [
    {
      title: "Finance Tracker App",
      description: "A personal finance management application that helps users track expenses, set budgets, and visualize spending patterns.",
      technologies: ["React", "Firebase", "Recharts", "Styled Components"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Visualization Tool",
      description: "An interactive weather visualization tool using weather API data. Features animated weather conditions and forecast predictions.",
      technologies: ["JavaScript", "D3.js", "Canvas API", "Weather API"],
      github: "#",
      demo: "#"
    },
    {
      title: "Recipe Finder App",
      description: "A mobile-responsive web app that allows users to find recipes based on available ingredients and dietary preferences.",
      technologies: ["React", "Redux", "API Integration", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Virtual Art Gallery",
      description: "A 3D virtual art gallery where users can explore and interact with digital art pieces in an immersive environment.",
      technologies: ["Three.js", "React", "WebGL", "React Three Fiber"],
      github: "#",
      demo: "#"
    },
    {
      title: "Markdown Blog Platform",
      description: "A simple blogging platform that supports Markdown formatting, code syntax highlighting, and responsive layouts.",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management tool with real-time updates, drag-and-drop interfaces, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Vuex", "CSS Grid"],
      github: "#",
      demo: "#"
    },
  ];

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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              ref={(el) => (projectRefs.current[index] = el)}
              className={`opacity-0 grid grid-cols-1 md:grid-cols-12 items-center gap-8 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:col-span-7 relative group ${index % 2 === 0 ? '' : 'md:order-2'}`}>
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-teal/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:order-2 text-right' : 'text-left'}`}>
                <p className="text-teal font-mono mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-lightest-slate mb-4">{project.title}</h3>
                <div className="glass-card p-6 mb-4">
                  <p className="text-light-slate">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-2 text-xs mb-6 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-light-slate font-mono">{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-light-slate hover:text-teal transition-colors" 
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="text-light-slate hover:text-teal transition-colors" 
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <h3 className="text-2xl text-center font-bold text-lightest-slate mb-10">Other Noteworthy Projects</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div 
              key={index}
              ref={(el) => (projectRefs.current[index + featuredProjects.length] = el)}
              className="project-card opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="text-teal" size={40} />
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-light-slate hover:text-teal transition-colors" 
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      className="text-light-slate hover:text-teal transition-colors" 
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-lightest-slate mb-3 hover:text-teal transition-colors">
                <a href={project.demo || project.github || '#'}>{project.title}</a>
              </h3>
              
              <p className="text-light-slate mb-6 text-sm">{project.description}</p>
              
              <ul className="flex flex-wrap gap-2 text-xs mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="text-light-slate font-mono">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="btn-primary inline-block">View More Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
