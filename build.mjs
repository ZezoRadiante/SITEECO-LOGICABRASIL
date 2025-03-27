
#!/usr/bin/env node

import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs/promises';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function copyPublicFiles() {
  console.log('Copying public files to dist...');
  
  try {
    // Obter todos os arquivos da pasta public
    const publicDir = resolve(__dirname, 'public');
    const files = await fs.readdir(publicDir, { recursive: true });
    
    for (const file of files) {
      const srcPath = resolve(publicDir, file);
      const stat = await fs.stat(srcPath);
      
      // Pular diretórios
      if (stat.isDirectory()) continue;
      
      const destPath = resolve(__dirname, 'dist', file);
      
      // Certificar-se de que o diretório de destino exista
      await fs.mkdir(path.dirname(destPath), { recursive: true }).catch(() => {});
      
      // Copiar o arquivo
      await fs.copyFile(srcPath, destPath);
      console.log(`Copied: ${file}`);
    }
    
    console.log('All public files copied successfully!');
  } catch (err) {
    console.error('Failed to copy public files:', err);
  }
}

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
    
    // Copiar todos os arquivos da pasta public
    await copyPublicFiles();
    
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
    
    // Create a Netlify redirect file for SPA routing
    await fs.writeFile(
      resolve(__dirname, 'dist', '_redirects'),
      `/*    /index.html   200`
    );
    
    console.log('Deployment files created successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildProject();
