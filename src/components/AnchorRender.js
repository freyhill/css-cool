import React, { Component } from 'react';
class AnchorRender extends Component {
    constructor(props) {
        super(props);
    }
    anchorRender = () => {
        const {data = []}  = this.props;
        const list = data.filter(item => item.title).map(item => {
            return (
                <li key={item.title ? item.title :item.desc }>
                    <a href={`#${item.title}`}>{item.title}</a>
                </li>
            )
        });
        return list
    }
    render() {
        return (
            <div className="anchor">
                <ul style={{position: 'absolute'}} >
                    {this.anchorRender()}
                </ul>
            </div>
        );
    }
}

export default AnchorRender;
