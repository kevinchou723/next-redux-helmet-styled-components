const nextRoutes = require('next-routes');

// eslint-disable-next-line no-multi-assign
const routes = module.exports = nextRoutes();
const {
  INDEX_PAGE,
  INDEX_PATH,
} = require('../constants/routes');


/*
  This example uses next-routes for dynamic routing,
  which lets you define parameterized,
  named routes with express-style parameters matching.

  This is where you would want to add the routes where it
  needs a dynamic parameter

  https://github.com/fridays/next-routes
  https://github.com/zeit/next.js/tree/master/examples/parameterized-routing
*/
routes.add(INDEX_PAGE, INDEX_PATH);
