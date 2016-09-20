var React = require('react');
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}