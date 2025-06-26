
import React from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'research@deeplearning.dev', href: 'mailto:research@deeplearning.dev' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/deeplearning-researcher', href: '#' },
    { icon: Github, label: 'GitHub', value: '@deeplearning-research', href: '#' },
    { icon: MapPin, label: 'Location', value: 'Research Lab, University', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or discussing the latest in diffusion models? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Whether you're interested in research collaboration, have questions about diffusion models, 
              or want to discuss potential opportunities, I'm always open to meaningful conversations 
              with fellow researchers and practitioners in the field.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group"
                >
                  <item.icon className="text-purple-400 group-hover:text-purple-300 transition-colors duration-200" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                  placeholder="Research Collaboration Opportunity"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your research interests or collaboration ideas..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-400">
            © 2024 Deep Learning Researcher. Built with passion for advancing AI research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;