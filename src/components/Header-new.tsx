import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, ExternalLink, Zap, Shield, TrendingUp, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDocsDropdownOpen, setIsDocsDropdownOpen] = useState(false);
  const [isMobileDocsOpen, setIsMobileDocsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavigation = [
    { name: 'Features', href: '/#features' },
    { name: 'Architecture', href: '/#architecture' },
    { name: 'Install', href: '/#npm-i' }
  ];

  const docsNavigation = [
    { name: 'Quick Start', href: '/quick-start', description: 'Get up and running in 5 minutes' },
    { name: 'Cloud Setup', href: '/cloud-setup', description: 'Configure S3, Cloudinary & GCS' },
    { name: 'Error Handling', href: '/error-handling', description: 'Automatic fallback & safeFile' },
    { name: 'API Reference', href: '/api-reference', description: 'Middleware schema & Types details' }
  ];

  const trustSignals = [
    { icon: Zap, label: 'Stream-Based', value: 'Non-blocking I/O' },
    { icon: Shield, label: 'Auto Image Optimization', value: 'Sharp + WebP' },
    { icon: TrendingUp, label: '3 Cloud Providers', value: 'S3, Cloudinary, GCS' }
  ];

  return (
    <>
      {/* Trust Bar */}
      <div className="bg-gray-900 text-white py-2 text-center text-sm overflow-hidden">
        <div className="container">
          <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap px-2">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
                <signal.icon size={14} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs md:text-sm">{signal.label}:</span>
                <span className="font-semibold text-xs md:text-sm">{signal.value}</span>
              </div>
            ))}
          </div>
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
              className="flex items-center gap-2 md:gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="/" className="relative block">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="text-white" size={20} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </a>
              <div>
                <a href="/">
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Upfly</h1>
                  <p className="text-xs md:text-sm text-gray-500 font-medium hidden sm:block">Complete File Handling Middleware</p>
                </a>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-8 group-hover:left-1/2 transform -translate-x-1/2"></span>
                </a>
              ))}

              {/* Docs Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDocsDropdownOpen(true)}
                onMouseLeave={() => setIsDocsDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 cursor-pointer focus:outline-none"
                >
                  Documentation
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isDocsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isDocsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl py-3 z-50 grid grid-cols-1 gap-1"
                    >
                      {docsNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="px-4 py-2.5 hover:bg-gray-50 flex flex-col transition-colors rounded-lg mx-2"
                        >
                          <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                          <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center gap-3">
              {/* GitHub Link */}
              <a
                href="https://github.com/ramin-010/upfly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-200 group border border-gray-200"
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
                className="flex items-center gap-2 px-4 py-2.5 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 group border border-red-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 780 250" fill="#CB3837">
                  <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"/>
                </svg>
                <span className="text-base font-semibold text-red-700">npm</span>
              </a>
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
              <div className="container py-4 md:py-6">
                <nav className="flex flex-col gap-1">
                  {mainNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                  {/* Mobile Docs Collapsible */}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button
                      onClick={() => setIsMobileDocsOpen(!isMobileDocsOpen)}
                      className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 font-semibold rounded-lg hover:bg-gray-50"
                    >
                      <span>Guides & Docs</span>
                      <ChevronDown size={18} className={`transition-transform duration-200 ${isMobileDocsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileDocsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-1 mt-1"
                        >
                          {docsNavigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileDocsOpen(false);
                              }}
                            >
                              {item.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>
                
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 mt-4">
                  <div className="grid grid-cols-2 gap-3">
                    <motion.a
                      href="https://github.com/ramin-010/upfly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center gap-2 py-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      <span className="text-sm text-gray-600 font-medium">GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://www.npmjs.com/package/upfly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center gap-2 bg-red-50 border-red-200 py-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 780 250" fill="#CB3837">
                        <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"/>
                      </svg>
                      <span className="text-sm text-red-700 font-medium">npm</span>
                    </motion.a>
                  </div>
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
