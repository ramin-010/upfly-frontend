import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, Zap, ArrowRight, ExternalLink, Shield, Cloud, Database } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InstallSection: React.FC = () => {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeSetup, setActiveSetup] = useState(0);

  const copyToClipboard = async (text: string, command: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(command);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const setupOptions = [
    {
      title: "Quick Start",
      description: "Get started in 2 minutes",
      icon: Zap,
      code: `npm install upfly

// Basic setup
const { upflyUpload } = require('upfly');

app.post('/upload',
  upflyUpload({
    fields: {
      image: { format: 'webp', quality: 80 }
    }
  }),
  (req, res) => res.json({ files: req.files })
);`
    },
    {
      title: "Cloud Storage Setup",
      description: "Multi-cloud configuration",
      icon: Cloud,
      code: `npm install upfly

// Cloud storage configuration
app.post('/cloud-upload',
  upflyUpload({
    fields: {
      documents: {
        cloudStorage: true,
        cloudProvider: 's3',
        cloudConfig: {
          region: 'us-east-1',
          bucket: 'my-uploads',
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_KEY
        },
        format: 'webp',
        quality: 85
      }
    }
  }),
  (req, res) => res.json({ files: req.files })
);`
    },
    {
      title: "Reliable Processing",
      description: "Backup fallback system",
      icon: Shield,
      code: `npm install upfly

// Reliable processing with backup
app.post('/reliable-upload',
  upflyUpload({
    fields: {
      media: {
        output: 'memory',
        format: 'webp',
        quality: 80,
        keepOriginal: false
      }
    },
    safeFile: true,  // Enable backup fallback
    limit: 10 * 1024 * 1024  // 10MB limit
  }),
  (req, res) => res.json({ files: req.files })
);`
    }
  ];

  return (
    <section id="install" className="section bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6">
            Production-Ready in
            <span className="text-gradient"> 2 Minutes</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Choose your setup: Quick start for prototypes, enterprise for production, 
            or multi-cloud for maximum reliability.
          </p>
        </motion.div>

        {/* Setup Options */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {setupOptions.map((option, index) => (
            <motion.button
              key={index}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeSetup === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
              onClick={() => setActiveSetup(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <option.icon size={20} />
              <div className="text-left">
                <div className="font-bold">{option.title}</div>
                <div className="text-xs opacity-75">{option.description}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Setup */}
        <motion.div
          key={activeSetup}
          className="card-elevated p-8 bg-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                {React.createElement(setupOptions[activeSetup].icon, { className: "text-white", size: 24 })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{setupOptions[activeSetup].title}</h3>
                <p className="text-gray-600">{setupOptions[activeSetup].description}</p>
              </div>
            </div>
            
            <motion.button
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => copyToClipboard(setupOptions[activeSetup].code, `setup-${activeSetup}`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copiedCommand === `setup-${activeSetup}` ? (
                <>
                  <CheckCircle size={16} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </motion.button>
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="ml-4 text-gray-600 text-sm font-mono">terminal</span>
            </div>
            <SyntaxHighlighter
              language="bash"
              style={oneLight}
              customStyle={{
                margin: 0,
                padding: '2rem',
                fontSize: '0.875rem',
                lineHeight: '1.6',
              }}
            >
              {setupOptions[activeSetup].code}
            </SyntaxHighlighter>
          </div>
        </motion.div>

        {/* Enterprise Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card p-6 text-center bg-white">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Zero Configuration</h3>
            <p className="text-gray-600">Works out of the box with intelligent defaults</p>
          </div>

          <div className="card p-6 text-center bg-white">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise Security</h3>
            <p className="text-gray-600">SOC 2 compliant with built-in encryption</p>
          </div>

          <div className="card p-6 text-center bg-white">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Database className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Cloud Ready</h3>
            <p className="text-gray-600">AWS S3, Cloudinary, Google Cloud support</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-elevated p-8 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Uploads?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Join 50,000+ developers building better applications with Upfly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/ramin-010/upfly#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lg bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Documentation
                <ExternalLink size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/ramin-010/upfly"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Star on GitHub
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstallSection;
