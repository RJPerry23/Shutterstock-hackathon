import Nav from './components/Nav/Nav';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { Component } from 'react';

class App extends Component{



  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Dashboard}/>
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
