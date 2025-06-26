
import React from 'react';
import { Brain, Code, BookOpen, Award } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Brain, title: 'Deep Learning', desc: 'Neural Networks, CNNs, Transformers' },
    { icon: Code, title: 'Programming', desc: 'Python, PyTorch, TensorFlow, CUDA' },
    { icon: BookOpen, title: 'Research', desc: 'Publications, Peer Review, Conferences' },
    { icon: Award, title: 'Innovation', desc: 'Novel Architectures, State-of-the-art Models' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Passionate about pushing the boundaries of artificial intelligence through innovative research in diffusion models and generative AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              As a Deep Learning Researcher specializing in Diffusion Models, I focus on developing novel approaches 
              to generative modeling and probabilistic machine learning. My work spans from theoretical foundations 
              to practical applications in computer vision and natural language processing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I'm particularly interested in the mathematical elegance of diffusion processes and their ability to 
              generate high-quality samples through iterative refinement. My research contributes to making these 
              models more efficient, controllable, and applicable to real-world problems.
            </p>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Research Environment"
                className="w-64 h-64 object-cover rounded-full border-4 border-purple-400/50"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <skill.icon className="text-purple-400 mb-4" size={40} />
              <h4 className="text-white font-bold text-lg mb-2">{skill.title}</h4>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;