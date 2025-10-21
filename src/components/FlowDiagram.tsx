import React from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Image, 
  Cloud, 
  CheckCircle, 
  ArrowRight, 
  FileImage,
  Zap,
  Shield
} from 'lucide-react';

const FlowDiagram: React.FC = () => {
  const steps = [
    {
      icon: Upload,
      title: "Smart Intake",
      description: "Files uploaded via Express middleware",
      details: ["Small files → Memory", "Large files → Temp stream", "Unknown fields ignored"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Image,
      title: "Auto Convert",
      description: "On-the-fly image optimization",
      details: ["WebP, AVIF, JPEG, PNG", "Quality optimization", "Aspect ratio preserved"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Upload",
      description: "Multi-provider cloud storage",
      details: ["Cloudinary, S3, GCS", "Automatic retry logic", "Fallback handling"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CheckCircle,
      title: "Ready to Use",
      description: "Production-ready results",
      details: ["req.files populated", "Cloud URLs returned", "Error metadata included"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Streaming processing for optimal performance"
    },
    {
      icon: Shield,
      title: "Bulletproof",
      description: "Graceful fallbacks ensure your app never crashes"
    },
    {
      icon: FileImage,
      title: "Format Smart",
      description: "Automatic format detection and conversion"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            🔄 How Upfly Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A visual journey through Upfly's intelligent file processing pipeline
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative mb-16">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200  to-orange-200 transform -translate-y-1/2 z-0"></div>
              
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative z-10 bg-white"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center max-w-xs">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-4 mb-4 shadow-lg`}>
                      <step.icon className="w-full h-full text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 mb-4">{step.description}</p>
                    
                    {/* Details */}
                    <div className="bg-slate-50 rounded-lg p-4 w-full">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2 text-sm text-slate-600 mb-1 last:mb-0">
                          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-10 -right-8 text-slate-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <ArrowRight size={24} />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-3 flex-shrink-0`}>
                  <step.icon className="w-full h-full text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 mb-4">{step.description}</p>
                  <div className="bg-slate-50 rounded-lg p-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 text-sm text-slate-600 mb-1 last:mb-0">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-slate-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-slate-900 to-primary-900 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Performance That Scales</h3>
            <p className="text-blue-100">Built for production workloads</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2"> 7MB</div>
              <div className="text-sm text-blue-200">Memory threshold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-sm text-blue-200">Size reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-sm text-blue-200">Faster processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-sm text-blue-200">Uptime reliability</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlowDiagram;
