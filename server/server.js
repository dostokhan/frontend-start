const express = require('express');
const compression = require('compression');
const next = require('next');
// const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

const routes = require('./routes');

const app = next({ dev });
const handler = routes.getRequestHandler(app);

// const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express();
  if (process.env.NODE_ENV === 'production') {
    server.use(compression());
  }

  server.use(handler).listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost :${process.env.PORT}`);
  });

  // server.get('/note/:slug', (req, res) => {
  //   const params = { slug: req.params.slug };
  //   // console.log(params);
  //   return app.render(req, res, '/note/single', params);
  // });

  // server.get('*', (req, res) => {
  //   const { query, pathname } = parse(req.url, true);

  //   const route = routes[pathname];
  //   console.log(`pathname: ${pathname}`);
  //   console.log('query: ', query);

  //   if (route) {
  //     console.log('IN SERVER ROOT ROUTE');
  //     // console.log(`pathname: ${pathname}`);
  //     // console.log(`query: ${query}`);
  //     console.log(`Page: ${route.page}`);
  //     return app.render(req, res, route.page, route.query);
  //   }
  //   return handle(req, res);
  // });

  // server.listen(process.env.PORT, (err) => {
  //   if (err) throw err;
  //   console.log(`> Ready on http://localhost :${process.env.PORT}`);
  // });
});
