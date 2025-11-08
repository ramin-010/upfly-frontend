import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowRight, Github } from 'lucide-react';

import ReactFlow, {
  type Node,
  type Edge,
  Background,
  BackgroundVariant,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const SolutionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cloudProvider, setCloudProvider] = useState(0);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (text: string, commandType: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(commandType);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const commands = [
    { type: 'npm', command: 'npm i upfly multer' },
    { type: 'yarn', command: 'yarn add upfly multer' },
    { type: 'pnpm', command: 'pnpm add upfly multer' }
  ];

  const codeExamples = [
    {
      title: "Basic Upload",
      description: "Local storage with automatic WebP conversion",
      code: `const { upflyUpload } = require('upfly');

app.post('/upload',
  upflyUpload({
    fields: {
      "avatar": { 
        output: 'disk',        // or 'memory'
        format: 'webp',        // auto conversion
        quality: 80,
        keepOriginal: false
      }
    },
    outputDir: './uploads'
  }),
  (req, res) => res.json({ files: req.files })
);`
    },
    {
      title: "Cloud Storage",
      description: "Upload to AWS S3, Cloudinary, or Google Cloud Storage",
      cloudProviders: [
        {
          name: "Cloudinary",
          code: `app.post('/cloud-upload',
  upflyUpload({
    fields: {
      "documents": {
        cloudStorage: true,
        cloudProvider: 'cloudinary',
        cloudConfig: {
          cloud_name: process.env.CLOUDINARY_NAME,
          api_key: process.env.CLOUDINARY_KEY,
          api_secret: process.env.CLOUDINARY_SECRET,
          folder: 'uploads'
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
          name: "AWS S3",
          code: `app.post('/s3-upload',
  upflyUpload({
    fields: {
      "documents": {
        cloudStorage: true,
        cloudProvider: 's3',
        cloudConfig: {
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_KEY,
          region: process.env.AWS_REGION,
          bucket: process.env.AWS_BUCKET
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
          name: "Google Cloud Storage",
          code: `app.post('/gcs-upload',
  upflyUpload({
    fields: {
      "documents": {
        cloudStorage: true,
        cloudProvider: 'gcs',
        cloudConfig: {
          projectId: process.env.GCS_PROJECT_ID,
          keyFilename: process.env.GCS_KEY_FILE,
          bucket: process.env.GCS_BUCKET
        },
        format: 'webp',
        quality: 85
      }
    }
  }),
  (req, res) => res.json({ files: req.files })
);`
        }
      ]
    },
    {
      title: "Reliable Processing",
      description: "Stream-based with automatic backup fallback",
      code: `app.post('/reliable-upload',
  upflyUpload({
    fields: {
      "images": {
        output: 'memory',      // or 'disk'
        format: 'webp',
        quality: 80,
        keepOriginal: false
      }
    },
    safeFile: true,            // Enable backup fallback
    limit: 10 * 1024 * 1024    // 10MB limit
  }),
  (req, res) => res.json({ files: req.files })
);`
    }
  ];

  // const featureCategories = [
  //   {
  //     category: "Image Processing",
  //     features: [
  //       "Automatic format conversion (WebP, JPEG, PNG, AVIF)",
  //       "Quality control (1-100)",
  //       "Sharp-powered optimization",
  //       "Keep original or convert",
  //       "Multiple format support",
  //       "Lossless compression options"
  //     ]
  //   },
  //   {
  //     category: "Storage Options",
  //     features: [
  //       "Memory storage (Buffer)",
  //       "Disk storage (filesystem)",
  //       "Stream-based processing",
  //       "7MB+ large file threshold",
  //       "Non-blocking I/O",
  //       "Configurable output paths"
  //     ]
  //   },
  //   {
  //     category: "Cloud Integrations",
  //     features: [
  //       "AWS S3 support",
  //       "Cloudinary integration",
  //       "Google Cloud Storage",
  //       "Provider-agnostic API",
  //       "Easy switching",
  //       "Custom configurations"
  //     ]
  //   },
  //   {
  //     category: "Reliability",
  //     features: [
  //       "Backup fallback system (safeFile)",
  //       "Automatic temp file cleanup",
  //       "Error handling built-in",
  //       "Stream error recovery",
  //       "Failed conversion handling",
  //       "Process exit cleanup"
  //     ]
  //   }
  // ];

    // Professional color palette
    const c = {
      entry: '#1e40af', storage: '#7c3aed', decision: '#f59e0b', backup: '#059669',
      controller: '#4f46e5', processing: '#db2777', router: '#0891b2', memory: '#2563eb',
      disk: '#64748b', cloud: '#0284c7', error: '#dc2626', fallback: '#ea580c', success: '#16a34a'
    };
  
    const nodeStyle = (color: string) => ({
      background: color, color: 'white', border: `3px solid ${color}`, borderRadius: '14px',
      padding: '12px 18px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontSize: '12px'
    });
  
    const mainNodes: Node[] = [
      { id: '1', type: 'input', data: { label: <div className="text-center"><div className="font-bold">upflyUpload()</div><div className="text-xs opacity-90">Express Middleware</div></div> }, position: { x: 450, y: 0 }, draggable: false, style: { ...nodeStyle(c.entry), width: 200 } },
      { id: '2', data: { label: <div className="text-center"><div className="font-bold">CustomStorageEngine</div><div className="text-xs opacity-90">Multer Handler</div></div> }, position: { x: 450, y: 90 }, draggable: false, style: { ...nodeStyle(c.storage), width: 200 } },
      { id: '3', data: { label: <div className="text-center"><div className="font-bold">safeFile Check</div><div className="text-xs opacity-90">Backup Decision</div></div> }, position: { x: 450, y: 180 }, draggable: false, style: { ...nodeStyle(c.decision), width: 200 } },
      { id: '4', data: { label: <div className="text-center"><div className="font-bold">Tee Stream</div><div className="text-xs opacity-90">main + backup</div></div> }, position: { x: 200, y: 280 }, draggable: false, style: { ...nodeStyle(c.backup), width: 180 } },
      { id: '5', data: { label: <div className="text-center"><div className="font-bold">Backup Buffer</div><div className="text-xs opacity-90">Original stored</div></div> }, position: { x: 50, y: 380 }, draggable: false, style: { ...nodeStyle(c.backup), width: 180 } },
      { id: '6', data: { label: <div className="text-center"><div className="font-bold">HighwayController</div><div className="text-xs opacity-90">Transform Stream</div></div> }, position: { x: 450, y: 280 }, draggable: false, style: { ...nodeStyle(c.controller), width: 200 } },
      { id: '7', data: { label: <div className="text-center"><div className="font-bold">Need Conversion?</div><div className="text-xs opacity-90">isImage check</div></div> }, position: { x: 450, y: 380 }, draggable: false, style: { ...nodeStyle(c.decision), width: 200 } },
      { id: '8', data: { label: <div className="text-center"><div className="font-bold">Sharp Pipeline</div><div className="text-xs opacity-90">Optimization</div></div> }, position: { x: 300, y: 490 }, draggable: false, style: { ...nodeStyle(c.processing), width: 180 } },
      { id: '9', data: { label: <div className="text-center"><div className="font-bold">Storage Router</div><div className="text-xs opacity-90">Destination</div></div> }, position: { x: 450, y: 600 }, draggable: false, style: { ...nodeStyle(c.router), width: 200 } },
      { id: '10', data: { label: <div className="text-center"><div className="font-bold">Memory</div><div className="text-xs opacity-90">Buffer</div></div> }, position: { x: 220, y: 710 }, draggable: false, style: { ...nodeStyle(c.memory), width: 160 } },
      { id: '11', data: { label: <div className="text-center"><div className="font-bold">Disk</div><div className="text-xs opacity-90">Filesystem</div></div> }, position: { x: 450, y: 710 }, draggable: false, style: { ...nodeStyle(c.disk), width: 160 } },
      { id: '12', data: { label: <div className="text-center"><div className="font-bold cursor-pointer">Cloud Upload ➜</div><div className="text-xs opacity-90">Click to expand</div></div> }, position: { x: 680, y: 710 }, draggable: false, style: { ...nodeStyle(c.cloud), width: 160, cursor: 'pointer' } },
      { id: '13', data: { label: <div className="text-center"><div className="font-bold">Error Handler</div><div className="text-xs opacity-90">Catch failures</div></div> }, position: { x: 720, y: 490 }, draggable: false, style: { ...nodeStyle(c.error), width: 170 } },
      { id: '14', data: { label: <div className="text-center"><div className="font-bold">Fallback</div><div className="text-xs opacity-90">Use original</div></div> }, position: { x: 720, y: 600 }, draggable: false, style: { ...nodeStyle(c.fallback), width: 170 } },
      { id: '15', type: 'output', data: { label: <div className="text-center"><div className="font-bold">Response</div><div className="text-xs opacity-90">req.files</div></div> }, position: { x: 450, y: 820 }, draggable: false, style: { ...nodeStyle(c.success), width: 200 } },
    ];
  
    const cloudNodes: Node[] = [
      { id: 'c1', data: { label: <div className="text-center"><div className="font-bold text-xs">uploadToCloud()</div></div> }, position: { x: 980, y: 450 }, draggable: false, style: { ...nodeStyle(c.cloud), width: 150, padding: '10px' } },
      { id: 'c2', data: { label: <div className="text-center"><div className="font-bold text-xs">Create Adapter</div><div className="text-xs opacity-80">S3/Cloudinary/GCS</div></div> }, position: { x: 980, y: 530 }, draggable: false, style: { ...nodeStyle(c.storage), width: 150, padding: '10px' } },
      { id: 'c3', data: { label: <div className="text-center"><div className="font-bold text-xs">Primary Upload</div><div className="text-xs opacity-80">Stream attempt</div></div> }, position: { x: 980, y: 610 }, draggable: false, style: { ...nodeStyle(c.controller), width: 150, padding: '10px' } },
      { id: 'c4', data: { label: <div className="text-center"><div className="font-bold text-xs">Failed?</div></div> }, position: { x: 980, y: 690 }, draggable: false, style: { ...nodeStyle(c.decision), width: 150, padding: '10px' } },
      { id: 'c5', data: { label: <div className="text-center"><div className="font-bold text-xs">Backup Retry</div><div className="text-xs opacity-80">Use backup</div></div> }, position: { x: 1180, y: 730 }, draggable: false, style: { ...nodeStyle(c.fallback), width: 140, padding: '10px' } },
      { id: 'c6', data: { label: <div className="text-center"><div className="font-bold text-xs">Success</div><div className="text-xs opacity-80">Return URL</div></div> }, position: { x: 980, y: 790 }, draggable: false, style: { ...nodeStyle(c.success), width: 150, padding: '10px' } },
    ];
  
    const mainEdges: Edge[] = [
      { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: c.entry, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.entry } },
      { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: c.storage, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.storage } },
      { id: 'e3-4', source: '3', target: '4', label: 'true', animated: true, style: { stroke: c.backup, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.backup }, labelStyle: { fill: c.backup, fontWeight: 600 } },
      { id: 'e3-6', source: '3', target: '6', label: 'false', style: { stroke: c.disk, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.disk }, labelStyle: { fill: c.disk, fontWeight: 600 } },
      { id: 'e4-5', source: '4', target: '5', label: 'backup', style: { stroke: c.backup, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.backup }, labelStyle: { fill: c.backup, fontWeight: 600 } },
      { id: 'e4-6', source: '4', target: '6', label: 'main', animated: true, style: { stroke: c.controller, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.controller }, labelStyle: { fill: c.controller, fontWeight: 600 } },
      { id: 'e6-7', source: '6', target: '7', animated: true, style: { stroke: c.controller, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.controller } },
      { id: 'e7-8', source: '7', target: '8', label: 'yes', animated: true, style: { stroke: c.processing, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.processing }, labelStyle: { fill: c.processing, fontWeight: 600 } },
      { id: 'e7-9', source: '7', target: '9', label: 'no', style: { stroke: c.disk, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.disk }, labelStyle: { fill: c.disk, fontWeight: 600 } },
      { id: 'e8-9', source: '8', target: '9', animated: true, style: { stroke: c.processing, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.processing } },
      { id: 'e8-13', source: '8', target: '13', label: 'error', style: { stroke: c.error, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.error }, labelStyle: { fill: c.error, fontWeight: 600 } },
      { id: 'e13-14', source: '13', target: '14', style: { stroke: c.fallback, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.fallback } },
      { id: 'e14-5', source: '14', target: '5', type: 'smoothstep', style: { stroke: c.fallback, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.fallback } },
      { id: 'e5-12', source: '5', target: '12', type: 'smoothstep', style: { stroke: c.fallback, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.fallback } },
      { id: 'e9-10', source: '9', target: '10', style: { stroke: c.memory, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.memory } },
      { id: 'e9-11', source: '9', target: '11', style: { stroke: c.disk, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.disk } },
      { id: 'e9-12', source: '9', target: '12', style: { stroke: c.cloud, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.cloud } },
      { id: 'e10-15', source: '10', target: '15', style: { stroke: c.success, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.success } },
      { id: 'e11-15', source: '11', target: '15', style: { stroke: c.success, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.success } },
      { id: 'e12-15', source: '12', target: '15', style: { stroke: c.success, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.success } },
    ];
  
    const cloudEdges: Edge[] = [
      { id: 'e12-c1', source: '12', target: 'c1', style: { stroke: c.cloud, strokeWidth: 2, strokeDasharray: '5,5' }, markerEnd: { type: MarkerType.ArrowClosed, color: c.cloud } },
      { id: 'ec1-2', source: 'c1', target: 'c2', animated: true, style: { stroke: c.storage, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.storage } },
      { id: 'ec2-3', source: 'c2', target: 'c3', animated: true, style: { stroke: c.controller, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.controller } },
      { id: 'ec3-4', source: 'c3', target: 'c4', style: { stroke: c.decision, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.decision } },
      { id: 'ec4-5', source: 'c4', target: 'c5', label: 'yes', style: { stroke: c.fallback, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.fallback }, labelStyle: { fill: c.fallback, fontWeight: 600 } },
      { id: 'ec4-6', source: 'c4', target: 'c6', label: 'no', style: { stroke: c.success, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.success }, labelStyle: { fill: c.success, fontWeight: 600 } },
      { id: 'ec5-6', source: 'c5', target: 'c6', style: { stroke: c.success, strokeWidth: 3 }, markerEnd: { type: MarkerType.ArrowClosed, color: c.success } },
    ];
  
    const nodes =  [...mainNodes, ...cloudNodes] ;
    const edges =  [...mainEdges, ...cloudEdges] ;

  return (
    <section id="npm-i" className="section py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(to bottom, #edf1f5  , #f8fafc, #ffff)' }}>
      <div className="container px-4" >
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Production Ready in <span className="text-gradient">30 Minutes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
            Skip weeks of development. Upfly provides everything you need for complete
            file handling in a single middleware.
          </p>

          {/* Installation Instructions */}
          <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 border border-blue-200 shadow-lg" >

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              {commands.map((cmd) => (
                <div key={cmd.type} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-blue-100 shadow-sm">
                  <div className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3">{cmd.type}</div>
                  <button
                    onClick={() => copyToClipboard(cmd.command, cmd.type)}
                    className={`w-full text-left text-xs md:text-sm px-3 md:px-4 py-2 md:py-3 rounded-lg transition-all duration-200 flex items-center gap-2 md:gap-3 font-mono ${
                      copiedCommand === cmd.type
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 text-gray-700 border border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <code className="flex-1 break-all">{cmd.command}</code>
                    {copiedCommand === cmd.type ? (
                      <Check size={16} className="md:w-[18px] md:h-[18px] text-white flex-shrink-0" />
                    ) : (
                      <Copy size={16} className="md:w-[18px] md:h-[18px] text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-xs md:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Note about multer:</strong>
                    <span className="text-gray-700">It's a peer dependency, so you have full control over its version. This prevents conflicts with any existing multer version in your project.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3" >
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Developer logs:</strong>
                    <span className="text-gray-700">Set <code className="bg-white/80 px-2 py-1 rounded text-xs font-mono" id='build'>'NODE_ENV=development'</code> in your .env file to print conversion details in your terminal.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Code Examples Section Header */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Implementation Examples</h3>
          <p className="text-base md:text-lg text-gray-600">Ready-to-use code for integrating Upfly into your applications</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8" >
          {codeExamples.map((example, index) => (
            <button
              key={index}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-200 text-sm md:text-base ${
                activeTab === index
                  ? 'bg-gradient-to-r from-[#F40009] via-[#E60008] to-[#C70008] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {example.title}
            </button>
          ))}
        </div>

        {/* Active Code Example */}
        <div className="card-elevated p-4 md:p-6 lg:p-8 mb-8 md:mb-12 lg:mb-16">
          <div className="text-center mb-4 md:mb-6">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{codeExamples[activeTab].title}</h4>
            <p className="text-sm md:text-base text-gray-600">{codeExamples[activeTab].description}</p>
          </div>

          {/* Cloud Provider Sub-tabs (only for Cloud Storage tab) */}
          {activeTab === 1 && codeExamples[1].cloudProviders && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {codeExamples[1].cloudProviders.map((provider, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    cloudProvider === index
                      ? 'bg-gradient-to-r from-[#F40009] via-[#E60008] to-[#C70008] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setCloudProvider(index)}
                >
                  {provider.name}
                </button>
              ))}
            </div>
          )}
          
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-300 border-b border-gray-400">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="ml-4 text-gray-600 text-sm font-mono">app.js</span>
            </div>
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
              {String(activeTab === 1 && codeExamples[1].cloudProviders
                ? codeExamples[1].cloudProviders[cloudProvider].code
                : codeExamples[activeTab].code)}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Feature Categories */}
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

             <div className="">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="heading-lg mb-6">How Upfly Works <span className="text-gradient">Under the Hood</span></h2>
          <p className="text-body max-w-3xl mx-auto mb-6">Complete pipeline architecture with stream-based processing, automatic fallback, and multi-cloud support.</p>
          {/* <button onClick={() => setShowCloudFlow(!showCloudFlow)} className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
            {showCloudFlow ? '← Hide' : 'Show'} Cloud Upload Details
          </button> */}
        </motion.div>

       <motion.div
  className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden 
             h-[500px] sm:h-[700px] md:h-[900px] mx-auto max-w-6xl"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <div
    className="relative w-full h-full scale-[0.85] sm:scale-100 flex items-center justify-center"
    style={{ pointerEvents: 'none' }}
    id="architecture"
  >
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      fitViewOptions={{ padding: 0.2, includeHiddenNodes: false }}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={false}
      zoomOnScroll={false}
      panOnScroll={false}
      zoomOnDoubleClick={false}
      panOnDrag={false}
      onWheel={(event) => event.stopPropagation()}
      className="react-flow-container"
      style={{ width: '100%', height: '100%' }}
    >
      <Background
        variant={BackgroundVariant.Dots}
        gap={20}
        size={1.5}
        color="#e2e8f0"
      />
    </ReactFlow>
  </div>
</motion.div>

        {/* Final CTA Section */}
            <motion.div 
                  className="bg-gradient-to-b  from-[#F40009] via-[#E60008] to-[#C70008] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 mt-6 md:mt-10 text-white relative overflow-hidden text-center"
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.3, delay: 0.3 }} 
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white opacity-5 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-black opacity-5 rounded-full -ml-32 md:-ml-48 -mb-32 md:-mb-48"></div>
                  
                  <div className="relative z-10 max-w-3xl  mx-auto">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                      Ready to Build Production-Ready File Uploads?
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-6 md:mb-8">
                      Join developers who've eliminated weeks of boilerplate with Upfly's complete file handling solution.
                    </p>
        
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <a
                        href="https://github.com/ramin-010/upfly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-2xl transition-all hover:scale-105 text-sm md:text-base"

                      ><Github size={18} className="md:w-5 md:h-5" />
                        Support on GitHub 
                        <ArrowRight size={18} className="md:w-5 md:h-5" />
                      </a>
                      <a
                        href="https://www.npmjs.com/package/upfly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all hover:scale-105 text-sm md:text-base"
                      >
                        View on npm
                        <ArrowRight size={18} className="md:w-5 md:h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
      </div>
      </div>
    </section>
  );
};

export default SolutionSection;
