import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Zap } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container px-4">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Brand Section */}
            <motion.div
              className="flex items-center gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="text-white" size={20} />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold">Upfly</span>
                <div className="text-xs md:text-sm text-gray-400">Complete File Handling Middleware</div>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              className="flex items-center gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href="https://github.com/ramin-010/upfly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg hover:shadow-lg"
              >
                <Github size={18} className="md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-semibold">⭐ Star on GitHub</span>
              </a>
              <a
                href="https://www.npmjs.com/package/upfly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 780 250" fill="currentColor">
                  <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"/>
                </svg>
                <span className="text-xs md:text-sm">npm</span>
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="mailto:rinkalkumar737@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>rinkalkumar737@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rinkal-kumar-46130a329/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-4 md:pt-6 mt-6 md:mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
              <div className="text-gray-400 text-xs md:text-sm text-center sm:text-left">
                © 2025 Upfly. Built with ❤️ for developers.
              </div>
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                aria-label="Scroll to top"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-base md:text-lg"
                >
                  ↑
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
