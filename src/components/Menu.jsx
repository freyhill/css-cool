import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import  * as Icon from '@ant-design/icons';

class MenuComponent extends Component {
    renderMenu = () => {
        const {data} = this.props;
        console.log('this.props', this.props);
        let menu = data.map(item => {
            return (
                <Menu.Item key={item.link}>
                    <Link to={item.link}>
                    {
                        React.createElement(
                            Icon[item.icon],
                        )
                    }
                    {item.name}
                    </Link>
                    
                </Menu.Item>
            )
        });
        return menu;
    }
    render() {
        return (
            <div className="menu-wrapper">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    mode="inline"
                >
                    {this.renderMenu()}
                </Menu>
            </div>
        );
    }
}

export default MenuComponent;



