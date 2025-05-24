import React, { useEffect } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const ResumeSection = () => {
  const education = [
    {
      degree: 'Teacher training',
      school: 'Widya Mandala Surabaya Catholic University',
      period: '2024 - 2024',
      description: 'Specialized in Software Engineering and Human-Computer Interaction',
    },
    {
      degree: 'Bachelor of Mathematic Education',
      school: 'Madura University',
      period: '2019 - 2023',
      description: 'Graduated Cum Laude with focus on Pured Mathematic',
    },
  ];

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      period: '2021 - Present',
      description: 'Leading development of scalable web applications serving 100K+ users. Built microservices architecture using Node.js and React.',
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description: 'Developed responsive web applications and collaborated with design team to create exceptional user experiences.',
    },
    {
      title: 'Software Engineer Intern',
      company: 'Google',
      period: '2019 - 2019',
      description: 'Worked on internal tools for developer productivity. Implemented features using Angular and Python.',
    },
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

    const section = document.getElementById('resume');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const TimelineItem = ({ item, icon: Icon, isLast = false }) => (
    <div className="relative flex items-start">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full shadow-lg">
        <Icon className="h-6 w-6 text-white" />
      </div>
      
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-sky-300"></div>
      )}
      
      <div className="ml-6 flex-1">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {item.degree || item.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
              <Calendar className="h-4 w-4 mr-1" />
              {item.period}
            </div>
          </div>
          <div className="text-blue-600 font-medium mb-2">
            {item.school || item.company}
          </div>
          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  icon={GraduationCap}
                  isLast={index === education.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  icon={Briefcase}
                  isLast={index === experience.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
