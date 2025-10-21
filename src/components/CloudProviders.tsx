import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Database, Globe, CheckCircle, Code } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CloudProviders: React.FC = () => {
  const [activeProvider, setActiveProvider] = useState(0);

  const providers = [
    {
      name: "Cloudinary",
      icon: "☁️",
      description: "Images & videos with transformations",
      color: "from-blue-500 to-cyan-500",
      features: ["Image & video optimization", "On-the-fly transformations", "CDN delivery", "AI-powered features"],
      useCase: "Perfect for user-generated content, social media, and e-commerce",
      code: `upflyUpload({
  fields: {
    avatar: {
      cloudStorage: true,
      cloudProvider: 'cloudinary',
      cloudConfig: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        folder: 'avatars'
      },
      format: 'webp',
      quality: 85
    }
  }
})

// Result: req.files.avatar[0].cloudUrl
// → https://res.cloudinary.com/demo/image/upload/avatars/abc123.webp`
    },
    {
      name: "AWS S3",
      icon: "🪣",
      description: "Scalable object storage",
      color: "from-orange-500 to-red-500",
      features: ["Infinite scalability", "Global availability", "Advanced security", "Cost optimization"],
      useCase: "Enterprise applications, data lakes, and backup solutions",
      code: `upflyUpload({
  fields: {
    documents: {
      cloudStorage: true,
      cloudProvider: 's3',
      cloudConfig: {
        region: 'us-east-1',
        bucket: 'my-app-uploads',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        acl: 'public-read'
      }
    }
  }
})

// Result: req.files.documents[0].cloudUrl
// → https://my-app-uploads.s3.us-east-1.amazonaws.com/documents/file-abc123.pdf`
    },
    {
      name: "Google Cloud Storage",
      icon: "🌐",
      description: "Enterprise-grade storage",
      color: "from-green-500 to-emerald-500",
      features: ["Multi-regional storage", "Machine learning integration", "Strong consistency", "Lifecycle management"],
      useCase: "Data analytics, machine learning, and global applications",
      code: `upflyUpload({
  fields: {
    previews: { 
      cloudStorage: true,
      cloudProvider: 'gcs',
      cloudConfig: {
        bucket: 'my-gallery-bucket',
        keyFilename: './service-account.json',
        public: true
      },
      format: 'avif',
      quality: 70
    }
  }
})

// Result: req.files.previews[0].cloudUrl
// → https://storage.googleapis.com/my-gallery-bucket/previews/preview-abc123.avif`
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            🌍 Multi-Cloud Ready
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Switch between major cloud providers with a single line change. Same API, different backends.
          </p>
        </motion.div>

        {/* Provider Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {providers.map((provider, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeProvider === index
                  ? 'bg-white shadow-lg text-slate-900 scale-105'
                  : 'bg-white/50 text-slate-600 hover:bg-white hover:shadow-md'
              }`}
              onClick={() => setActiveProvider(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{provider.icon}</span>
                <span>{provider.name}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Provider Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProvider}
            className="grid lg:grid-cols-2 gap-12 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Provider Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${providers[activeProvider].color} p-4 shadow-lg`}>
                  <span className="text-2xl">{providers[activeProvider].icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{providers[activeProvider].name}</h3>
                  <p className="text-slate-600">{providers[activeProvider].description}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {providers[activeProvider].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="text-slate-600" size={20} />
                  <h4 className="text-lg font-bold text-slate-900">Best For</h4>
                </div>
                <p className="text-slate-700">{providers[activeProvider].useCase}</p>
              </div>
            </div>

            {/* Code Example */}
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-slate-600" size={20} />
                  <h4 className="text-lg font-bold text-slate-900">Implementation</h4>
                </div>
                <div className="bg-slate-50 rounded-lg overflow-hidden">
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    customStyle={{
                      margin: 0,
                      padding: '1.5rem',
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {providers[activeProvider].code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Migration Made Easy */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Migration Made Easy</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Start with one provider and switch to another without changing your application logic. 
              Just update the configuration!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-6">
              <Database className="text-blue-200 mx-auto mb-3" size={32} />
              <h4 className="font-bold mb-2">Unified API</h4>
              <p className="text-sm text-blue-200">Same interface across all providers</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Cloud className="text-blue-200 mx-auto mb-3" size={32} />
              <h4 className="font-bold mb-2">Zero Downtime</h4>
              <p className="text-sm text-blue-200">Switch providers without service interruption</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <CheckCircle className="text-blue-200 mx-auto mb-3" size={32} />
              <h4 className="font-bold mb-2">Consistent Results</h4>
              <p className="text-sm text-blue-200">Same file structure and metadata format</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudProviders;
