
import React from 'react';
import { ExternalLink, Calendar, Users } from 'lucide-react';

const Research = () => {
  const publications = [
    {
      title: "Efficient Sampling in Diffusion Models: A Comparative Study",
      authors: "Your Name, Co-Author 1, Co-Author 2",
      venue: "International Conference on Machine Learning (ICML 2024)",
      year: "2024",
      abstract: "We present a comprehensive analysis of sampling techniques in diffusion models, introducing novel methods that achieve 3x faster generation while maintaining quality.",
      link: "#"
    },
    {
      title: "Controllable Image Generation with Latent Diffusion Models",
      authors: "Your Name, Research Collaborator",
      venue: "Neural Information Processing Systems (NeurIPS 2023)",
      year: "2023",
      abstract: "This work explores fine-grained control mechanisms in diffusion models, enabling precise manipulation of generated content through learned embeddings.",
      link: "#"
    },
    {
      title: "Mathematical Foundations of Score-Based Generative Models",
      authors: "Your Name",
      venue: "Journal of Machine Learning Research (JMLR)",
      year: "2023",
      abstract: "A theoretical analysis of the mathematical principles underlying score-based diffusion models, with implications for model design and optimization.",
      link: "#"
    }
  ];

  const projects = [
    {
      title: "DiffusionLab",
      description: "Open-source PyTorch implementation of various diffusion model architectures with comprehensive tutorials and examples.",
      tech: ["Python", "PyTorch", "CUDA"],
      link: "#"
    },
    {
      title: "FastSample",
      description: "High-performance sampling library for diffusion models, achieving state-of-the-art generation speed while maintaining quality.",
      tech: ["Python", "C++", "CUDA"],
      link: "#"
    },
    {
      title: "ControlDiff",
      description: "Research framework for controllable generation with diffusion models, supporting various conditioning mechanisms.",
      tech: ["Python", "PyTorch", "Gradio"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Publications, projects, and contributions to the field of diffusion models and deep learning
          </p>
        </div>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Publications</h2>
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <article key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold flex-1 mr-4">{pub.title}</h3>
                  <a 
                    href={pub.link}
                    className="flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                <div className="mb-3 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{pub.authors}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{pub.year}</span>
                    </div>
                  </div>
                  <p className="font-medium text-black dark:text-white">{pub.venue}</p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pub.abstract}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="pb-16">
          <h2 className="text-2xl font-bold mb-8">Open Source Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link}
                    className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;