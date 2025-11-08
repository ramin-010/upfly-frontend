import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cloud, Shield } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CheckCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const upflyWayCode = `// The Upfly way: One middleware, everything handled
const { upflyUpload } = require('upfly');

app.post('/upload',
  upflyUpload({
    fields: {
      "avatar": {
        cloudStorage: true,
        cloudProvider: 'cloudinary',
        cloudConfig: {
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET
        },
        format: 'webp',
        quality: 80
      }
    },
    safeFile: true  // Automatic backup fallback
  }),
  (req, res) => res.json({ files: req.files })
);

// That's it! Stream-based, optimized, reliable. ✨`;

  const featureCategories = [
    {
      category: "Image Processing",
      features: [
        "Automatic format conversion (WebP, JPEG, PNG, AVIF)",
        "Quality control (1-100)",
        "Sharp-powered optimization",
        "Keep original or convert",
        "Multiple format support",
        "Lossless compression options"
      ]
    },
    {
      category: "Storage Options",
      features: [
        "Memory storage (Buffer)",
        "Disk storage (filesystem)",
        "Stream-based processing",
        "7MB+ large file threshold",
        "Non-blocking I/O",
        "Configurable output paths"
      ]
    },
    {
      category: "Cloud Integrations",
      features: [
        "AWS S3 support",
        "Cloudinary integration",
        "Google Cloud Storage",
        "Provider-agnostic API",
        "Easy switching",
        "Custom configurations"
      ]
    },
    {
      category: "Reliability",
      features: [
        "Backup fallback system (safeFile)",
        "Automatic temp file cleanup",
        "Error handling built-in",
        "Stream error recovery",
        "Failed conversion handling",
        "Process exit cleanup"
      ]
    }
  ];

  return (
    <section className="section py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(to bottom right, #fef7f0, #ffffff, #f0f9ff)' }}>
      <div className="container px-4">
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            File Upload <span className="text-gradient">Shouldn't Be This Hard</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Every developer faces the same file upload challenges. Complex setup, manual optimization, 
            memory issues, and cloud provider lock-in. There has to be a better way.
          </p>
        </motion.div>

        {/* The Real Cost - Dramatic Problem Visualization */}
        <motion.div
          className="mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Problem Statement */}
          <div className="bg-gradient-to-b from-[#F40009] via-[#E60008] to-[#C70008] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 mb-6 md:mb-8 text-white relative overflow-hidden" >
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white opacity-5 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-black opacity-5 rounded-full -ml-32 md:-ml-48 -mb-32 md:-mb-48"></div>
            
            <div className="relative z-10">
              <motion.div
                className="inline-block bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                ⚠️ The Hidden Cost of Traditional File Handling
              </motion.div>
              


              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                You're Wasting <span className="text-yellow-300">3-4 Weeks</span> Per Project
              </h3>
              
              <p className="text-sm md:text-lg lg:text-xl text-red-50 mb-6 md:mb-8 max-w-3xl leading-relaxed">
                Every time you build file upload functionality, you're stuck in the same exhausting cycle: 
                configuring Multer, setting up Sharp, integrating cloud SDKs, handling edge cases, debugging memory leaks...
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">500+</div>
                  <div className="text-xs md:text-sm text-red-50">Lines of boilerplate code you write every single time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">5+</div>
                  <div className="text-xs md:text-sm text-red-50">Different packages to install, configure, and maintain</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 sm:col-span-2 md:col-span-1">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-300 mb-2">∞</div>
                  <div className="text-xs md:text-sm text-red-50">Hours debugging memory issues and failed uploads</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {isMobile ? (
              // first div start here 
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-red-200 shadow-lg">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">😰</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">The Setup Nightmare</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Configure Multer storage, set up Sharp pipelines, initialize cloud SDKs, handle MIME types, 
                      validate file sizes, manage temp directories... and that's just the beginning.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-3 md:p-4 border border-red-100">
                  <div className="text-xs md:text-sm text-red-700 font-mono">
                    <div>✗ Manual Multer configuration</div>
                    <div>✗ Sharp setup for each format</div>
                    <div>✗ Cloud provider SDK integration</div>
                    <div>✗ Error handling & fallbacks</div>
                    <div>✗ Stream management for large files</div>
                  </div>
                </div>
              </div> //end here
              
              
            ) : (
              <motion.div
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-red-200 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">😰</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">The Setup Nightmare</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Configure Multer storage, set up Sharp pipelines, initialize cloud SDKs, handle MIME types, 
                      validate file sizes, manage temp directories... and that's just the beginning.
                    </p>
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-3 md:p-4 border border-red-100">
                  <div className="text-xs md:text-sm text-red-700 font-mono">
                    <div>✗ Manual Multer configuration</div>
                    <div>✗ Sharp setup for each format</div>
                    <div>✗ Cloud provider SDK integration</div>
                    <div>✗ Error handling & fallbacks</div>
                    <div>✗ Stream management for large files</div>
                  </div>
                </div>
              </motion.div>
            )}

            {isMobile ? (
              //second start here
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-orange-200 shadow-lg">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">💸</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">The Maintenance Burden</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Every project becomes a unique snowflake. Different configurations, different bugs, 
                      different cloud providers. Switching providers? Start from scratch.
                    </p>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 md:p-4 border border-orange-100">
                  <div className="text-xs md:text-sm text-orange-700 font-mono">
                    <div>✗ Vendor lock-in with cloud SDKs</div>
                    <div>✗ Inconsistent code across projects</div>
                    <div>✗ No reusable patterns</div>
                    <div>✗ Breaking changes in dependencies</div>
                    <div>✗ Team onboarding complexity</div>
                  </div>
                </div>
              </div>//end here
              
            ) : (
              <motion.div
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-orange-200 shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">💸</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">The Maintenance Burden</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Every project becomes a unique snowflake. Different configurations, different bugs, 
                      different cloud providers. Switching providers? Start from scratch.
                    </p>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 md:p-4 border border-orange-100">
                  <div className="text-xs md:text-sm text-orange-700 font-mono">
                    <div>✗ Vendor lock-in with cloud SDKs</div>
                    <div>✗ Inconsistent code across projects</div>
                    <div>✗ No reusable patterns</div>
                    <div>✗ Breaking changes in dependencies</div>
                    <div>✗ Team onboarding complexity</div>
                  </div>
                </div>
              </motion.div>
            )}

            {isMobile ? (
              //third here
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-yellow-200 shadow-lg">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Performance Disasters</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Large files crash your server. Memory usage spikes. Event loop blocks. 
                      Users get timeout errors. Your monitoring alerts go crazy.
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 md:p-4 border border-yellow-100">
                  <div className="text-xs md:text-sm text-yellow-700 font-mono">
                    <div>✗ Memory leaks with large files</div>
                    <div>✗ Blocked event loop</div>
                    <div>✗ No automatic streaming</div>
                    <div>✗ Server crashes under load</div>
                    <div>✗ Poor user experience</div>
                  </div>
                </div>
              </div> //end here
            ) : (
              <motion.div
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-yellow-200 shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Performance Disasters</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Large files crash your server. Memory usage spikes. Event loop blocks. 
                      Users get timeout errors. Your monitoring alerts go crazy.
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 md:p-4 border border-yellow-100">
                  <div className="text-xs md:text-sm text-yellow-700 font-mono">
                    <div>✗ Memory leaks with large files</div>
                    <div>✗ Blocked event loop</div>
                    <div>✗ No automatic streaming</div>
                    <div>✗ Server crashes under load</div>
                    <div>✗ Poor user experience</div>
                  </div>
                </div>
              </motion.div>
            )}

            {isMobile ? (
              ///fourth here
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-purple-200 shadow-lg">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Image Optimization Hell</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Manually configure Sharp for WebP, JPEG, PNG. Set quality levels. Handle format conversions. 
                      Test on different devices. Repeat for every project.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 md:p-4 border border-purple-100">
                  <div className="text-xs md:text-sm text-purple-700 font-mono">
                    <div>✗ Manual Sharp configuration</div>
                    <div>✗ Format-specific pipelines</div>
                    <div>✗ Quality optimization guesswork</div>
                    <div>✗ No fallback for failed conversions</div>
                    <div>✗ Inconsistent results</div>
                  </div>
                </div>
              </div> //end here
            ) : (
              <motion.div
                className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-purple-200 shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl md:text-2xl">🔧</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Image Optimization Hell</h4>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      Manually configure Sharp for WebP, JPEG, PNG. Set quality levels. Handle format conversions. 
                      Test on different devices. Repeat for every project.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 md:p-4 border border-purple-100">
                  <div className="text-xs md:text-sm text-purple-700 font-mono">
                    <div>✗ Manual Sharp configuration</div>
                    <div>✗ Format-specific pipelines</div>
                    <div>✗ Quality optimization guesswork</div>
                    <div>✗ No fallback for failed conversions</div>
                    <div>✗ Inconsistent results</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* The Solution - Upfly's Simple Approach */}
        <motion.div
          className="mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Solution Header */}
          <div className="text-center mb-8 md:mb-12">
            <motion.div
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              ✨ Here's How Upfly Solves Everything
            </motion.div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              One Middleware. <span className="text-gradient">All Problems Solved.</span>
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Replace 500+ lines of complex configuration with a single, elegant middleware that handles everything.
            </p>
          </div>

          {/* Upfly Code Example - Centered and Prominent */}
          <motion.div
            className="max-w-4xl mx-auto mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-4 md:mb-6 flex-wrap gap-2">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="font-bold text-blue-700 text-sm md:text-base lg:text-lg">The Complete Solution</span>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-1 rounded-full text-xs font-bold">
                  ~15 LINES
                </div>
              </div>
              <div  className="bg-white rounded-xl overflow-hidden shadow-inner">
                <SyntaxHighlighter
  language="javascript"
  style={vscDarkPlus}
  customStyle={{
    margin: 0,
    padding: '2rem',
    fontSize: '0.875rem',
    lineHeight: '1.6',
    borderRadius: '1rem',
    background: '#1E1E1E', // override for a deep editor feel
  }}
  
>
  
  {upflyWayCode}
</SyntaxHighlighter>
<div  id='features'></div>
    </div>


  </div>

{/* feature section */}
    {/* <motion.div
            className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Complete Feature Set</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-lg border-b border-gray-200 pb-2">
                    {category.category}
                  </h4>
                  <ul className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div> */}
  
          </motion.div>

          {/* Feature Grid - Styled like Benefits Grid */}
          <h3  className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-12 text-gray-900">
            Complete Feature Set
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featureCategories.map((category, index) => {
              const icons = [Zap, Cloud, Cloud, Shield]; // Icons for each category
              const IconComponent = icons[index];
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 md:p-6 border-2 border-blue-200 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">{category.category}</h4>
                  <ul className="space-y-1.5 md:space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-1.5 md:gap-2 text-xs md:text-sm text-gray-600">
                        <CheckCircle size={12} className="md:w-3.5 md:h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Transformation Stats */}
        <motion.div
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white opacity-5 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">The Transformation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">93%</div>
                <div className="text-blue-100 text-sm md:text-base">Less Code</div>
                <div className="text-xs md:text-sm text-blue-200 mt-1 md:mt-2">500+ lines → 15 lines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">99%</div>
                <div className="text-blue-100 text-sm md:text-base">Faster Setup</div>
                <div className="text-xs md:text-sm text-blue-200 mt-1 md:mt-2">3-4 weeks → 30 minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">100%</div>
                <div className="text-blue-100 text-sm md:text-base">Reliable</div>
                <div className="text-xs md:text-sm text-blue-200 mt-1 md:mt-2">Automatic fallback system</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">3</div>
                <div className="text-blue-100 text-sm md:text-base">Cloud Providers</div>
                <div className="text-xs md:text-sm text-blue-200 mt-1 md:mt-2">Switch in seconds</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Stop Wasting Time on Boilerplate</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join developers who've already eliminated weeks of work with Upfly's complete file handling solution.
          </p>
          <button 
            className="btn-primary btn-lg"
            onClick={() => document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now →
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ProblemSection;
