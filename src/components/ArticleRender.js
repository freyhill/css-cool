import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, a11yDark,vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class DocRender extends Component {
    constructor(props) {
        super(props);
    }
    docRender = () => {
        const {data = []}  = this.props;
        console.log('data', data);
        const list = data.map(item => {
            return <section key={item.title ? item.title : item.desc}>
                        <a name={item.title}></a>
                        <h1>{item.title}</h1>
                        
                        {
                            Array.isArray(item.desc) ?
                            item.desc.map(p => {
                                return (
                                    <p key={p}>{p}</p>
                                )
                                }) : <p>{item.desc}</p>
                        }
                        {
                            Array.isArray(item.code.detail) ? 
                            item.code.detail.map(detail => {
                                return   <SyntaxHighlighter key={detail} language={item.code.lang ? item.code.lang : 'less'} style={a11yDark}>
                                            {detail}
                                        </SyntaxHighlighter>
                            }):
                            <SyntaxHighlighter language={item.code.lang ? item.code.lang : 'less'} style={a11yDark}>
                                {item.code.detail}
                            </SyntaxHighlighter>
                        }
                        {
                            item.renderDom ? React.createElement(
                                this.props[item.renderDom]
                            ): null
                        }
                    </section>
        });
        return list
    }
    render() {
     
        return (
            <div className="article flex1 bgfff">
                {this.docRender()}
            </div>
        );
    }
}

export default DocRender;
