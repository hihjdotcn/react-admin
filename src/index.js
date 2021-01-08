import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/Login'
import Home from './views/Home'
// import AppRouter from './Router';
import reportWebVitals from './reportWebVitals';

const Independent = () => {
  return (
    <div>This is independent page!</div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route: ''
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange')
  }

  render() {
    let Child
    switch (this.state.route) {
      case '/login': Child = Login; break;
      case '/independent': Child = Independent; break;
      default:       Child = Home
    }
    return (
      <div>
        {/* <ul>
          <li><a href="#/login">Login</a></li>
          <li><a href="#/independent">Independent</a></li>
          <li><a href="#/inbox">Home</a></li>
        </ul> */}
        <Child />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
