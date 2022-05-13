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
        if (this.state.logout === false) {
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
                    <div className='contributor__item' onClick={this.clickDashboard}>
                    <img src={DashboardBlack} className='contributor__icon'/>
                    Dashboard
                    </div> :
                            <div className='contributor__item--active' onClick={this.clickDashboard}>
                            <img src={DashboardRed} className='contributor__icon--active'/>
                            Dashboard
                            </div>}
                {!this.state.earnings?
                <div className='contributor__item' onClick={this.clickEarnings}>
                <img src={DollarBlack} className='contributor__icon'/>
                Earnings
                </div> :
                        <div className='contributor__item--active' onClick={this.clickEarnings}>
                        <img src={DollarRed} className='contributor__icon--active'/>
                        Earnings
                        </div>}
                {!this.state.portfolio?
                <div className='contributor__item' onClick={this.clickPortfolio}>
                <img src={FolderBlack} className='contributor__icon'/>
                Portfolio
                </div> :
                        <div className='contributor__item--active' onClick={this.clickPortfolio}>
                        <img src={FolderRed} className='contributor__icon--active'/>
                        Portfolio
                        </div>}
                {!this.state.insights?
                <div className='contributor__item' onClick={this.clickInsights}>
                <img src={EditBlack} className='contributor__icon'/>
                Insights
                </div> :
                        <div className='contributor__item--active' onClick={this.clickInsights}>
                        <img src={EditRed} className='contributor__icon--active'/>
                        Insights
                        </div>}
                {!this.state.settings?
                <div className='contributor__item' onClick={this.clickSettings}>
                <img src={SettingBlack} className='contributor__icon'/>
                Settings
                </div> :
                        <div className='contributor__item--active' onClick={this.clickSettings}>
                        <img src={SettingRed} className='contributor__icon--active'/>
                        Settings
                        </div>}
                {!this.state.logout?
                <div className='contributor__item' onClick={this.clickLogout}>
                <img src={LogoutBlack} className='contributor__icon'/>
                Logout
                </div> :
                        <div className='contributor__item--active' onClick={this.clickLogout}>
                        <img src={LogoutRed} className='contributor__icon--active'/>
                        Logout
                        </div>}
                {!this.state.feedback?
                <div className='contributor__item' onClick={this.clickFeedback}>
                <img src={MessageBlack} className='contributor__icon'/>
                Feedback
                </div> :
                        <div className='contributor__item--active' onClick={this.clickFeedback}>
                        <img src={MessageRed} className='contributor__icon--active'/>
                        Feedback
                        </div>}
            </div>
        );    
    }
};

export default ContributorBar;