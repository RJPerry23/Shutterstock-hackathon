import './Dashboard.scss'
import React, { Component } from 'react';
import ContributorBar from '../ContributorBar/ContributorBar';
import Search from '../../images/search.svg'
import Stats from '../../images/stats.png'
import BarGraph from '../../images/bar-graph.png'
import Portfolio from '../../images/Portfolio.png'
import Trending from '../../images/Trending.png'
import Insights from '../../images/Insights.png'
import Notifications from '../../images/notifications.svg'
import Menu from '../../images/Menu.svg'
import MenuDark from '../../images/Menu-dark.svg'
import NotificationsDark from '../../images/Notifications-dark.svg'
import Share from '../../images/share.svg'
import ShareDark from '../../images/share-dark.svg'


class Dashboard extends Component{
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
            <div className='below-nav'>
                <ContributorBar
                location={this.props.match.params.page}/>
                <div className={this.state.animationClass}>

                    {this.state.animationClass === "test"? 
                    <button className='login__bottom--button'
                    onClick={this.animationState}>
                    Normal Mode
                    </button> :
                    <button className='login__bottom--button'
                    onClick={this.animationState}>
                    Color Mode </button>}

                <div className='dashboard'>
                    <div className='dashboard__top'>
                        <h2 className={this.state.animationClass === "test"? 'dashboard__top--heading' : 'dashboard__top--heading--alternate'}>
                        {this.props.match.params.page?
                        this.props.match.params.page : 
                        "Overview"}</h2>
                        <img src={Search} className='dashboard__top--icon' alt='search'></img>
                        <input 
                        type="text" 
                        className='dashboard__top--search'
                        placeholder='Search...'></input>
                        <div className='dashboard__top--corner'>
                          <div className='dashboard__top--corner--icons'>
                          <img src={this.state.animationClass === "test"? Notifications : NotificationsDark} className='dashboard__top--corner--icons--notifications' alt='notifications'/>
                          <img src={this.state.animationClass === "test"? Share : ShareDark} className='dashboard__top--corner--icons--share' alt='share'/>
                          <img src={this.state.animationClass === "test"? Menu : MenuDark} className='dashboard__top--corner--icons--menu' alt='menu'/>
                          </div>
                          <button className='dashboard__top--corner--button'>Upload</button>
                        </div>
                    </div>
                    <div className='dashboard__middle'>
                        <div className='dashboard__middle--left'>
                            <img src={Stats} className='dashboard__middle--left--top' alt='stats'/>
                            <img src={BarGraph} className='dashboard__middle--left--middle' alt='graph'/>
                            <img src={Portfolio} className='dashboard__middle--left--bottom' alt='portfolio'/>
                        </div>
                        <div className='dashboard__middle--right'>
                            <img src={Trending} className='dashboard__middle--right--top' alt='trending'/>
                            <img src={Insights} className='dashboard__middle--right--bottom' alt='insights'/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );    
    }
};

export default Dashboard;