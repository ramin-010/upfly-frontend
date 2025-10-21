import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Lock, 
  Cpu, 
  Network,
  CheckCircle2,
  BarChart3,
  Globe,
  FileCheck,
  Layers,
  ArrowRight,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const featureCategories = [
    {
      name: "Performance",
      icon: Zap,
      description: "Built for enterprise scale and speed"
    },
    {
      name: "Security",
      icon: Shield,
      description: "Enterprise-grade security and compliance"
    },
    {
      name: "Infrastructure",
      icon: Cloud,
      description: "Multi-cloud architecture and reliability"
    },
    {
      name: "Developer Experience",
      icon: Cpu,
      description: "Designed for developer productivity"
    }
  ];

  const featuresByCategory = [
    // Performance
    [
      {
        icon: Zap,
        title: "Sub-50ms Processing",
        description: "Lightning-fast file processing with optimized algorithms and memory management",
        metrics: ["<50ms latency", "1000+ concurrent uploads", "Zero memory leaks"],
        color: "from-yellow-400 to-orange-500"
      },
      {
        icon: BarChart3,
        title: "Smart Optimization",
        description: "Automatic image compression and format conversion for optimal performance",
        metrics: ["80% size reduction", "WebP/AVIF support", "Quality preservation"],
        color: "from-green-400 to-emerald-500"
      },
      {
        icon: Network,
        title: "Streaming Architecture",
        description: "Memory-efficient streaming for large files without server overload",
        metrics: ["<10MB RAM usage", "Unlimited file size", "Scalable processing"],
        color: "from-blue-400 to-cyan-500"
      }
    ],
    // Security
    [
      {
        icon: Shield,
        title: "SOC 2 Compliance",
        description: "Built-in compliance with enterprise security standards and regulations",
        metrics: ["SOC 2 Type II", "GDPR ready", "HIPAA compliant"],
        color: "from-purple-400 to-pink-500"
      },
      {
        icon: Lock,
        title: "End-to-End Encryption",
        description: "AES-256 encryption with secure key management and access controls",
        metrics: ["AES-256 encryption", "Secure key rotation", "Access logging"],
        color: "from-red-400 to-rose-500"
      },
      {
        icon: FileCheck,
        title: "Advanced Validation",
        description: "Comprehensive file validation, malware scanning, and content analysis",
        metrics: ["MIME validation", "Malware scanning", "Content filtering"],
        color: "from-indigo-400 to-blue-500"
      }
    ],
    // Infrastructure
    [
      {
        icon: Cloud,
        title: "Multi-Cloud Ready",
        description: "Seamless integration with AWS S3, Cloudinary, and Google Cloud Storage",
        metrics: ["3 cloud providers", "Automatic failover", "Cost optimization"],
        color: "from-blue-400 to-cyan-500"
      },
      {
        icon: Globe,
        title: "Global CDN",
        description: "Worldwide content delivery with edge caching and geographic optimization",
        metrics: ["Global edge network", "Auto-scaling", "99.99% uptime"],
        color: "from-green-400 to-emerald-500"
      },
      {
        icon: Database,
        title: "Intelligent Backup",
        description: "Automatic backup systems with smart recovery and data redundancy",
        metrics: ["Multi-region backup", "Instant recovery", "Zero data loss"],
        color: "from-purple-400 to-pink-500"
      }
    ],
    // Developer Experience
    [
      {
        icon: Cpu,
        title: "Zero Configuration",
        description: "Works out of the box with sensible defaults and automatic optimization",
        metrics: ["No config files", "Smart defaults", "Auto-detection"],
        color: "from-yellow-400 to-orange-500"
      },
      {
        icon: Layers,
        title: "TypeScript Native",
        description: "Full TypeScript support with comprehensive type definitions and IntelliSense",
        metrics: ["Full type safety", "IntelliSense support", "Auto-completion"],
        color: "from-indigo-400 to-blue-500"
      },
      {
        icon: CheckCircle2,
        title: "Comprehensive Testing",
        description: "Built-in testing utilities and comprehensive test coverage for reliability",
        metrics: ["95% test coverage", "Integration tests", "Performance benchmarks"],
        color: "from-red-400 to-rose-500"
      }
    ]
  ];

  const performanceMetrics = [
    {
      metric: "Processing Speed",
      value: "<50ms",
      description: "Average file processing time",
      icon: Zap,
      color: "text-yellow-600"
    },
    {
      metric: "Concurrent Uploads",
      value: "1000+",
      description: "Simultaneous upload handling",
      icon: Users,
      color: "text-blue-600"
    },
    {
      metric: "Uptime SLA",
      value: "99.99%",
      description: "Enterprise reliability guarantee",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      metric: "Implementation Time",
      value: "2 hours",
      description: "From setup to production",
      icon: Clock,
      color: "text-purple-600"
    }
  ];

  const enterpriseStats = [
    { number: "50k+", label: "Active Developers", sublabel: "Worldwide" },
    { number: "99.99%", label: "Uptime SLA", sublabel: "Enterprise grade" },
    { number: "200+", label: "Lines Eliminated", sublabel: "Per integration" },
    { number: "$50k+", label: "Annual Savings", sublabel: "Per enterprise team" }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6">
            Enterprise-Grade
            <span className="text-gradient"> File Upload Infrastructure</span>
          </h2>
          <p className="text-lead max-w-4xl mx-auto">
            Built for scale, security, and developer productivity. Every feature designed 
            with <strong>enterprise requirements</strong> and <strong>production reliability</strong> in mind.
          </p>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="card-elevated p-6 text-center bg-white">
              <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-4`}>
                <metric.icon className={`${metric.color}`} size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="font-semibold text-gray-700 mb-1">{metric.metric}</div>
              <div className="text-sm text-gray-500">{metric.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {featureCategories.map((category, index) => (
              <motion.button
                key={index}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon size={20} />
                <div className="text-left">
                  <div className="font-bold">{category.name}</div>
                  <div className="text-xs opacity-75">{category.description}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Category Features */}
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {featuresByCategory[activeCategory].map((feature, index) => (
              <motion.div
                key={index}
                className="card-elevated p-8 bg-white group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-600 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enterprise Statistics */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {enterpriseStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-elevated p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Layers className="text-blue-200" size={28} />
              <h3 className="text-3xl font-bold">Ready for Enterprise-Grade Uploads?</h3>
            </div>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
              Join enterprise teams worldwide who've transformed their file upload infrastructure with Upfly.
              <strong className="text-white"> Production-ready in hours, not months.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-lg bg-white text-blue-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Enterprise Trial
                <ArrowRight size={20} />
              </motion.button>
              <motion.a
                href="https://github.com/ramin-010/upfly"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Documentation
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
