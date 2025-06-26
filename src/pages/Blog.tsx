
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      slug: "understanding-diffusion-models",
      title: "Understanding Diffusion Models: A Mathematical Deep Dive",
      excerpt: "Exploring the theoretical foundations of diffusion models and their connection to stochastic differential equations in generative modeling.",
      date: "2024-06-15",
      readTime: "12 min read",
      category: "Theory"
    },
    {
      slug: "optimizing-diffusion-training",
      title: "Optimizing Diffusion Model Training: Tips and Tricks",
      excerpt: "Practical insights on improving training efficiency, memory usage, and convergence stability in diffusion model implementations.",
      date: "2024-06-10",
      readTime: "8 min read",
      category: "Tutorial"
    },
    {
      slug: "future-controllable-generation",
      title: "The Future of Controllable Generation with Diffusion",
      excerpt: "Analyzing recent advances in conditional diffusion models and their applications in creative AI and content generation.",
      date: "2024-06-05",
      readTime: "10 min read",
      category: "Research"
    },
    {
      slug: "noise-to-art",
      title: "From Noise to Art: How Diffusion Models Create Images",
      excerpt: "A beginner-friendly explanation of how diffusion models transform random noise into beautiful, coherent images.",
      date: "2024-05-28",
      readTime: "6 min read",
      category: "Beginner"
    },
    {
      slug: "sampling-methods-comparison",
      title: "Comparing Different Sampling Methods in Diffusion Models",
      excerpt: "An in-depth analysis of various sampling techniques and their impact on generation quality and speed.",
      date: "2024-05-20",
      readTime: "15 min read",
      category: "Technical"
    },
    {
      slug: "building-first-diffusion-model",
      title: "Building Your First Diffusion Model with PyTorch",
      excerpt: "Step-by-step guide to implementing a simple diffusion model from scratch using PyTorch and modern deep learning practices.",
      date: "2024-05-15",
      readTime: "20 min read",
      category: "Tutorial"
    }
  ];

  const categories = ['All', 'Theory', 'Tutorial', 'Research', 'Beginner', 'Technical'];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep dives into diffusion models, machine learning research, and practical AI insights
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  <span className="font-medium">Read Article</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;