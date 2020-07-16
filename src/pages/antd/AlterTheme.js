import React, { Component } from 'react';
import {Button, Dropdown, Menu} from 'antd';
import NewButton from '@/components/NewButton.js'

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
class AlterTheme extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="">
             <h2>主题修改</h2>
             <Dropdown overlay={menu} trigger={['click']}>
                <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Click me
                </Button>
            </Dropdown>
            </div>
        );
    }
}

export default AlterTheme;
