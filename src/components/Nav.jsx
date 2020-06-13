import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Nav extends Component {
    navClick = (link) => {
        this.props.navClick(link);
    }
    navRender = () => {
       let navList =  this.props.data.map(item => {
        return <div key={item.link} className={this.props.currentNav === item.key ? 'active' : ''} onClick={this.navClick.bind(this, item.key)}>
            <Link to={item.link}>{item.title}</Link></div>
       });
       return navList
    }
    render() {
        return (
            <div className="nav flex flex1">
                <div className="nav-left flex1"></div>
                <div className="nav-center flex">{this.navRender()}</div>
                <div className="nav-right"></div>
            </div>
        );
    }
}

export default Nav;
