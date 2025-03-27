
#!/usr/bin/env node

import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildProject() {
  console.log('Building the project...');
  
  try {
    // Run the Vite build
    await build({
      root: __dirname,
      base: './',
      build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: true,
        sourcemap: false,
        assetsInlineLimit: 0, // Don't inline any assets as base64
      },
    });
    
    console.log('Build completed successfully!');
    
    // Ensure video file is properly copied
    try {
      const videoExists = await fs.access(resolve(__dirname, 'dist', 'background-nature.mp4'))
        .then(() => true)
        .catch(() => false);
      
      if (!videoExists) {
        console.log('Manually copying background video...');
        await fs.copyFile(
          resolve(__dirname, 'public', 'background-nature.mp4'),
          resolve(__dirname, 'dist', 'background-nature.mp4')
        );
      }
    } catch (err) {
      console.warn('Video file check/copy failed:', err);
    }
    
    // Create a simple server file for deployment environments
    await fs.writeFile(
      resolve(__dirname, 'dist', 'server.js'),
      `
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable compression
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Handle SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`
    );
    
    // Create a package.json in the dist folder for deployment
    await fs.writeFile(
      resolve(__dirname, 'dist', 'package.json'),
      JSON.stringify({
        name: 'eco-logica-brasil',
        version: '1.0.0',
        main: 'server.js',
        type: 'commonjs',
        dependencies: {
          express: '^4.18.2',
          compression: '^1.7.4'
        },
        scripts: {
          start: 'node server.js'
        }
      }, null, 2)
    );
    
    console.log('Deployment files created successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildProject();
