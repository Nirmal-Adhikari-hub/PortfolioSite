
import React from 'react';
import { Brain, Code, BookOpen, Award, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Brain, title: 'Deep Learning', desc: 'Neural Networks, Transformers, Diffusion Models' },
    { icon: Code, title: 'Programming', desc: 'Python, PyTorch, TensorFlow, CUDA' },
    { icon: BookOpen, title: 'Research', desc: 'Publications, Peer Review, Academic Writing' },
    { icon: Award, title: 'Innovation', desc: 'Novel Architectures, Open Source Contributions' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Deep Learning Researcher specializing in Diffusion Models and Generative AI
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">My Research Journey</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a passionate Deep Learning Researcher with a focus on diffusion models and their applications 
              in generative AI. My work explores the mathematical foundations of these models and their practical 
              implementations in computer vision and beyond.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Through this blog, I share insights from my research, tutorial content for aspiring AI researchers, 
              and analysis of the latest developments in the field. My goal is to make complex concepts accessible 
              and inspire the next generation of AI researchers.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe in open science and regularly contribute to open-source projects, publish research papers, 
              and engage with the global AI research community.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Current Focus</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>• Theoretical foundations of diffusion models</li>
              <li>• Efficient sampling techniques and optimization</li>
              <li>• Conditional generation and controllable synthesis</li>
              <li>• Applications in computer vision and NLP</li>
              <li>• Scaling diffusion models for real-world deployment</li>
            </ul>
            
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="py-16 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-center mb-12">Expertise Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
              >
                <skill.icon className="mx-auto mb-4 text-black dark:text-white" size={32} />
                <h4 className="font-bold text-lg mb-2">{skill.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;