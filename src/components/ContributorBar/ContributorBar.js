import React, { Component } from 'react';
import ProfileImage from '../../images/image-1.png'
import './ContributorBar.scss'
import DashboardBlack from '../../images/Bar-black/dashboard.svg'
import DashboardRed from '../../images/Bar-red/dashboard-red.svg'
import DollarBlack from '../../images/Bar-black/dollar.svg'
import DollarRed from '../../images/Bar-red/dollar-red.svg'
import EditBlack from '../../images/Bar-black/edit.svg'
import EditRed from '../../images/Bar-red/edit-red.svg'
import FolderBlack from '../../images/Bar-black/folder.svg'
import FolderRed from '../../images/Bar-red/folder-red.svg'
import LogoutBlack from '../../images/Bar-black/logout.svg'
import LogoutRed from '../../images/Bar-red/logout-red.svg'
import MessageBlack from '../../images/Bar-black/message.svg'
import MessageRed from '../../images/Bar-red/message-red.svg'
import SettingBlack from '../../images/Bar-black/setting.svg'
import SettingRed from '../../images/Bar-red/setting-red.svg'
import { Link } from 'react-router-dom';


class ContributorBar extends Component{

    state = {
        dashboard: false,
        earnings: false,
        portfolio: false,
        insights: false,
        settings: false,
        logout: false,
        feedback: false
    }

    // componentDidMount() {
    //     if (this.props.location) {
    //         console.log(window.location.pathname);
    //         this.setState({
    //             dashboard: false,
    //             earnings: false,
    //             portfolio: false,
    //             insights: false,
    //             settings: false,
    //             logout: false,
    //             feedback: false
    //         })
    //     }
    // }

    clickDashboard = () => {
        if (this.state.dashboard === false) {
            this.setState({
                dashboard: true,
                earnings: false,
                portfolio: false,
                insights: false,
                settings: false,
                logout: false,
                feedback: false
            })
        }
    }

    clickEarnings = () => {
        if (this.state.earnings === false) {
            this.setState({
                dashboard: false,
                earnings: true,
                portfolio: false,
                insights: false,
                settings: false,
                logout: false,
                feedback: false
            })
        }
    }

    clickPortfolio = () => {
        if (this.state.portfolio === false) {
            this.setState({
                dashboard: false,
                earnings: false,
                portfolio: true,
                insights: false,
                settings: false,
                logout: false,
                feedback: false
            })
        }
    }

    clickInsights = () => {
        if (this.state.insights === false) {
            this.setState({
                dashboard: false,
                earnings: false,
                portfolio: false,
                insights: true,
                settings: false,
                logout: false,
                feedback: false
            })
        }
    }

    clickSettings = () => {
        if (this.state.settings === false) {
            this.setState({
                dashboard: false,
                earnings: false,
                portfolio: false,
                insights: false,
                settings: true,
                logout: false,
                feedback: false
            })
        }
    }

    clickLogout = () => {
        if (this.state.logout === false) {
            this.setState({
                dashboard: false,
                earnings: false,
                portfolio: false,
                insights: false,
                settings: false,
                logout: true,
                feedback: false
            })
        }
    }

    clickFeedback = () => {
        if (this.state.feedback === false) {
            this.setState({
                dashboard: false,
                earnings: false,
                portfolio: false,
                insights: false,
                settings: false,
                logout: false,
                feedback: true
            })
        }
    }

    render() {

        return (
            <div className='contributor'>
                <img src={ProfileImage} className="profile" alt="profile"/>
                <div className='contributor__name'>
                    Christina
                </div>
                {!this.state.dashboard?
                <div className='contributor__item' >
                <Link to='/Overview' className='link' onClick={this.clickDashboard}>
                <img src={DashboardBlack} className='contributor__icon' alt="dash"/>
                Dashboard </Link>
                </div> :
                        <div className='contributor__item--active' onClick={this.clickDashboard}>
                        <img src={DashboardRed} className='contributor__icon--active' alt='dash red'/>
                        Dashboard
                        </div>}
                {!this.state.earnings?
                <div className='contributor__item' >
                <Link to='/Earnings' className='link' onClick={this.clickEarnings}>
                <img src={DollarBlack} className='contributor__icon' alt='dollar'/>
                Earnings</Link>
                </div> :
                        <div className='contributor__item--active' onClick={this.clickEarnings}>
                        <img src={DollarRed} className='contributor__icon--active' alt='dollar red'/>
                        Earnings
                        </div>}
                {!this.state.portfolio?
                <div className='contributor__item' >
                <Link to='/Portfolio' className='link' onClick={this.clickPortfolio}>
                <img src={FolderBlack} className='contributor__icon' alt='folder'/>
                Portfolio</Link>
                </div> :
                        <div className='contributor__item--active' onClick={this.clickPortfolio}>
                        <img src={FolderRed} className='contributor__icon--active' alt='folder red'/>
                        Portfolio
                        </div>}
                {!this.state.insights?
                <div className='contributor__item' >
                <Link to='/Insights' className='link' onClick={this.clickInsights}>
                <img src={EditBlack} className='contributor__icon' alt='edit'/>
                Insights</Link>
                </div> :
                        <div className='contributor__item--active' onClick={this.clickInsights}>
                        <img src={EditRed} className='contributor__icon--active' alt='edit red'/>
                        Insights
                        </div>}
                {!this.state.settings?
                <div className='contributor__item' >
                <Link to='/Settings' className='link' onClick={this.clickSettings}>
                <img src={SettingBlack} className='contributor__icon' alt='setting'/>
                Settings</Link>
                </div> :
                        <div className='contributor__item--active' onClick={this.clickSettings}>
                        <img src={SettingRed} className='contributor__icon--active' alt='setting red'/>
                        Settings
                        </div>}
                {!this.state.logout?
                <div className='contributor__item' >
                <Link to='/Logout' className='link' onClick={this.clickLogout}>
                <img src={LogoutBlack} className='contributor__icon' alt='logout'/>
                Logout</Link>
                </div> :
                        <div className='contributor__item--active' onClick={this.clickLogout}>
                        <img src={LogoutRed} className='contributor__icon--active' alt='logout red'/>
                        Logout
                        </div>}
                
                {!this.state.feedback?
                <div className='contributor__item' >
                <Link to='/Feedback' className='link' onClick={this.clickFeedback}>
                <img src={MessageBlack} className='contributor__icon' alt='message'/>
                Feedback</Link>
                </div> :
                        <div className='contributor__item--active' onClick={this.clickFeedback}>
                        <img src={MessageRed} className='contributor__icon--active' alt='message red'/>
                        Feedback
                        </div>}
            </div>
        );    
    }
};

export default ContributorBar;