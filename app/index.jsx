var React = require('react');
var ReactDOM = require('react-dom');
var createStore = require('redux').createStore;
var combineReducers = require('redux').combineReducers;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var browserHistory = require('react-router').browserHistory;
var Provider = require('react-redux').Provider;
var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
var routerReducer = require('react-router-redux').routerReducer;

var App = require('./App').default;
var Home = require('./Home').default;
var User = require('./User').default;


let reducer = function(state = {}, action) {
  return state;
};

let store = createStore(
  combineReducers({
    main: reducer,
    routing: routerReducer
  }
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);
