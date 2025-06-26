
import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Diffusion Models: A Mathematical Deep Dive",
      excerpt: "Exploring the theoretical foundations of diffusion models and their connection to stochastic differential equations in generative modeling.",
      date: "2024-06-15",
      readTime: "8 min read",
      category: "Theory",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Optimizing Diffusion Model Training: Tips and Tricks",
      excerpt: "Practical insights on improving training efficiency, memory usage, and convergence stability in diffusion model implementations.",
      date: "2024-06-10",
      readTime: "6 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Future of Controllable Generation with Diffusion",
      excerpt: "Analyzing recent advances in conditional diffusion models and their applications in creative AI and content generation.",
      date: "2024-06-05",
      readTime: "10 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Research Blog
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Sharing insights, tutorials, and deep dives into the world of diffusion models and deep learning research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/80 text-white text-xs rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-purple-400 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-200">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-purple-500/25">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;