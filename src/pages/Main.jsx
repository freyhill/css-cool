import React, { Component } from 'react';
import { renderRoutes } from "react-router-config";

class Main extends Component {
    render() {
        console.log(this.props.route.routes);
        return (
            <div className="flex">
                <div className="menu">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </div>
                <div>
                    {renderRoutes(this.props.route.routes)}
                </div>
                
            </div>
        );
    }
}

export default Main;
