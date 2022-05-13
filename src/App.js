import Nav from './components/Nav/Nav';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { Component } from 'react';
import Home from './components/Home/Home';

class App extends Component{



  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/login' exact component={Home}/>
          <Route path='/:page' component={Dashboard}/>
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
