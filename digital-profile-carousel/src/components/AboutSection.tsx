import React, { useEffect } from 'react';
import { Code, Palette, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: Code, title: 'Development', desc: 'Full-stack web development with modern technologies' },
    { icon: Palette, title: 'Design', desc: 'Creating beautiful and intuitive user interfaces' },
    { icon: Rocket, title: 'Innovation', desc: 'Always exploring new technologies and solutions' },
    { icon: Heart, title: 'Passion', desc: 'Dedicated to creating meaningful digital experiences' },
  ];

  useEffect(() => {
    // Add scroll-triggered animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white/30 backdrop-blur-sm scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Crafting Digital Experiences with Purpose
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                innovative digital solutions. My journey in technology spans over 5 years, during which 
                I've had the privilege of working on diverse projects ranging from startup MVPs to 
                enterprise-level applications.
              </p>
              <p>
                My approach to development is holistic - I believe that great software is not just about 
                clean code, but also about understanding user needs, creating intuitive interfaces, and 
                delivering experiences that truly make a difference. I'm constantly learning and adapting 
                to new technologies, always staying at the forefront of web development trends.
              </p>
              <p>
                When I'm not immersed in code, you'll find me contributing to open-source projects, 
                mentoring aspiring developers, or exploring the intersection of technology and creativity. 
                I believe in the power of community and the importance of giving back to the ecosystem 
                that has given me so much.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Laravel','React', 'TypeScript', 'Node.js', 'Python', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
