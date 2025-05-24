
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and real-time order tracking. The platform handles thousands of transactions daily and includes advanced analytics for business insights.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    },
    {
      id: 2,
      title: 'Task Management App',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A collaborative task management application inspired by modern productivity tools. Built with React and Firebase, it features real-time collaboration, drag-and-drop functionality, team workspaces, and advanced project analytics. The app supports multiple project views including Kanban boards and calendar integration.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux', 'TypeScript'],
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A comprehensive social media analytics dashboard that aggregates data from multiple platforms. Features include engagement tracking, audience insights, content performance analysis, and automated reporting. Built with modern web technologies to handle large datasets efficiently.',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      description: 'A beautiful and intuitive weather application featuring 7-day forecasts, interactive maps, severe weather alerts, and location-based recommendations. The app includes advanced features like weather-based outfit suggestions and travel planning tools.',
      technologies: ['React Native', 'OpenWeather API', 'Redux', 'Expo', 'AsyncStorage'],
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Image Carousel */}
          <div className="relative mb-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={currentProj.image}
                  alt={currentProj.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110"
              >
                <ArrowLeft className="h-6 w-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextProject}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110"
              >
                <ArrowRight className="h-6 w-6 text-gray-700" />
              </button>

              {/* Project Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {currentProject + 1} / {projects.length}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentProject
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                {currentProj.title}
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {currentProj.description}
            </p>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {currentProj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
