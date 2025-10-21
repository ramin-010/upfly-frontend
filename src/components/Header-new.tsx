import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, ExternalLink, Zap, Shield, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Features', href: '#features', external: false },
    { name: 'Architecture', href: '#architecture', external: false },
    { name: 'Install', href: '#npm-i', external: false },
    { name: 'Start Building', href: '#build', external: false }
  ];

  const trustSignals = [
    { icon: Zap, label: 'Stream-Based', value: 'Non-blocking I/O' },
    { icon: Shield, label: 'Auto Image Optimization', value: 'Sharp + WebP' },
    { icon: TrendingUp, label: '3 Cloud Providers', value: 'S3, Cloudinary, GCS' }
  ];

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-gray-900 text-white py-2 text-center text-sm">
        <div className="container flex items-center justify-center gap-8">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2">
              <signal.icon size={16} className="text-blue-400" />
              <span className="text-gray-300">{signal.label}:</span>
              <span className="font-semibold">{signal.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg' 
            : 'bg-white border-b border-gray-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand */}
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Upfly</h1>
                <p className="text-sm text-gray-500 font-medium">Enterprise File Upload Middleware</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2"></span>
                </a>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center gap-3">
              {/* GitHub Link - Restored */}
              <a
                href="https://github.com/ramin-010/upfly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group"
              >
                <Github size={20} className="text-gray-700 group-hover:text-gray-900" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-900">GitHub</span>
                  <span className="text-sm text-gray-600 font-medium">View on GitHub</span>
                </div>
                <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-600" />
              </a>

              {/* npm Package */}
              <a
                href="https://www.npmjs.com/package/upfly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-4 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 group border border-red-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 780 250" fill="#CB3837">
                  <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"/>
                </svg>
                <span className="text-lg font-semibold text-red-700">npm</span>
              </a>

              {/* Primary CTA */}
              {/* <motion.button 
                className="btn-primary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Building
              </motion.button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container py-6">
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                
                <div className="flex flex-col gap-4 pt-6 border-t border-gray-200 mt-6">
                  <div className="flex items-center gap-3">
                    <motion.a
                      href="https://github.com/ramin-010/upfly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span className="text-sm text-gray-600 font-medium">GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.npmjs.com/package/upfly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2 bg-red-50 border-red-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 780 250" fill="#CB3837">
                        <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"/>
                      </svg>
                      <span className="text-sm text-red-700 font-medium">npm</span>
                    </motion.a>
                  </div>
                  
                  {/* <button 
                    className="btn-primary w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Start Building
                  </button> */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
