import React from 'react';
import { motion } from 'framer-motion';
import ReactFlow, {
  type Node,
  type Edge,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const TechnicalFlowDiagramReactFlow: React.FC = () => {
  // Define nodes with positions
  const initialNodes: Node[] = [
    {
      id: '1',
      type: 'input',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-blue-600">upflyUpload()</div>
            <div className="text-xs text-gray-600">Express Middleware</div>
          </div>
        )
      },
      position: { x: 400, y: 0 },
      style: { 
        background: '#3b82f6', 
        color: 'white', 
        border: '2px solid #2563eb',
        borderRadius: '12px',
        padding: '16px',
        width: 200
      },
    },
    {
      id: '2',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-purple-600">CustomStorageEngine</div>
            <div className="text-xs text-gray-600">Multer Storage</div>
          </div>
        )
      },
      position: { x: 400, y: 100 },
      style: { 
        background: '#a855f7', 
        color: 'white', 
        border: '2px solid #9333ea',
        borderRadius: '12px',
        padding: '16px',
        width: 200
      },
    },
    {
      id: '3',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-yellow-600">safeFile Check</div>
            <div className="text-xs text-gray-600">Backup Decision</div>
          </div>
        )
      },
      position: { x: 400, y: 200 },
      style: { 
        background: '#eab308', 
        color: 'white', 
        border: '2px solid #ca8a04',
        borderRadius: '12px',
        padding: '16px',
        width: 200
      },
    },
    {
      id: '4',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-green-600">Tee Stream</div>
            <div className="text-xs text-gray-600">Split: main + backup</div>
          </div>
        )
      },
      position: { x: 150, y: 320 },
      style: { 
        background: '#22c55e', 
        color: 'white', 
        border: '2px solid #16a34a',
        borderRadius: '12px',
        padding: '16px',
        width: 180
      },
    },
    {
      id: '5',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-emerald-600">Backup Buffer/File</div>
            <div className="text-xs text-gray-600">Original stored</div>
          </div>
        )
      },
      position: { x: 50, y: 450 },
      style: { 
        background: '#10b981', 
        color: 'white', 
        border: '2px solid #059669',
        borderRadius: '12px',
        padding: '16px',
        width: 180
      },
    },
    {
      id: '6',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-indigo-600">HighwayController</div>
            <div className="text-xs text-gray-600">Transform Stream</div>
          </div>
        )
      },
      position: { x: 400, y: 320 },
      style: { 
        background: '#6366f1', 
        color: 'white', 
        border: '2px solid #4f46e5',
        borderRadius: '12px',
        padding: '16px',
        width: 200
      },
    },
    {
      id: '7',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-pink-600">Need Conversion?</div>
            <div className="text-xs text-gray-600">isImage && !keepOriginal</div>
          </div>
        )
      },
      position: { x: 400, y: 440 },
      style: { 
        background: '#ec4899', 
        color: 'white', 
        border: '2px solid #db2777',
        borderRadius: '12px',
        padding: '16px',
        width: 200
      },
    },
    {
      id: '8',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-purple-600">Sharp Pipeline</div>
            <div className="text-xs text-gray-600">Image optimization</div>
          </div>
        )
      },
      position: { x: 250, y: 560 },
      style: { 
        background: '#a855f7', 
        color: 'white', 
        border: '2px solid #9333ea',
        borderRadius: '12px',
        padding: '16px',
        width: 180
      },
    },
    {
      id: '9',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-cyan-600">Storage Router</div>
            <div className="text-xs text-gray-600">Destination decision</div>
          </div>
        )
      },
      position: { x: 400, y: 680 },
      style: { 
        background: '#06b6d4', 
        color: 'white', 
        border: '2px solid #0891b2',
        borderRadius: '12px',
        padding: '16px',
        width: 200
      },
    },
    {
      id: '10',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-blue-600">Memory Buffer</div>
            <div className="text-xs text-gray-600">output: memory</div>
          </div>
        )
      },
      position: { x: 150, y: 800 },
      style: { 
        background: '#3b82f6', 
        color: 'white', 
        border: '2px solid #2563eb',
        borderRadius: '12px',
        padding: '16px',
        width: 160
      },
    },
    {
      id: '11',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-gray-600">Disk Storage</div>
            <div className="text-xs text-gray-300">output: disk</div>
          </div>
        )
      },
      position: { x: 400, y: 800 },
      style: { 
        background: '#6b7280', 
        color: 'white', 
        border: '2px solid #4b5563',
        borderRadius: '12px',
        padding: '16px',
        width: 160
      },
    },
    {
      id: '12',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-sky-600">Cloud Upload</div>
            <div className="text-xs text-gray-600">S3/Cloudinary/GCS</div>
          </div>
        )
      },
      position: { x: 650, y: 800 },
      style: { 
        background: '#0ea5e9', 
        color: 'white', 
        border: '2px solid #0284c7',
        borderRadius: '12px',
        padding: '16px',
        width: 160
      },
    },
    {
      id: '13',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-red-600">Error Handler</div>
            <div className="text-xs text-gray-600">Catch failures</div>
          </div>
        )
      },
      position: { x: 700, y: 560 },
      style: { 
        background: '#ef4444', 
        color: 'white', 
        border: '2px solid #dc2626',
        borderRadius: '12px',
        padding: '16px',
        width: 160
      },
    },
    {
      id: '14',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-orange-600">Backup Fallback</div>
            <div className="text-xs text-gray-600">Use original file</div>
          </div>
        )
      },
      position: { x: 700, y: 680 },
      style: { 
        background: '#f97316', 
        color: 'white', 
        border: '2px solid #ea580c',
        borderRadius: '12px',
        padding: '16px',
        width: 160
      },
    },
    {
      id: '15',
      type: 'output',
      data: { 
        label: (
          <div className="text-center">
            <div className="font-bold text-green-600">Response</div>
            <div className="text-xs text-gray-600">req.files object</div>
          </div>
        )
      },
      position: { x: 400, y: 920 },
      style: { 
        background: '#22c55e', 
        color: 'white', 
        border: '2px solid #16a34a',
        borderRadius: '12px',
        padding: '16px',
        width: 200
      },
    },
  ];

  // Define edges (connections)
  const initialEdges: Edge[] = [
    { 
      id: 'e1-2', 
      source: '1', 
      target: '2', 
      label: 'multer.any()',
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' }
    },
    { 
      id: 'e2-3', 
      source: '2', 
      target: '3', 
      label: 'file.stream',
      animated: true,
      style: { stroke: '#a855f7', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' }
    },
    { 
      id: 'e3-4', 
      source: '3', 
      target: '4', 
      label: 'safeFile: true',
      animated: true,
      style: { stroke: '#22c55e', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' }
    },
    { 
      id: 'e3-6', 
      source: '3', 
      target: '6', 
      label: 'safeFile: false',
      style: { stroke: '#6b7280', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' }
    },
    { 
      id: 'e4-5', 
      source: '4', 
      target: '5', 
      label: 'backupStream',
      style: { stroke: '#10b981', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' }
    },
    { 
      id: 'e4-6', 
      source: '4', 
      target: '6', 
      label: 'mainStream',
      animated: true,
      style: { stroke: '#6366f1', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' }
    },
    { 
      id: 'e6-7', 
      source: '6', 
      target: '7', 
      label: 'pipeline',
      animated: true,
      style: { stroke: '#6366f1', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' }
    },
    { 
      id: 'e7-8', 
      source: '7', 
      target: '8', 
      label: 'yes',
      animated: true,
      style: { stroke: '#a855f7', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' }
    },
    { 
      id: 'e7-9', 
      source: '7', 
      target: '9', 
      label: 'no',
      style: { stroke: '#6b7280', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' }
    },
    { 
      id: 'e8-9', 
      source: '8', 
      target: '9', 
      label: 'converted',
      animated: true,
      style: { stroke: '#a855f7', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' }
    },
    { 
      id: 'e8-13', 
      source: '8', 
      target: '13', 
      label: 'error',
      style: { stroke: '#ef4444', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' }
    },
    { 
      id: 'e13-14', 
      source: '13', 
      target: '14', 
      label: 'activate fallback',
      style: { stroke: '#f97316', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#f97316' }
    },
    { 
      id: 'e14-5', 
      source: '14', 
      target: '5', 
      label: 'load backup',
      type: 'smoothstep',
      style: { stroke: '#f97316', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#f97316' }
    },
    { 
      id: 'e5-12', 
      source: '5', 
      target: '12', 
      label: 'upload original',
      type: 'smoothstep',
      style: { stroke: '#f97316', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#f97316' }
    },
    { 
      id: 'e9-10', 
      source: '9', 
      target: '10', 
      label: 'memory',
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' }
    },
    { 
      id: 'e9-11', 
      source: '9', 
      target: '11', 
      label: 'disk',
      style: { stroke: '#6b7280', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' }
    },
    { 
      id: 'e9-12', 
      source: '9', 
      target: '12', 
      label: 'cloud',
      style: { stroke: '#0ea5e9', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#0ea5e9' }
    },
    { 
      id: 'e10-15', 
      source: '10', 
      target: '15', 
      style: { stroke: '#22c55e', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' }
    },
    { 
      id: 'e11-15', 
      source: '11', 
      target: '15', 
      style: { stroke: '#22c55e', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' }
    },
    { 
      id: 'e12-15', 
      source: '12', 
      target: '15', 
      style: { stroke: '#22c55e', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' }
    },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <section id="architecture" className="section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-6">
            How Upfly Works <span className="text-gradient">Under the Hood</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto mb-4">
            Interactive flow diagram showing the complete pipeline architecture with stream-based processing, 
            automatic fallback, and multi-cloud support.
          </p>
          <div className="text-sm text-gray-600">
            💡 Drag nodes to explore • Zoom with mouse wheel • Pan by dragging background
          </div>
        </motion.div>

        {/* React Flow Diagram */}
        <motion.div
          className="bg-white rounded-2xl border-2 border-gray-200 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ height: '1000px' }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            fitView
            attributionPosition="bottom-left"
          >
            <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#e5e7eb" />
            <Controls />
          </ReactFlow>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="mt-12 bg-white rounded-xl border border-gray-200 shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Flow Legend</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Main Pipeline</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span>Entry & Memory storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span>Processing & Sharp</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-indigo-500 rounded"></div>
                  <span>Controller & routing</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Backup System</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>Tee stream & backup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>Error detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span>Fallback activation</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Storage Options</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-500 rounded"></div>
                  <span>Disk storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-sky-500 rounded"></div>
                  <span>Cloud upload</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                  <span>Router & decision</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-2">Stream-Based Architecture</h4>
            <p className="text-sm text-white/80">
              Non-blocking I/O with Transform streams and pipeline() for memory-efficient processing
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-2">Automatic Fallback</h4>
            <p className="text-sm text-white/80">
              Tee stream pattern creates backup that activates on conversion errors - zero data loss
            </p>
          </div>
          <div className="bg-gradient-to-br from-sky-500 to-cyan-600 text-white p-6 rounded-xl">
            <h4 className="font-bold text-lg mb-2">Multi-Cloud Support</h4>
            <p className="text-sm text-white/80">
              Provider-agnostic API with adapters for AWS S3, Cloudinary, and Google Cloud Storage
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalFlowDiagramReactFlow;
