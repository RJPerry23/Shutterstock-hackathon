import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { Component } from 'react';
import LoggedIn from './components/LoggedIn/LoggedIn';
// import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path='/' component={Home} /> */}
            <Route exact path='/login' component={LoggedIn} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/dashboard/:page' component={Dashboard} />
            {/* <Route path='/' component={Dashboard}/>
          <Route path='/' component={Dashboard}/>
          <Route path='/' component={Dashboard}/>
          <Route path='/' component={Dashboard}/>
          <Route path='/' component={Dashboard}/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
