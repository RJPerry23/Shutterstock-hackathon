import ContributorBar from './components/ContributorBar/ContributorBar';
import CreatorPage from './components/Dashboard/Dashboard';
import Nav from './components/Nav/Nav';
import './styles/App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { Component } from 'react';

class App extends Component{

  state = {
    animationClass: 'test'
}

//For background animation
constructor (props) {
    super(props);
    this.state = {
      animationClass: 'test'
    }
    this.animationState = this.animationState.bind(this);
  }
  
  animationState(){
    if(this.state.animationClass === 'test'){
      this.setState({
        animationClass: 'test paused'
      });
    }else{
      this.setState({
        animationClass: 'test'
      });
    }
  } 

  render() {
    return (
      <div className="App">
        <div className={this.state.animationClass}>
        <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path='/' exact component={Dashboard}/>
        </Switch>
        </BrowserRouter>
        </div>
      </div>
    );
  
  }
}

export default App;
