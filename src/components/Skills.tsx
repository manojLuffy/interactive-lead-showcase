
import React, { useRef, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'frameworks' | 'tools';
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML5/CSS3', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Redux', level: 90, category: 'frontend' },
    { name: 'SASS/SCSS', level: 88, category: 'frontend' },
    { name: 'Responsive Design', level: 92, category: 'frontend' },
    
    // Frameworks & Libraries
    { name: 'React Hooks', level: 95, category: 'frameworks' },
    { name: 'Next.js', level: 88, category: 'frameworks' },
    { name: 'Micro-frontend', level: 90, category: 'frameworks' },
    { name: 'Node.js', level: 82, category: 'frameworks' },
    { name: 'Webpack/Rollup', level: 85, category: 'frameworks' },
    { name: 'Java SpringBoot', level: 75, category: 'frameworks' },
    { name: 'iOS/Swift', level: 80, category: 'frameworks' },
    
    // Tools & Others
    { name: 'AWS Services', level: 85, category: 'tools' },
    { name: 'Git/GitHub', level: 92, category: 'tools' },
    { name: 'Docker', level: 80, category: 'tools' },
    { name: 'Agile Methodologies', level: 90, category: 'tools' },
    { name: 'JIRA', level: 88, category: 'tools' },
    { name: 'CI/CD (GoCD/ArgoCD)', level: 78, category: 'tools' },
    { name: 'Google Dialogue Flow', level: 75, category: 'tools' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            
            // Animate skill bars
            if (skillsRef.current) {
              const bars = skillsRef.current.querySelectorAll('.skill-bar-inner');
              bars.forEach((bar) => {
                const barElement = bar as HTMLElement;
                const level = parseInt(barElement.getAttribute('data-level') || '0');
                setTimeout(() => {
                  barElement.style.width = `${level}%`;
                }, 100);
              });
            }
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

  const renderSkillGroup = (category: 'frontend' | 'frameworks' | 'tools', title: string) => {
    const categorySkills = skills.filter(skill => skill.category === category);
    
    return (
      <div className="glass-card p-6">
        <h3 className="text-xl text-lightest-slate font-semibold mb-6">{title}</h3>
        <div className="space-y-5">
          {categorySkills.map((skill, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-light-slate">{skill.name}</span>
                <span className="text-teal">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-navy-shadow rounded-full overflow-hidden">
                <div 
                  className="skill-bar-inner bg-gradient-to-r from-teal to-pink h-full rounded-full transition-all duration-1000 ease-out"
                  data-level={skill.level}
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="section opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderSkillGroup('frontend', 'Frontend Development')}
          {renderSkillGroup('frameworks', 'Frameworks & Libraries')}
          {renderSkillGroup('tools', 'Tools & Others')}
        </div>
        
        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-pill"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                opacity: 0,
                animation: 'fade-in 0.5s ease forwards',
                animationDelay: `${1000 + index * 50}ms`
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
