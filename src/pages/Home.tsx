import { Helmet } from 'react-helmet';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Calendar, Clock } from 'lucide-react';

const Home = () => {
  const recentPosts = [
    {
      slug: "understanding-diffusion-models",
      title: "Understanding Diffusion Models: A Mathematical Deep Dive",
      excerpt: "Exploring the theoretical foundations of diffusion models and their connection to stochastic differential equations.",
      date: "2024-06-15",
      readTime: "12 min read"
    },
    {
      slug: "optimizing-diffusion-training",
      title: "Optimizing Diffusion Model Training: Tips and Tricks",
      excerpt: "Practical insights on improving training efficiency, memory usage, and convergence stability.",
      date: "2024-06-10",
      readTime: "8 min read"
    },
    {
      slug: "future-controllable-generation",
      title: "The Future of Controllable Generation with Diffusion",
      excerpt: "Analyzing recent advances in conditional diffusion models and their applications in creative AI.",
      date: "2024-06-05",
      readTime: "10 min read"
    }
  ];

  const recentPublications = [
    {
      title: "Efficient Sampling in Diffusion Models: A Comparative Study",
      authors: "Your Name, Co-Author 1, Co-Author 2",
      venue: "ICML 2024",
      year: "2024",
      link: "#"
    },
    {
      title: "Controllable Image Generation with Latent Diffusion Models",
      authors: "Your Name, Research Collaborator",
      venue: "NeurIPS 2023",
      year: "2023",
      link: "#"
    }
  ];

  const publicationReviews = [
    {
      title: "Attention Is All You Need",
      authors: "Vaswani et al.",
      venue: "NeurIPS 2017",
      myReview: "This groundbreaking paper introduced the Transformer architecture that revolutionized natural language processing. The self-attention mechanism provides a elegant solution to the sequential processing limitations of RNNs.",
      rating: 5,
      link: "#"
    },
    {
      title: "Denoising Diffusion Probabilistic Models",
      authors: "Ho et al.",
      venue: "NeurIPS 2020",
      myReview: "A fundamental paper that established the theoretical foundations for modern diffusion models. The mathematical framework presented here became the basis for many subsequent advances in generative modeling.",
      rating: 5,
      link: "#"
    },
    {
      title: "DALL-E 2: Hierarchical Text-Conditional Image Generation",
      authors: "Ramesh et al.",
      venue: "arXiv 2022",
      myReview: "An impressive demonstration of text-to-image generation capabilities. While the results are stunning, the computational requirements and closed-source nature limit its research applications.",
      rating: 4,
      link: "#"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Deep Learning Research | Currently Exploring Diffusion Models</title>
        <meta name="description" content="Explore frontiers of deep learning, generative models, and AI research." />
        <meta property="og:title" content="Deep Learning Research | Currently Exploring Diffusion Models" />
        <meta property="og:description" content="Research blog with insights into diffusion models and AI." />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-slate-800 text-black dark:text-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Deep Learning Research
              <span className="block text-gray-600 dark:text-gray-400 text-4xl md:text-5xl mt-2">
                & Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Exploring the frontiers of artificial intelligence through research, experimentation, 
              and practical insights in diffusion models and deep learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read My Blog
              </Link>
              <Link
                to="/research"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Brain className="w-5 h-5 mr-2" />
                View Research
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Recent Blog Posts</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Latest insights and research findings in deep learning
                </p>
              </div>
              <Link 
                to="/blog"
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
              >
                View All Posts →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
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
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    <span className="font-medium">Read more</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Recent Publications</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  My latest research contributions and publications
                </p>
              </div>
              <Link 
                to="/research"
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 font-medium"
              >
                View All Research →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {recentPublications.map((pub, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{pub.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{pub.authors}</p>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{pub.venue} ({pub.year})</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publication Reviews */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Publication Reviews & Commentary</h2>
              <p className="text-gray-600 dark:text-gray-400">
                My thoughts and analysis on influential papers in the field
              </p>
            </div>

            <div className="space-y-8">
              {publicationReviews.map((review, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{review.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">{review.authors}</p>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{review.venue}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xl ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                    <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      "{review.myReview}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Get the latest research insights and deep learning tutorials delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
              <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
