import React from 'react';
import Header from '../components/Header-new';
import Footer from '../components/Footer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ErrorHandling: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Error Handling & Reliability</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Upfly is designed with zero data loss in mind. Instead of crashing your application or silently dropping files when an image conversion or cloud upload fails, Upfly catches errors and relies on an automatic backup stream.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">The <code>safeFile</code> Feature</h2>
            <p className="mb-4">
              When you enable <code>safeFile: true</code>, Upfly duplicates the incoming file stream. One stream goes through your image processing and cloud pipeline, while the other serves as a backup.
            </p>
            <p className="mb-4">
              If the main pipeline fails (e.g., Sharp throws an error on a corrupt image, or S3 times out), Upfly automatically falls back to saving the original untouched file so you don't lose the user's data.
            </p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg mb-6">
{`app.post('/upload',
  upflyUpload({
    fields: { images: { format: 'webp' } },
    safeFile: true  // Enable backup fallback
  }),
  (req, res) => {
    // ...
  }
);`}
            </SyntaxHighlighter>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding <code>_metadata</code></h2>
            <p className="mb-4">
              Upfly adds a <code>_metadata</code> object to every processed file. This object tells you exactly what happened during processing, whether it succeeded, failed completely, or used the backup.
            </p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg mb-6">
{`_metadata: {
  isBackupFallback: boolean,    // true if backup was used
  isSkipped: boolean,           // true if totally failed
  isProcessed: boolean,         // true if successfully processed
  errors: {
    conversion?: string,        // Sharp error message
    cloudUpload?: string,       // Cloud provider error
    diskWrite?: string,         // Filesystem error
    message?: string            // General error
  }
}`}
            </SyntaxHighlighter>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handling Outcomes in Your Route</h2>
            <p className="mb-4">
              You should always check <code>_metadata</code> to know if you got the optimized file or the original backup:
            </p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
{`app.post('/upload',
  upflyUpload({
    fields: { image: { format: 'webp', cloudStorage: true, cloudProvider: 's3', cloudConfig: {...} } },
    safeFile: true
  }),
  (req, res) => {
    const file = req.files.image[0];
    
    // 1. Total Failure (e.g., unsupported format, network completely down)
    if (file._metadata?.isSkipped) {
      return res.status(400).json({ 
        error: 'Upload failed', 
        details: file._metadata.errors 
      });
    }
    
    // 2. Partial Failure -> Backup Used
    if (file._metadata?.isBackupFallback) {
      console.warn('Conversion or Cloud failed, using original file:', file._metadata.errors);
      // The file was saved successfully (but wasn't converted or uploaded to cloud if that failed)
      return res.json({ 
        url: file.cloudUrl || file.path, 
        warning: 'Original file kept due to processing error' 
      });
    }
    
    // 3. Success
    res.json({ url: file.cloudUrl });
  }
);`}
            </SyntaxHighlighter>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Error Scenarios</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Unsupported Format</h3>
            <p className="mb-2">If a user uploads a format Sharp doesn't support (like `.bmp`):</p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg mb-4">
{`file._metadata = {
  isSkipped: true,
  errors: { message: 'Unsupported image format: image/bmp' }
}`}
            </SyntaxHighlighter>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Corrupted Image</h3>
            <p className="mb-2">If a file is damaged, Sharp throws an error, but the original file is saved:</p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg mb-4">
{`file._metadata = {
  isBackupFallback: true,
  errors: { conversion: 'Input buffer has corrupt header' }
}`}
            </SyntaxHighlighter>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">Cloud Timeout</h3>
            <p className="mb-2">If the network times out during cloud upload, Upfly retries once with the backup stream automatically. If it still fails, it skips:</p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
{`file._metadata = {
  isSkipped: true,
  errors: { cloudUpload: 'Request timeout after 30s' }
}`}
            </SyntaxHighlighter>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorHandling;
