import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HomeSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

    const section = document.getElementById('home');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Mobile: Image first */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-100 to-sky-100">
                <img
                  src="/images/p2.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                Moh. Nafis Husen Romadani
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 mb-8">
              <div className="mb-4">
                Math Tutor and Web Developer
              </div>
              <div className="text-lg text-gray-500">
                Passionate about creating amazing digital experiences
              </div>
            </div>

            {/* Expandable Content */}
            <div className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to my digital portfolio! I'm a passionate developer with over a years of experience 
                  in creating innovative web applications and user interfaces. My journey in technology began 
                  with a curiosity about how things work, and it has evolved into a career dedicated to 
                  building solutions that make a difference.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I specialize in Laravel, React, Node.js, and modern web technologies. When I'm not coding, 
                  you can find me exploring new design trends, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-sky-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  Click to More <ChevronDown className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>

          {/* Desktop: Image on right */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-sky-100">
                <img
                  src="images/p2.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-3xl">👋</span>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-8 -right-8 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-8 left-8 w-4 h-4 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
