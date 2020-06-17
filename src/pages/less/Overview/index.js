import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, a11yDark,vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as code from './doc'
import {docs} from './doc'
import ArticleRender from '../../../components/ArticleRender'
import AnchorRender from '../../../components/AnchorRender'
import './index.less'
class LessOverview extends Component {
    constructor(props) {
        super(props);
    }
    renderDom = (item) => {
        React.createElement(item)
    }
    renderVariables = () => {
        return (
            <div className="variables center">
                look at me 
            </div>)
    }
    renderMixins = () => {
        return (
            <div className='flex'>
                <div className='mixins1'>mixins</div>
                <div className='mixins2'>mixins</div>
            </div>
        )
    }
    render() {
     
        return (
            
            <div className="less-overview flex">
                <ArticleRender 
                    data={docs}
                    renderVariables={this.renderVariables}
                    renderMixins={this.renderMixins}
                    />
                <AnchorRender
                    data={docs}/>
            </div>
        );
    }
}

export default LessOverview;
