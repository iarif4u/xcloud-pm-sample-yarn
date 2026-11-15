const http = require('http');
const ms = require('ms');
const port = process.env.PORT || 3000;
const built = require('fs').existsSync(__dirname + '/dist/BUILD_OK');
http.createServer((req, res) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify({ app: 'xcloud-pm-sample-yarn', manager: 'yarn 1 (classic)', built, node: process.version, ms: ms('1h'), started_via: process.env.npm_lifecycle_event || process.env.npm_lifecycle_script || null }));
}).listen(port, '127.0.0.1', () => console.log('xcloud-pm-sample-yarn listening on ' + port));
