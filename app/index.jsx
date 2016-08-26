var React = require('react'),
  ReactDOM = require('react-dom'),
  createStore = require('redux').createStore,
  Provider = require('react-redux').Provider,
  connect = require('react-redux').connect;
  
if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <div>Hello world</div>,
  document.getElementById('app')
);
