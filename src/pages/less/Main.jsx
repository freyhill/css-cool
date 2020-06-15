import React, { Component} from 'react';
import { Button } from 'antd';

import { renderRoutes } from "react-router-config";
import './Main.less'
class LessVariables extends Component {
    render() {
        return (
            <div className="less-wrapper">
                <div className="less-main">
                    {renderRoutes(this.props.route.routes)}
                </div>
            </div>
        );
    }
}

export default LessVariables;
