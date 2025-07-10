console.log('Starting JSON Server...');
console.log(require.resolve('json-server'));
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/test', (req, res) => {
  res.json({ converted: "アイウエオ" });
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});