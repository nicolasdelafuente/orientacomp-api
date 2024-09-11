const server = require('../src/server.js');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
