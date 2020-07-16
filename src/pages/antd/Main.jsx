import React, { Component} from 'react';
import { Button } from 'antd';
import styles from './styles.module.less';
import { renderRoutes } from "react-router-config";
import './Main.less'
var classNames = require('classnames');

class AntdSection extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className={classNames('content-main', styles['antd-wrapper'])}>
                    {renderRoutes(this.props.route.routes)}
                </div>
            </div>
        );
    }
}

export default AntdSection;
