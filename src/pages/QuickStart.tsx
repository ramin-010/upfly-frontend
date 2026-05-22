import React from 'react';
import Header from '../components/Header-new';
import Footer from '../components/Footer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const QuickStart: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-display">Quick Start Guide</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Get Upfly up and running in your Express application in under 5 minutes. Learn how to install, configure field-level uploading, optimize images automatically, and verify the output.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Installation</h2>
            <p className="mb-4">
              Upfly requires <strong>Express</strong> and uses <strong>Multer</strong> as a peer dependency. Install them together:
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg mb-6">
              npm install upfly multer
            </SyntaxHighlighter>
            <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
              <p className="text-sm text-blue-900 font-medium my-0">
                <strong>Prerequisites:</strong> Node.js &gt;= 18.0.0. If you plan to upload to cloud storage, you will also need to install the corresponding cloud provider package (e.g., <code>cloudinary</code>, <code>@aws-sdk/client-s3</code>, or <code>@google-cloud/storage</code>).
              </p>
            </blockquote>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Setup Express & Middleware</h2>
            <p className="mb-4">
              Import <code>upflyUpload</code> and apply it as middleware on your upload route. The following example configures two fields: an optimized <code>avatar</code> stored in memory, and raw <code>documents</code> stored on disk.
            </p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg mb-6">
{`const express = require('express');
const { upflyUpload } = require('upfly');

const app = express();

app.post('/api/upload',
  upflyUpload({
    fields: {
      // 1. Convert avatars to optimized WebP at 80% quality
      avatar: {
        format: 'webp',
        quality: 80,
        output: 'memory'
      },
      // 2. Keep original documents as-is, saving directly to disk
      documents: {
        output: 'disk',
        keepOriginal: true
      }
    },
    outputDir: './uploads',      // Global fallback folder for disk files
    limit: 10 * 1024 * 1024,      // 10 MB total upload limit
    safeFile: true                // Automatically fallback if processing fails
  }),
  (req, res) => {
    // Files are available on req.files
    res.json({
      success: true,
      files: {
        avatar: req.files.avatar,
        documents: req.files.documents
      }
    });
  }
);

app.listen(3000, () => console.log('Server running on port 3000'));`}
            </SyntaxHighlighter>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Accessing Uploaded Files</h2>
            <p className="mb-4">
              Upfly appends standard file information along with optimization metadata to the objects in <code>req.files</code>:
            </p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg mb-6">
{`// Example handler:
(req, res) => {
  const avatarFile = req.files.avatar[0];
  
  console.log('Original Name:', avatarFile.originalname);
  console.log('New Size (WebP):', avatarFile.size);
  
  if (avatarFile.buffer) {
    // Process the buffer (e.g. save to database or stream somewhere)
    console.log('Buffer bytes:', avatarFile.buffer.length);
  }
  
  // Access backup/fallback information
  if (avatarFile._metadata.isBackupFallback) {
    console.warn('Image optimization failed, fallback to original original file');
  }
}`}
            </SyntaxHighlighter>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Testing Your API</h2>
            <p className="mb-4">
              Test your newly created endpoint using <code>curl</code> from your terminal:
            </p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg mb-6">
{`curl -X POST \\
  -F "avatar=@my-photo.jpg" \\
  -F "documents=@resume.pdf" \\
  http://localhost:3000/api/upload`}
            </SyntaxHighlighter>
            <p className="mb-4">
              Your server will respond with the processed files. Note that <code>my-photo.jpg</code> has been transformed into a lightweight WebP buffer, and <code>resume.pdf</code> has been written to the <code>./uploads</code> folder.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative: Conversion-Only Mode</h2>
            <p className="mb-4">
              If you already have a fully configured Multer setup and don't want to replace its upload logic, you can use <code>upflyConvert</code>. This middleware takes files already parsed into memory by Multer and processes them:
            </p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg mb-6">
{`const multer = require('multer');
const { upflyConvert } = require('upfly');

const upload = multer({ storage: multer.memoryStorage() });

// Chain upflyConvert after multer upload
app.post('/api/convert',
  upload.fields([{ name: 'gallery', maxCount: 5 }]),
  upflyConvert({
    fields: {
      gallery: { format: 'avif', quality: 75, output: 'disk' }
    },
    outputDir: './optimized-gallery'
  }),
  (req, res) => {
    res.json({ files: req.files.gallery });
  }
);`}
            </SyntaxHighlighter>
            <blockquote className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-6">
              <p className="text-sm text-yellow-900 font-medium my-0">
                <strong>Note:</strong> <code>upflyConvert</code> is optimized for post-processing files that are already in memory. It supports memory and disk output, but does not support direct cloud streaming. For direct multi-cloud streaming, use <code>upflyUpload</code>.
              </p>
            </blockquote>
          </section>

          <div className="flex justify-between items-center border-t border-gray-100 pt-8 mt-12">
            <a href="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              &larr; Back to Home
            </a>
            <a href="/cloud-setup" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              Cloud Setup Guide &rarr;
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuickStart;
