import React, { Component } from 'react';
import { renderRoutes } from "react-router-config";
class Index extends Component {
    render() {
        console.log(this.props.route.routes);
        return (
            <div>css
                {renderRoutes(this.props.route.routes)}
            </div>
        );
    }
}

export default Index;
