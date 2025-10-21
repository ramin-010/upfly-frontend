import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Zap, Shield, Cloud, ArrowRight } from 'lucide-react';
import ReactFlow, {
  type Node,
  type Edge,
  Background,
  BackgroundVariant,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const ProductionReadySection: React.FC = () => {
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

  // Professional color palette for flow diagram
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
    { id: '12', data: { label: <div className="text-center"><div className="font-bold">Cloud Upload</div><div className="text-xs opacity-90">Multi-provider</div></div> }, position: { x: 680, y: 710 }, draggable: false, style: { ...nodeStyle(c.cloud), width: 160 } },
    { id: '13', data: { label: <div className="text-center"><div className="font-bold">Error Handler</div><div className="text-xs opacity-90">Catch failures</div></div> }, position: { x: 720, y: 490 }, draggable: false, style: { ...nodeStyle(c.error), width: 170 } },
    { id: '14', data: { label: <div className="text-center"><div className="font-bold">Fallback</div><div className="text-xs opacity-90">Use original</div></div> }, position: { x: 720, y: 600 }, draggable: false, style: { ...nodeStyle(c.fallback), width: 170 } },
    { id: '15', type: 'output', data: { label: <div className="text-center"><div className="font-bold">Response</div><div className="text-xs opacity-90">req.files</div></div> }, position: { x: 450, y: 820 }, draggable: false, style: { ...nodeStyle(c.success), width: 200 } },
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

  const nodes = mainNodes;
  const edges = mainEdges;

  return (
    <section  className="section" style={{ background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff, #eff6ff)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          
        >
          <h2 className="heading-lg mb-6">
            Production Ready in <span className="text-gradient">30 Minutes</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto mb-8">
            Skip weeks of development. Upfly provides everything you need for complete
            file handling in a single middleware.
          </p>

          {/* Installation Instructions */}
          <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl p-8 mb-8 border border-blue-200 shadow-lg" >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">🚀 Get Started in Seconds</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-8" >
              {commands.map((cmd) => (
                <div key={cmd.type} className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-blue-100 shadow-sm">
                  <div className="text-sm font-semibold text-gray-700 mb-3">{cmd.type}</div>
                  <button
                    onClick={() => copyToClipboard(cmd.command, cmd.type)}
                    className={`w-full text-left text-sm px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 font-mono ${
                      copiedCommand === cmd.type
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 text-gray-700 border border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <code className="flex-1">{cmd.command}</code>
                    {copiedCommand === cmd.type ? (
                      <Check size={18} className="text-white" />
                    ) : (
                      <Copy size={18} className="text-gray-500" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Note about multer:</strong>
                    <span className="text-gray-700">It's a peer dependency, so you have full control over its version. This prevents conflicts with any existing multer version in your project.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Developer logs:</strong>
                    <span className="text-gray-700">Set <code className="bg-white/80 px-2 py-1 rounded text-xs font-mono">'NODE_ENV=development'</code> in your .env file to print conversion details in your terminal.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architecture Flow Diagram */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Upfly Works <span className="text-gradient">Under the Hood</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete pipeline architecture with stream-based processing, automatic fallback, and multi-cloud support.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden" style={{ height: '700px' }}>
            <div className="relative w-full h-full">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
                zoomOnScroll={false}
                panOnScroll={false}
                zoomOnDoubleClick={false}
                panOnDrag={false}
                onWheel={(event) => event.stopPropagation()}
                className="react-flow-container"
              >
                <Background variant={BackgroundVariant.Dots} gap={20} size={1.5} color="#e2e8f0" />
              </ReactFlow>
            </div>
          </div>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-blue-100 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Stream-Based I/O</h4>
            <p className="text-gray-600">Non-blocking architecture handles large files (7MB+) without crashing your server or blocking the event loop.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-blue-100 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Shield className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Auto Fallback</h4>
            <p className="text-gray-600">Tee stream pattern creates backup that activates on errors - zero data loss guaranteed.</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-blue-100 shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Cloud className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Multi-Cloud Ready</h4>
            <p className="text-gray-600">Provider-agnostic API with adapters for S3, Cloudinary, and GCS. Switch providers in seconds.</p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.6 }} 
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black opacity-5 rounded-full -ml-48 -mb-48"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Build Production-Ready File Uploads?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join developers who've eliminated weeks of boilerplate with Upfly's complete file handling solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('build')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-2xl transition-all hover:scale-105"
           
              >
                Start Building Now
                <ArrowRight size={20} />
              </button>
              <a
                href="https://www.npmjs.com/package/upfly"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all hover:scale-105"
              >
                View on npm
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionReadySection;
