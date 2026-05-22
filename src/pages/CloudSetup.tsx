import React from 'react';
import Header from '../components/Header-new';
import Footer from '../components/Footer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CloudSetup: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cloud Setup Guide</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Upfly supports direct uploads to Cloudinary, AWS S3, and Google Cloud Storage. You can configure different cloud providers for different fields in the same upload request.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cloudinary</h2>
            <p className="mb-4">Install the Cloudinary SDK:</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg mb-6">
              npm install cloudinary
            </SyntaxHighlighter>
            
            <p className="mb-4">Configuration:</p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
{`app.post('/upload',
  upflyUpload({
    fields: {
      avatar: {
        cloudStorage: true,
        cloudProvider: 'cloudinary',
        cloudConfig: {
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
          folder: 'user-uploads', // Optional
          secure: true // Default is true
        }
      }
    }
  }),
  (req, res) => res.json({ url: req.files.avatar[0].cloudUrl })
);`}
            </SyntaxHighlighter>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">AWS S3</h2>
            <p className="mb-4">Install the required AWS packages:</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg mb-6">
              npm install @aws-sdk/client-s3 @aws-sdk/lib-storage
            </SyntaxHighlighter>
            
            <p className="mb-4">Configuration:</p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
{`app.post('/upload',
  upflyUpload({
    fields: {
      image: {
        cloudStorage: true,
        cloudProvider: 's3', // or 'aws'
        cloudConfig: {
          region: process.env.AWS_REGION,
          bucket: process.env.AWS_BUCKET,
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          acl: 'public-read' // Optional: default is public-read
        }
      }
    }
  }),
  (req, res) => res.json({ url: req.files.image[0].cloudUrl })
);`}
            </SyntaxHighlighter>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google Cloud Storage (GCS)</h2>
            <p className="mb-4">Install the Google Cloud SDK:</p>
            <SyntaxHighlighter language="bash" style={vscDarkPlus} className="rounded-lg mb-6">
              npm install @google-cloud/storage
            </SyntaxHighlighter>
            
            <p className="mb-4">Configuration:</p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
{`app.post('/upload',
  upflyUpload({
    fields: {
      document: {
        cloudStorage: true,
        cloudProvider: 'gcs', // or 'google'
        cloudConfig: {
          bucket: process.env.GCS_BUCKET,
          keyFilename: './path/to/service-account.json',
          projectId: process.env.GCS_PROJECT_ID,
          public: true // Optional: default is true
        }
      }
    }
  }),
  (req, res) => res.json({ url: req.files.document[0].cloudUrl })
);`}
            </SyntaxHighlighter>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Validating Cloud Credentials</h2>
            <p className="mb-4">It's a good practice to validate your cloud configurations when your server starts:</p>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} className="rounded-lg">
{`const { validateAllCloudConfigs } = require('upfly/src/cloud');

const uploadConfig = {
  fields: {
    // ... your fields ...
  }
};

validateAllCloudConfigs(uploadConfig.fields)
  .then(() => console.log('✓ Cloud configs validated'))
  .catch(err => console.error('✗ Cloud config error:', err));`}
            </SyntaxHighlighter>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CloudSetup;
