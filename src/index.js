import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './views/Login'
import Home from './views/Home'
import Whoops404 from './views/whoops404'
// import AppRouter from './Router';
import reportWebVitals from './reportWebVitals'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
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
      case '/index': Child = Home; break;
      default:       Child = Whoops404
    }
    return (
      <Child />
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
