import React, { Component } from 'react';
class AnchorRender extends Component {
    constructor(props) {
        super(props);
    }
    anchorRender = () => {
        const {data = []}  = this.props;
        const list = data.map(item => {
            return (
                <div key={item.title ? item.title :item.desc }>
                    <a href={`#${item.title}`}>{item.title}</a>
                </div>
            )
        });
        return list
    }
    render() {
        return (
            <div className="anchor">
                <div style={{position: 'absolute'}} >
                    {this.anchorRender()}
                </div>
            </div>
        );
    }
}

export default AnchorRender;
