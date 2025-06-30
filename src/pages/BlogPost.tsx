
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog posts data (in real app, this would come from your backend)
  const blogPosts = [
    {
      id: 1,
      slug: "understanding-diffusion-models",
      title: "Understanding Diffusion Models: A Mathematical Deep Dive",
      content: `
        <p>Diffusion models have revolutionized the field of generative AI, becoming the backbone of modern image synthesis systems like DALL-E, Midjourney, and Stable Diffusion. In this comprehensive guide, we'll explore the mathematical foundations that make these models so powerful.</p>
        
        <h2>What Are Diffusion Models?</h2>
        <p>Diffusion models are a class of generative models that work by gradually adding noise to data and then learning to reverse this process. The key insight is that if we can learn to remove noise step by step, we can generate new data from pure noise.</p>
        
        <h3>The Forward Process</h3>
        <p>The forward process systematically adds Gaussian noise to an image over T timesteps. At each step t, we add noise according to a predefined schedule:</p>
        
        <pre><code>q(x_t | x_{t-1}) = N(x_t; √(1-β_t) x_{t-1}, β_t I)</code></pre>
        
        <p>Where β_t is the noise variance at step t, and I is the identity matrix.</p>
        
        <h3>The Reverse Process</h3>
        <p>The reverse process is where the magic happens. We train a neural network to predict the noise that was added at each step, allowing us to denoise the image progressively:</p>
        
        <pre><code>p_θ(x_{t-1} | x_t) = N(x_{t-1}; μ_θ(x_t, t), Σ_θ(x_t, t))</code></pre>
        
        <h2>Training Objective</h2>
        <p>The training objective for diffusion models is surprisingly simple. We minimize the difference between the actual noise and the predicted noise:</p>
        
        <blockquote>"The beauty of diffusion models lies in their simplicity - they turn the complex problem of generation into a denoising task."</blockquote>
        
        <h3>Loss Function</h3>
        <p>The simplified loss function becomes:</p>
        
        <pre><code>L = E[||ε - ε_θ(x_t, t)||²]</code></pre>
        
        <p>Where ε is the actual noise and ε_θ is the predicted noise from our model.</p>
        
        <h2>Practical Implementation Tips</h2>
        <p>When implementing diffusion models, consider these key factors:</p>
        <ul>
          <li><strong>Noise Schedule:</strong> The choice of β_t significantly impacts training stability</li>
          <li><strong>Architecture:</strong> U-Net architectures work exceptionally well</li>
          <li><strong>Sampling:</strong> DDPM vs DDIM sampling strategies</li>
          <li><strong>Conditioning:</strong> Adding text or class conditioning for controlled generation</li>
        </ul>
        
        <h2>Recent Advances</h2>
        <p>The field is rapidly evolving with innovations like:</p>
        <ul>
          <li>Latent Diffusion Models (Stable Diffusion)</li>
          <li>Classifier-free Guidance</li>
          <li>Progressive Distillation</li>
          <li>ControlNet for precise control</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Diffusion models represent a paradigm shift in generative modeling. Their mathematical elegance, combined with practical effectiveness, makes them an essential tool for any researcher working in generative AI.</p>
        
        <p>In the next post, we'll dive deeper into the implementation details and explore how to build your first diffusion model from scratch using PyTorch.</p>
      `,
      date: "2024-06-15",
      readTime: "12 min read",
      category: "Theory",
      author: "Deep Learning Researcher"
    },
    {
      id: 2,
      slug: "optimizing-diffusion-training",
      title: "Optimizing Diffusion Model Training: Tips and Tricks",
      content: `
        <p>Training diffusion models can be computationally intensive and challenging. This guide covers practical strategies to optimize your training process for better efficiency and results.</p>
        
        <h2>Memory Optimization</h2>
        <p>Diffusion models require significant GPU memory. Here are key strategies to manage memory usage effectively.</p>
        
        <h3>Gradient Checkpointing</h3>
        <p>Trade computation for memory by recomputing activations during backpropagation instead of storing them.</p>
        
        <h3>Mixed Precision Training</h3>
        <p>Use FP16 to reduce memory usage while maintaining training stability with automatic loss scaling.</p>
        
        <h2>Training Stability</h2>
        <p>Ensuring stable training is crucial for diffusion models. Consider these techniques:</p>
        
        <ul>
          <li>Exponential Moving Average (EMA) of model weights</li>
          <li>Proper learning rate scheduling</li>
          <li>Gradient clipping to prevent exploding gradients</li>
        </ul>
        
        <h2>Performance Monitoring</h2>
        <p>Track these metrics during training:</p>
        <ul>
          <li>Loss curves across different timesteps</li>
          <li>Generated sample quality at regular intervals</li>
          <li>FID scores for quantitative evaluation</li>
        </ul>
      `,
      date: "2024-06-10",
      readTime: "8 min read",
      category: "Tutorial",
      author: "Deep Learning Researcher"
    }
  ];

  const currentPost = blogPosts.find(post => post.slug === slug);
  const currentIndex = blogPosts.findIndex(post => post.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentPost.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Header with navigation */}
      <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="px-3 py-1 bg-purple-600/10 text-purple-500 dark:bg-purple-500/20 dark:text-purple-300 border border-purple-500/20 text-sm rounded-full">
              {currentPost.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {currentPost.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(currentPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{currentPost.readTime}</span>
              </div>
              <span>By {currentPost.author}</span>
            </div>
            
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600/10 dark:bg-purple-500/20 hover:bg-purple-600/20 dark:hover:bg-purple-500/30 text-purple-600 dark:text-purple-300 rounded-lg transition-colors"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Blog content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div 
          className="blog-content prose prose-lg prose-gray dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: currentPost.content }}
        />
      </article>

      {/* Navigation between posts */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="grid md:grid-cols-2 gap-8">
          {prevPost && (
            <Link
              to={`/blog/${prevPost.slug}`}
              className="group p-6 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-purple-500/25 dark:hover:shadow-purple-500/25 hover:border-purple-500 dark:hover:border-purple-500 transition-all"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                <ArrowLeft size={16} />
                <span className="text-sm">Previous Post</span>
              </div>
              <h3 className="font-semibold group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {prevPost.title}
              </h3>
            </Link>
          )}
          
          {nextPost && (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group p-6 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-purple-500/25 dark:hover:shadow-purple-500/25 hover:border-purple-500 dark:hover:border-purple-500 transition-all md:text-right"
            >
              <div className="flex items-center justify-end gap-2 text-gray-600 dark:text-gray-400 mb-2">
                <span className="text-sm">Next Post</span>
                <ArrowRight size={16} />
              </div>
              <h3 className="font-semibold group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {nextPost.title}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;