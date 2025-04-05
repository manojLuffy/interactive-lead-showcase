import React, { useRef, useEffect } from 'react';
import { Github, ExternalLink, Folder, Award } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  company: string;
  period: string;
  location?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  imageUrl?: string;
}

interface Award {
  title: string;
  issuer: string;
  description: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const awardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const featuredProjects: Project[] = [
    {
      title: "Chevrolet, Cadillac, Car Bravo, GMC and BUICK",
      description: "Delivered major modules in consumer facing application - Trade-in, Vehicle Search Result page and Vehicle Details page. Collaborated closely with programmers, PMs, and EMs within an Agile framework to meet project requirements.",
      company: "Tekion",
      period: "09/2023 - Present",
      location: "US Market",
      technologies: ["React.js", "Next.js", "TypeScript", "Redux", "AWS", "Agile"],
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Expertise Search And Know Profiles",
      description: "Introduced micro-frontend architecture. Conceptualized and established the initial framework for the application, leading to a well-organized and maintainable architecture.",
      company: "Mckinsey & Company",
      period: "During Nagarro Tenure",
      technologies: ["React.js", "Micro-frontend", "JavaScript", "Node.js", "AWS"],
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112c4e25a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
  ];

  const otherProjects: Project[] = [
    {
      title: "LeoBot and Its Admin Portal",
      description: "Enhanced the product by developing a Feedback Chatbot in ReactJs. Resulted in substantial improvement in user satisfaction with an upsurge in user ratings from 2.5 to 4.5 out of 5.",
      company: "Mckinsey & Company",
      period: "During Nagarro Tenure",
      technologies: ["React.js", "Google Dialogue Flow", "Node.js", "AWS Lambda"],
    },
    {
      title: "Scandanavian Locking System",
      description: "Traveled to Sweden to collaborate with the client, gaining an in-depth understanding of their requirements and proposing tailored frontend solutions to address business needs.",
      company: "Assabloy",
      period: "During Nagarro Tenure",
      technologies: ["React.js", "Redux", "Node.js", "AWS"],
    },
    {
      title: "Cloud Migration Project",
      description: "Migrated on-premise ReactJs application to the AWS cloud, ensuring seamless performance and improved scalability.",
      company: "Nagarro Software",
      period: "11/2016 - 09/2023",
      technologies: ["React.js", "AWS EC2", "AWS S3", "AWS RDS", "Docker"],
    },
    {
      title: "iCruise Mobile App",
      description: "Lead team of 11 developers working on iOS, Android, website, and backend. Independently developed and delivered multiple native iOS applications from scratch.",
      company: "Leewayertz Technologies",
      period: "01/2013 - 11/2016",
      technologies: ["iOS", "Swift", "Android", "React", "Node.js"],
    },
  ];

  const awards: Award[] = [
    {
      title: ""The Brightest Mind" award",
      issuer: "Nagarro",
      description: "The best of the best!"
    },
    {
      title: "Excellence Award (Twice)",
      issuer: "Nagarro",
      description: "Recognized for outstanding contributions and performance"
    },
    {
      title: "Extraordinary performer of the year",
      issuer: "Leewayhertz Technologies",
      description: "Acknowledged for exceptional performance and dedication"
    }
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

    awardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
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
                <p className="text-teal font-mono mb-2">{project.company} | {project.period}</p>
                {project.location && <p className="text-light-slate mb-4">{project.location}</p>}
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
        <h3 className="text-2xl text-center font-bold text-lightest-slate mb-10">Other Notable Projects</h3>
        
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
              
              <p className="text-light-slate mb-4 text-sm">{project.description}</p>
              
              <p className="text-teal font-mono text-xs mb-4">{project.company} | {project.period}</p>
              
              <ul className="flex flex-wrap gap-2 text-xs mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="text-light-slate font-mono">{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Awards Section */}
        <h3 className="text-2xl text-center font-bold text-lightest-slate mt-20 mb-10">Honor Awards</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {awards.map((award, index) => (
            <div 
              key={index}
              ref={(el) => (awardRefs.current[index] = el)}
              className="project-card opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <Award className="text-teal" size={40} />
              </div>
              
              <h3 className="text-xl font-semibold text-lightest-slate mb-3">
                {award.title}
              </h3>
              
              <p className="text-teal font-mono text-sm mb-3">{award.issuer}</p>
              
              <p className="text-light-slate text-sm">{award.description}</p>
            </div>
          ))}
        </div>
        
        {/* Education Section */}
        <div className="glass-card p-6 max-w-2xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-lightest-slate mb-6 text-center">Education</h3>
          <div className="text-center">
            <p className="text-light-slate">MCA, CDAC, Noida</p>
            <p className="text-teal mt-2">80/100</p>
          </div>
        </div>
        
        {/* Certificates Section */}
        <div className="glass-card p-6 max-w-2xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-lightest-slate mb-6 text-center">Certificates</h3>
          <ul className="space-y-4">
            <li>
              <a href="https://rb.gy/rf6qey" target="_blank" rel="noreferrer" className="block">
                <p className="text-lightest-slate hover:text-teal transition-colors">AWS Essential Training for Developers (2019)</p>
                <p className="text-light-slate text-sm">https://rb.gy/rf6qey</p>
              </a>
            </li>
            <li>
              <a href="https://rb.gy/sadicc" target="_blank" rel="noreferrer" className="block">
                <p className="text-lightest-slate hover:text-teal transition-colors">Learning Amazon Web Services (AWS) for Developers</p>
                <p className="text-light-slate text-sm">https://rb.gy/sadicc</p>
              </a>
            </li>
            <li>
              <a href="https://rb.gy/w6vba4" target="_blank" rel="noreferrer" className="block">
                <p className="text-lightest-slate hover:text-teal transition-colors">Get Ready for Generative AI</p>
                <p className="text-light-slate text-sm">https://rb.gy/w6vba4</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
