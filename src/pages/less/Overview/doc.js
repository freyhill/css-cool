
import React, { Component } from 'react';

export const docs = [
    {
        title: '概览',
        desc: ['Less （Leaner Style Sheets 的缩写）是基于node的css预处理语言'],
        code: {
            detail:[`
    @link='#000'
    @priamry='#sfs'
            `]
        }
    },
    {
        title: '环境及安装',
        desc: ['使用npm全局安装less的全局命令'],
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
        desc: 'less中的变量可以像使用js定义变量一样，将一个值保存在变量中，在后面的less中使用',
        code: {
            detail:[`
    less style.less style.css
            `,]
        },
    }
]

