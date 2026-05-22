import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Server, Clock, Activity, Image as ImageIcon, X, CheckCircle } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProblemSection: React.FC = () => {
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

  const painPoints = [
    {
      icon: Server,
      title: "The Setup Nightmare",
      description: "Configure Multer storage, set up Sharp pipelines, initialize cloud SDKs, handle MIME types, validate file sizes, manage temp directories... and that's just the beginning.",
      points: [
        "Manual Multer configuration",
        "Sharp setup for each format",
        "Cloud provider SDK integration",
        "Error handling & fallbacks",
        "Stream management for large files"
      ]
    },
    {
      icon: Clock,
      title: "The Maintenance Burden",
      description: "Every project becomes a unique snowflake. Different configurations, different bugs, different cloud providers. Switching providers? Start from scratch.",
      points: [
        "Vendor lock-in with cloud SDKs",
        "Inconsistent code across projects",
        "No reusable patterns",
        "Breaking changes in dependencies",
        "Team onboarding complexity"
      ]
    },
    {
      icon: Activity,
      title: "Performance Disasters",
      description: "Large files crash your server. Memory usage spikes. Event loop blocks. Users get timeout errors. Your monitoring alerts go crazy.",
      points: [
        "Memory leaks with large files",
        "Blocked event loop",
        "No automatic streaming",
        "Server crashes under load",
        "Poor user experience"
      ]
    },
    {
      icon: ImageIcon,
      title: "Image Optimization Hell",
      description: "Manually configure Sharp for WebP, JPEG, PNG. Set quality levels. Handle format conversions. Test on different devices. Repeat for every project.",
      points: [
        "Manual Sharp configuration",
        "Format-specific pipelines",
        "Quality optimization guesswork",
        "No fallback for failed conversions",
        "Inconsistent results"
      ]
    }
  ];

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
    <section className="section py-16 md:py-24 lg:py-32" style={{ background: '#f8fafc' }}>
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

        {/* Dramatic Problem Visualization */}
        <motion.div
          className="mb-16 md:mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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

          {/* Pain Points Grid - Professional Redesign */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 md:gap-5 mb-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-100">
                    <point.icon className="text-slate-700" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                  <ul className="space-y-3">
                    {point.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <X size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Solution - Upfly's Simple Approach */}
        <motion.div
          className="mb-16 md:mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              One Middleware. <span className="text-blue-600">All Problems Solved.</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Replace 500+ lines of complex configuration with a single, elegant middleware that handles everything from parsing to cloud uploads.
            </p>
          </div>

          <motion.div
            className="max-w-4xl mx-auto mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <div className="flex items-center justify-between px-6 py-4 bg-slate-800/50 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-slate-400 text-sm font-medium ml-2">upload.js</span>
                </div>
                <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                  ~15 LINES OF CODE
                </div>
              </div>
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '2rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  background: 'transparent',
                }}
              >
                {upflyWayCode}
              </SyntaxHighlighter>
              <div id='features'></div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <div className="mb-16 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14 text-slate-900 tracking-tight">
              Everything You Need, Out of the Box
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featureCategories.map((category, index) => {
                const icons = [ImageIcon, Cloud, Server, Shield];
                const IconComponent = icons[index];
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-4">{category.category}</h4>
                    <ul className="space-y-3">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                          <CheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Transformation Stats */}
        <motion.div
          className="bg-slate-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:mb-14 text-center tracking-tight">The Upfly Advantage</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tighter text-blue-400">93%</div>
                <div className="text-white font-medium text-lg mb-2">Less Code</div>
                <div className="text-sm text-slate-400">500+ lines → 15 lines</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tighter text-blue-400">99%</div>
                <div className="text-white font-medium text-lg mb-2">Faster Setup</div>
                <div className="text-sm text-slate-400">3-4 weeks → 30 minutes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tighter text-blue-400">100%</div>
                <div className="text-white font-medium text-lg mb-2">Reliable</div>
                <div className="text-sm text-slate-400">Automatic fallback system</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tighter text-blue-400">3</div>
                <div className="text-white font-medium text-lg mb-2">Providers</div>
                <div className="text-sm text-slate-400">Switch cloud providers in seconds</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
