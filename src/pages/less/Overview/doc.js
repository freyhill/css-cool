
import React, { Component } from 'react';

export const docs = [
    {
        title: '概览',
        desc: ['Less （Leaner Style Sheets 的缩写）是基于node的css预处理语言'],
        code: {
            detail:[`
    // less
    @link='skyblue'

    a {
        color: @link
    }
            `,
    `
    // css
    a {
        color: skyblue
    }
    
    `    
        ]
        }
    },
    {
        title: 'Why Less',
        desc: [`为什么要使用less？css作为标记语言，语法不够强大，不能嵌套，没有变量，在编写过程中有大量冗余代码，开发效率不高。less作为css预处理
        语言，提供了很多类似js的语法特性，开发者可以像写js一样来写css代码，配合目前的工程哈开发工具可以实时编译成css，提高了css的编写效率!`],
        code: {
            lang: 'javascript',
            detail:[`
    npm install -g less
            `]
        },
    },
    {
        title: '环境及安装',
        desc: ['使用npm安装less的lessc全局命令'],
        code: {
            detail:[`
    npm install -g less
            `]
        },
    },
    {
        desc: '使用less命令将less文件编译成css文件',
        code: {
            detail:[`
    less style.less style.css
            `,]
        },
    },
    {   title: '变量（Variables）',
        desc: ['less中的变量可以像使用js定义变量一样，将一个值保存在变量中，在后面的less中使用',],
        code: {
            detail:[`
    // less
    @primaryColor: Tomato;
    .variables{
        background-color: @primaryColor ;
        color:#fff;
        width: 100%;
        height: 100px
    }
            `,
    `
    // css
    .variables{
        background-color: Tomato;
        color: #fff;
        width: 100%;
        height: 100px;
    }
    
    `    
        ]
        },
        renderDom: 'renderVariables'
    },
    {   title: '混合（Mixins）',
        desc: ['mixin是一种将一组属性从一个规则集包含(“混合”)到另一个规则集的方法。',],
        code: {
            detail:[`
    // less
    .centrol{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mixins1{
        width: 100px;
        height: 100px;
        background: Orange;
        .centrol;
    }
            `,
    `
    // css
    .mixins1{
        width: 100px;
        height: 100px;
        background: Orange;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    `    
        ]
        },
        renderDom: 'renderMixins'
    },
    {
        title:'嵌套（Nested Rules）',
        desc: '',
        code: {
            detail: ``
        }
    }
]

