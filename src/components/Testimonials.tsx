
import React, { useRef, useEffect } from 'react';
import { Quote, User, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Product Manager",
      company: "Tekion",
      text: "Gaurav is an exceptional developer who consistently delivers high-quality work. His technical skills are outstanding, and he's always eager to tackle new challenges. A true asset to any team!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Technical Lead",
      company: "Nagarro",
      text: "Working with Gaurav was a fantastic experience. His expertise in frontend technologies and commitment to clean, maintainable code elevated our project standards. He's also a great mentor to junior developers.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Engineering Manager",
      company: "Mckinsey & Company",
      text: "Gaurav's ability to translate complex requirements into elegant solutions is remarkable. He brings a level of professionalism and technical expertise that makes him stand out. I would gladly work with him again.",
      rating: 5
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

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index}
        size={16}
        className={index < rating ? "text-teal fill-teal" : "text-light-slate"}
      />
    ));
  };

  return (
    <section id="testimonials" ref={sectionRef} className="section opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className="glass-card p-8 opacity-0 group hover:border-teal transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 relative">
                <Quote className="text-teal absolute -top-2 -left-2 opacity-20 group-hover:opacity-100 transition-opacity duration-300" size={40} />
                <p className="text-light-slate z-10 relative pl-6 italic">"{testimonial.text}"</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-6">
                <div className="bg-lightest-navy p-2 rounded-full">
                  <User className="text-teal" size={24} />
                </div>
                <div>
                  <p className="text-lightest-slate font-semibold">{testimonial.name}</p>
                  <p className="text-teal text-sm">{testimonial.role} | {testimonial.company}</p>
                </div>
              </div>
              
              <div className="mt-4 flex">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
