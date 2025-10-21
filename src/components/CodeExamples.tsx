import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Copy, CheckCircle, FileImage, Database, Zap } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExamples: React.FC = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const examples = [
    {
      title: "Quick Start",
      description: "Get started in 30 seconds",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      code: `const express = require('express');
const { upflyUpload } = require('upfly');

const app = express();

app.post('/upload',
  upflyUpload({
    fields: {
      images: { format: 'webp', quality: 80 }  // Auto-optimized!
    }
  }),
  (req, res) => res.json({ files: req.files })
);

app.listen(3000);

// Test it:
// curl -X POST -F "images=@photo.jpg" http://localhost:3000/upload`
    },
    {
      title: "Cloud Storage",
      description: "Upload directly to cloud providers",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      code: `const { upflyUpload } = require('upfly');

// Multi-format gallery with cloud storage
app.post('/gallery',
  upflyUpload({
    fields: {
      thumbnails: { 
        format: 'webp', 
        quality: 60, 
        output: 'memory' 
      },
      originals: { 
        format: 'jpeg', 
        quality: 95, 
        output: 'disk' 
      },
      previews: { 
        cloudStorage: true,
        cloudProvider: 'cloudinary',
        cloudConfig: {
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
          folder: 'gallery'
        },
        format: 'avif',
        quality: 70
      }
    },
    outputDir: './uploads',
    safeFile: true  // Enable backup fallback
  }),
  (req, res) => {
    res.json({
      thumbnails: req.files.thumbnails, // In memory
      originals: req.files.originals,   // On disk
      previews: req.files.previews      // In cloud
    });
  }
);`
    },
    {
      title: "Convert Only",
      description: "Use with your existing upload setup",
      icon: FileImage,
      color: "from-purple-500 to-pink-500",
      code: `const multer = require('multer');
const { upflyConvert } = require('upfly');

const upload = multer({ storage: multer.memoryStorage() });

app.post('/convert',
  upload.single('image'),
  upflyConvert({
    fields: {
      image: { 
        format: 'webp', 
        quality: 80,
        cloudStorage: true,
        cloudProvider: 's3',
        cloudConfig: {
          region: 'us-east-1',
          bucket: 'my-converted-images',
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
      }
    }
  }),
  (req, res) => {
    res.json({ 
      original: req.file.originalname,
      converted: req.file.cloudUrl,
      size_reduction: \`\${Math.round((1 - req.file.convertedSize / req.file.originalSize) * 100)}%\`
    });
  }
);`
    }
  ];

  const copyToClipboard = async (code: string, exampleTitle: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(exampleTitle);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <section id="examples" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            💻 Real-World Examples
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Copy, paste, and customize these production-ready examples for your use case
          </p>
        </motion.div>

        {/* Example Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {examples.map((example, index) => (
            <motion.button
              key={index}
              className={`px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                activeExample === index
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:shadow-md'
              }`}
              onClick={() => setActiveExample(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <example.icon size={20} />
                <div className="text-left">
                  <div className="font-bold">{example.title}</div>
                  <div className="text-xs opacity-75">{example.description}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Example */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExample}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${examples[activeExample].color} p-3`}>
                    {React.createElement(examples[activeExample].icon, { className: "w-full h-full text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{examples[activeExample].title}</h3>
                    <p className="text-slate-600">{examples[activeExample].description}</p>
                  </div>
                </div>
                
                <motion.button
                  className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                  onClick={() => copyToClipboard(examples[activeExample].code, examples[activeExample].title)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copiedCode === examples[activeExample].title ? (
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

              {/* Code */}
              <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-4 text-slate-600 text-sm font-mono">
                    {examples[activeExample].title.toLowerCase().replace(' ', '-')}.js
                  </span>
                </div>
                <SyntaxHighlighter
                  language="javascript"
                  style={oneLight}
                  customStyle={{
                    margin: 0,
                    padding: '2rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                  }}
                >
                  {examples[activeExample].code}
                </SyntaxHighlighter>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Features Highlight */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Production Ready</h3>
            <p className="text-slate-600">All examples include proper error handling and best practices</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Copy & Paste</h3>
            <p className="text-slate-600">Ready-to-use code snippets that work out of the box</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileImage className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Fully Customizable</h3>
            <p className="text-slate-600">Adapt examples to your specific requirements and use cases</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeExamples;
