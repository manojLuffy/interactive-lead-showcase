
import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="section opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-light-slate text-lg">
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-lightest-slate mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light-slate mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-light-navy bg-opacity-50 border border-lightest-navy rounded-md text-light-slate focus:outline-none focus:ring-2 focus:ring-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-light-slate mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-light-navy bg-opacity-50 border border-lightest-navy rounded-md text-light-slate focus:outline-none focus:ring-2 focus:ring-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-light-slate mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-light-navy bg-opacity-50 border border-lightest-navy rounded-md text-light-slate focus:outline-none focus:ring-2 focus:ring-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-light-slate mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-light-navy bg-opacity-50 border border-lightest-navy rounded-md text-light-slate focus:outline-none focus:ring-2 focus:ring-teal resize-none"
                  required
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                <Send size={16} className={isSubmitting ? 'animate-spin' : 'ml-2'} />
              </Button>
            </form>
          </div>
          
          <div>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-bold text-lightest-slate mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-teal mt-1" size={24} />
                  <div>
                    <h4 className="text-lightest-slate font-semibold mb-1">Email</h4>
                    <a 
                      href="mailto:john@example.com" 
                      className="text-light-slate hover:text-teal transition-colors"
                    >
                      john@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-teal mt-1" size={24} />
                  <div>
                    <h4 className="text-lightest-slate font-semibold mb-1">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-light-slate hover:text-teal transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-teal mt-1" size={24} />
                  <div>
                    <h4 className="text-lightest-slate font-semibold mb-1">Location</h4>
                    <p className="text-light-slate">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-lightest-slate mb-6">Connect With Me</h3>
              
              <div className="flex justify-between">
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-light-navy hover:bg-teal/20 transition-colors"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-light-navy hover:bg-teal/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-light-navy hover:bg-teal/20 transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-light-navy hover:bg-teal/20 transition-colors"
                  aria-label="Dribbble"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
