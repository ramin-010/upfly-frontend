import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ReactFlow, {
  type Node,
  type Edge,
  Background,
  BackgroundVariant,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const UpflyFlowDiagram: React.FC = () => {

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
    <section id="architecture" className="section" style={{ background: 'linear-gradient(to bottom right, #faf5ff, #ffffff, #f0f9ff)' }}>
      <div className="container">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="heading-lg mb-6">How Upfly Works <span className="text-gradient">Under the Hood</span></h2>
          <p className="text-body max-w-3xl mx-auto mb-6">Complete pipeline architecture with stream-based processing, automatic fallback, and multi-cloud support.</p>
          {/* <button onClick={() => setShowCloudFlow(!showCloudFlow)} className="px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
            {showCloudFlow ? '← Hide' : 'Show'} Cloud Upload Details
          </button> */}
        </motion.div>

        <motion.div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} style={{ height: '950px' }}>
          <div className="relative w-full h-full" style={{ pointerEvents: 'none' }}>
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
        </motion.div>

        {/* Final CTA Section */}
             <motion.div 
                  className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 mt-10 text-white relative overflow-hidden text-center"
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

export default UpflyFlowDiagram;
