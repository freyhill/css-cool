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
    render() {
     
        return (
            
            <div className="less-overview flex">
                <ArticleRender 
                    data={docs}/>
                <AnchorRender
                    data={docs}/>
            </div>
        );
    }
}

export default LessOverview;
