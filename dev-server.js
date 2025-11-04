// Simple dev server with live reload for static files
const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const chokidar = require('chokidar');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Inject live reload script into HTML responses
app.use((req, res, next) => {
  if (req.path.endsWith('.html')) {
    const filePath = path.join(__dirname, req.path);
    res.sendFile(filePath, {}, (err) => {
      if (!err) {
        // After sending file, inject script (handled by client)
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '03-container-spacing', 'index.html'));
});

// Watch for file changes and notify clients
chokidar.watch([path.join(__dirname, '**/*.html'), path.join(__dirname, 'assets/**/*')]).on('change', () => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('reload');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Dev server with live reload running at http://localhost:${PORT}`);
});
