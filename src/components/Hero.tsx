import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Shield, Database, Cloud, Terminal } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const codeExamples = [
    {
      title: "Dead Simple Start",
      description: "Convert images to WebP. That's it.",
      code: `  upflyUpload({
    fields: {
      "avatar": { 
        format: 'webp',        // Convert to WebP
        quality: 80,           // Set quality
        output: 'memory'       // 'memory' or 'disk'
      },
  },
  outputDir : './uploads',
)};
 `,
      highlight: [4,5, 6]
    },
    {
      title: "Upload to Cloud",
      description: "Direct cloud upload. Get URL instantly.",
      code: `upflyUpload({
    fields: {
      "avatar": { 
        format: 'webp',
        cloudStorage: true,    
        cloudProvider: 'cloudinary',  // 'aws' | 'gcs' | 'cloudinary'
        cloudConfig : {}    
      }
    },
    outputDir : './uploads',
  })
`,
      highlight: [ 5, 6 ,7]
    },
    {
      title: "Built-in Reliability",
      description: "Automatic backup fallback. Never lose files.",
      code: `upflyUpload({
  fields: {
    "avatar": { 
      cloudStorage: true,
      cloudProvider: 'aws',
      cloudConfig : {},
      keepOriginal : true   // no conversion | optimization
    }
  },
  safeFile: true,      // enable backup
  outputDir : './uploads',
})`,
      highlight: [7,10]
    },
    {
      title: "Multiple Files, Zero Hassle",
      description: "Different rules per field. One middleware.",
      code: `upflyUpload({
  fields: {
    "photos": { format: 'webp', cloudStorage: true , cloudProvider : 'aws'},
    "avatar": { cloudStorage: true , cloudProvider : 'cloudinary', keepOriginal : true },
    "docs": { output: 'disk' },
  },
  outputDir : './uploads',
  safeFile : true
})`,
      highlight: [3, 4, 5]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % codeExamples.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const enterpriseFeatures = [
    { icon: Zap, text: "Stream-Based Architecture", desc: "Non-blocking I/O for large files (7MB+ threshold)" },
    { icon: Database, text: "Multi-Cloud Support", desc: "AWS S3, Cloudinary, Google Cloud Storage" },
    { icon: Shield, text: "Auto Image Optimization", desc: "WebP conversion with Sharp, quality control" },
    { icon: Cloud, text: "Reliable Fallback System", desc: "Automatic backup streams for failed conversions" }
  ];

  const metrics = [
    { number: "3", label: "Cloud Providers", sublabel: "S3, Cloudinary, GCS" },
    { number: "500+", label: "Lines Eliminated", sublabel: "Per integration" },
    { number: "Auto", label: "Image Optimization", sublabel: "Sharp + WebP" },
    { number: "Stream", label: "Based Architecture", sublabel: "Non-blocking I/O" }
  ];

  const CodeLine = ({ children, isHighlighted, lineNumber }: { children: React.ReactNode, isHighlighted: boolean, lineNumber: number }) => (
    <div className="flex">
      <span className="select-none text-gray-400 mr-4 text-right" style={{ minWidth: '0.1rem' }}>
        {lineNumber}
      </span>
      <span className={`transition-all duration-300 ${isHighlighted ? 'bg-blue-500/10 -mx-4 px-4 rounded' : ''}`}>
        {children}
      </span>
    </div>
  );

  const renderCode = (code: string, highlightLines: number[] = []) => {
    const lines = code.split('\n');
    return lines.map((line, idx) => {
      const lineNumber = idx + 1;
      const isHighlighted = highlightLines.includes(lineNumber);
      
      // Simple syntax highlighting
      let formattedLine = line;
      
      // Highlight strings
      formattedLine = formattedLine.replace(/'([^']*)'/g, '<span class="text-green-600">\'$1\'</span>');
      
      // Highlight booleans
      formattedLine = formattedLine.replace(/\b(true|false)\b/g, '<span class="text-purple-600">$1</span>');
      
      // Highlight keys
      formattedLine = formattedLine.replace(/(\w+):/g, '<span class="text-blue-600">$1</span>:');
      
      return (
        <CodeLine key={idx} isHighlighted={isHighlighted} lineNumber={lineNumber}>
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
        </CodeLine>
      );
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8" style={{ background: 'linear-gradient(to bottom right, #eff6ff, #ffffff, #faf5ff)' }}>
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      <div className="container relative z-10 pt-10 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-2 md:px-6    py-3 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold text-xs md:text-sm">Production Ready</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-1 md:gap-2 text-gray-600">
                <Zap size={14} />
                <span className="font-medium text-xs md:text-sm">Stream-Based</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-1 md:gap-2 text-gray-600">
                <Cloud size={14} />
                <span className="font-medium text-xs md:text-sm">Multi-Cloud</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5 xl lg:text-6xl pb-2 font-bold text-gray-900 leading-tight">
                Complete File Handling Solution 
              </h1>
              <span className="text-[2rem] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Just One Middleware.
              </span>
              <p className="text-large p-2 md:p-0 md:text-xl text-gray-600 max-w-2xl">
                Handle file uploads from <strong className="text-gray-900">interception to storage</strong>. 
                Stream-based processing, automatic image optimization, multi-cloud storage, and built-in reliability 
                — the ultimate complete file handling library you need.
              </p>
            </motion.div>

            {/* Enterprise Features */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex  items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{feature.text}</h3>
                    <p className="text-gray-600 text-xs mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Metrics */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {metrics.map((metric, index) => (
                <div key={index} className="text-center ">
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{metric.number}</div>
                  <div className="text-sm font-semibold text-gray-700">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.sublabel}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Code Carousel */}
          <motion.div
            className="relative min-h-[700px] pl-8 md:w-[42vw] w-[98vw] right-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4, delay: 0.3 }}
          >
            <motion.div
              className="absolute top-6 left-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ☁️ Cloud Ready
            </motion.div>
              {/* code container */}
            <div className="relative top-[90px] bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-2xl  ">
              {/* Code Header */}

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 ">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-4 text-gray-500 text-sm font-mono">app.js</span>
                </div>
                <div className="flex gap-2">
                  {codeExamples.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-blue-600 w-6'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Title and Description */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">{codeExamples[currentSlide].title}</h3>
                <p className="text-sm text-gray-600">{codeExamples[currentSlide].description}</p>
              </div>

              {/* Fixed Height Code Container */}
              <div
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 overflow-x-auto overflow-y-hidden"
                style={{
                  minHeight: '320px',
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#cbd5e1 #f8fafc'
                }}
              >
                <style>{`
                  /* Custom minimal scrollbar for WebKit browsers */
                  .relative::-webkit-scrollbar {
                    width: 2px;
                    height: 2px;
                  }

                  .relative::-webkit-scrollbar-track {
                    background: #f8fafc;
                    border-radius: 1px;
                  }

                  .relative::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 1px;
                  }

                  .relative::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                  }

                  /* For Firefox */
                  .relative {
                    scrollbar-width: thin;
                    scrollbar-color: #cbd5e1 #f8fafc;
                  }
                `}</style>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="lg:p-6 p-0"
                  >
                    <pre className="font-mono text-sm text-gray-800 leading-relaxed">
                      {renderCode(codeExamples[currentSlide].code, codeExamples[currentSlide].highlight)}
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.5, ease: "linear" }}
                  key={currentSlide}
                />
              </div>
            </div>

            {/* CTA Buttons - Fixed position */}
            <div className="absolute left-0 right-0 pl-10" style={{ top: '650px' }}>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
              <button
                onClick={() => scrollToSection('build')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-105"
              
             >
                Start Building Now
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection('architecture')}
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 transition-all hover:scale-105"
              >
                <Terminal size={20} />
                View Architecture
              </button>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;