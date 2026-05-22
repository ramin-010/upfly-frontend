import React from 'react';
import Header from '../components/Header-new';
import Footer from '../components/Footer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ApiReference: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-display">API Reference</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Complete technical documentation for the functions, options, and types exported by the Upfly npm package.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Middlewares</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2"><code>upflyUpload(options)</code></h3>
            <p className="mb-4">
              Integrates file uploading, processing, and multi-cloud storage into a single Express middleware. Intercepts incoming <code>multipart/form-data</code> requests.
            </p>
            
            <h4 className="text-lg font-medium text-gray-800 mb-2">Options:</h4>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Property</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Default</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">fields</td>
                    <td className="px-4 py-2 font-mono text-purple-600">Record&lt;string, FieldConfig&gt;</td>
                    <td className="px-4 py-2 text-gray-500">—</td>
                    <td className="px-4 py-2 text-gray-600">Upload configurations keyed by HTML form field name. <strong>Required.</strong></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">outputDir</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 font-mono text-gray-500">'./uploads'</td>
                    <td className="px-4 py-2 text-gray-600">Global fallback directory for disk outputs. Field-specific paths override this.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">limit</td>
                    <td className="px-4 py-2 font-mono text-purple-600">number</td>
                    <td className="px-4 py-2 font-mono text-gray-500">10485760 (10MB)</td>
                    <td className="px-4 py-2 text-gray-600">Maximum file size in bytes.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">safeFile</td>
                    <td className="px-4 py-2 font-mono text-purple-600">boolean</td>
                    <td className="px-4 py-2 font-mono text-gray-500">false</td>
                    <td className="px-4 py-2 text-gray-600">Enable automatic backup stream for error fallback.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-2"><code>upflyConvert(options)</code></h3>
            <p className="mb-4">
              Post-processing middleware for image conversion and optimization. Run this after standard Multer parser middlewares (which must use <code>memoryStorage()</code>).
            </p>
            
            <h4 className="text-lg font-medium text-gray-800 mb-2">Options:</h4>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Property</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Default</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">fields</td>
                    <td className="px-4 py-2 font-mono text-purple-600">Record&lt;string, FieldConfig&gt;</td>
                    <td className="px-4 py-2 text-gray-500">—</td>
                    <td className="px-4 py-2 text-gray-600">Field-level processing configurations. <strong>Required.</strong></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">outputDir</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 font-mono text-gray-500">'./uploads'</td>
                    <td className="px-4 py-2 text-gray-600">Global fallback directory for disk outputs.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">safeFile</td>
                    <td className="px-4 py-2 font-mono text-purple-600">boolean</td>
                    <td className="px-4 py-2 font-mono text-gray-500">false</td>
                    <td className="px-4 py-2 text-gray-600">Enable automatic backup stream fallback.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 italic mt-2">
              Note: upflyConvert only supports memory or disk storage outputs. Direct cloud streaming is not supported.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Field Configuration</h2>
            <p className="mb-4">
              The <code>FieldConfig</code> object defines how files uploaded under a specific field should be handled.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Property</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Default</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">output</td>
                    <td className="px-4 py-2 font-mono text-purple-600">'memory' | 'disk'</td>
                    <td className="px-4 py-2 font-mono text-gray-500">'memory'</td>
                    <td className="px-4 py-2 text-gray-600">Where the processed file contents will be stored.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">outputDir</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 text-gray-500">—</td>
                    <td className="px-4 py-2 text-gray-600">Field-specific disk destination (overrides global <code>outputDir</code>).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">format</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 font-mono text-gray-500">'webp'</td>
                    <td className="px-4 py-2 text-gray-600">
                      Target format for image conversions. Supported: <code>webp</code>, <code>avif</code>, <code>jpeg</code>, <code>png</code>, <code>tiff</code>, <code>gif</code>, <code>heif</code>.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">quality</td>
                    <td className="px-4 py-2 font-mono text-purple-600">number</td>
                    <td className="px-4 py-2 font-mono text-gray-500">80</td>
                    <td className="px-4 py-2 text-gray-600">Compression quality, integer from 1 to 100.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">keepOriginal</td>
                    <td className="px-4 py-2 font-mono text-purple-600">boolean</td>
                    <td className="px-4 py-2 font-mono text-gray-500">false</td>
                    <td className="px-4 py-2 text-gray-600">Skip format conversion entirely. Mandatory for non-image files (documents, archives, etc.).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">cloudStorage</td>
                    <td className="px-4 py-2 font-mono text-purple-600">boolean</td>
                    <td className="px-4 py-2 font-mono text-gray-500">false</td>
                    <td className="px-4 py-2 text-gray-600">If true, uploads the processed file to cloud storage.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">cloudProvider</td>
                    <td className="px-4 py-2 font-mono text-purple-600">'cloudinary' | 's3' | 'gcs'</td>
                    <td className="px-4 py-2 text-gray-500">—</td>
                    <td className="px-4 py-2 text-gray-600">
                      Target cloud provider. Aliases: <code>aws</code> for S3, <code>google</code> for GCS. Required if <code>cloudStorage: true</code>.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">cloudConfig</td>
                    <td className="px-4 py-2 font-mono text-purple-600">object</td>
                    <td className="px-4 py-2 text-gray-500">—</td>
                    <td className="px-4 py-2 text-gray-600">
                      Credentials for the cloud provider. See <a href="/cloud-setup">Cloud Setup Guide</a>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">File Result Schema (<code>UpflyFile</code>)</h2>
            <p className="mb-4">
              Upon successful upload, elements in <code>req.files[fieldname]</code> contain the following properties:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Property</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">fieldname</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 text-gray-600">HTML form field name.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">originalname</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 text-gray-600">Name of the file uploaded by the client.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">mimetype</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 text-gray-600">MIME type of the processed output.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">size</td>
                    <td className="px-4 py-2 font-mono text-purple-600">number</td>
                    <td className="px-4 py-2 text-gray-600">Final file size in bytes.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">buffer</td>
                    <td className="px-4 py-2 font-mono text-purple-600">Buffer</td>
                    <td className="px-4 py-2 text-gray-600">Binary file buffer (only if <code>output: 'memory'</code>).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">path</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 text-gray-600">Absolute path to disk destination (only if <code>output: 'disk'</code>).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">cloudUrl</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 text-gray-600">Public CDN/Storage URL (only if <code>cloudStorage: true</code>).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">cloudPublicId</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 text-gray-600">Cloud asset unique identifier.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">cloudProvider</td>
                    <td className="px-4 py-2 font-mono text-purple-600">string</td>
                    <td className="px-4 py-2 text-gray-600">Name of the cloud provider used.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-blue-600">_metadata</td>
                    <td className="px-4 py-2 font-mono text-purple-600">object</td>
                    <td className="px-4 py-2 text-gray-600">Reliability, errors, and backup tracking. See <a href="/error-handling">Error Handling Guide</a>.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">TypeScript Configuration</h2>
            <p className="mb-4">
              Upfly includes bundled TypeScript definitions. By utilizing union typing, cloud configurations automatically trigger strict type checks and autocompletes once a <code>cloudProvider</code> is declared:
            </p>
            <SyntaxHighlighter language="typescript" style={vscDarkPlus} className="rounded-lg mb-6">
{`import { upflyUpload, UpflyOptions } from 'upfly';

const config: UpflyOptions = {
  fields: {
    avatar: {
      cloudStorage: true,
      cloudProvider: 'cloudinary', // 1. Set the provider first
      cloudConfig: {               // 2. Autocomplete suggestions will match Cloudinary's schema
        cloud_name: 'my-cloud',
        api_key: '1234567890',
        api_secret: '...'
      }
    }
  }
};`}
            </SyntaxHighlighter>
          </section>

          <div className="flex justify-between items-center border-t border-gray-100 pt-8 mt-12">
            <a href="/error-handling" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              &larr; Error Handling Guide
            </a>
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Back to Home &rarr;
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApiReference;
