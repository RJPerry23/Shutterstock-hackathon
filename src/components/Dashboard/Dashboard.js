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

class Dashboard extends Component{


    render() {
        return (
            <div className='below-nav'>
                <ContributorBar/>
                <div className='dashboard'>
                    <div className='dashboard__top'>
                        <h2 className='dashboard__top--heading'>Overview</h2>
                        <img src={Search} className='dashboard__top--icon'></img>
                        <input 
                        type="text" 
                        className='dashboard__top--search'
                        placeholder='Search...'></input>
                        <img src={Menu} className='dashboard__top--menu'/>
                        <img src={Notifications} className='dashboard__top--notifications'/>
                    </div>
                    <div className='dashboard__middle'>
                        <div className='dashboard__middle--left'>
                            <img src={Stats} className='dashboard__middle--left--top'/>
                            <img src={BarGraph} className='dashboard__middle--left--middle'/>
                            <img src={Portfolio} className='dashboard__middle--left--bottom'/>
                        </div>
                        <div className='dashboard__middle--right'>
                            <img src={Trending} className='dashboard__middle--right--top'/>
                            <img src={Insights} className='dashboard__middle--right--bottom'/>
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
};

export default Dashboard;