import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
export const navData = [
    {   
        title: 'css',
        key: 'css',
        link: '/css'
    },
    {
        title: 'Less',
        key: 'less',
        link: '/less'
    },
    {
        title: 'Sass',
        key: 'sass',
        link: '/sass'
    }
]

export const menuData = {
    less: [
        {
            name: '变量',
            key: 'variables',
            link: '/less/variables',
            icon: 'AlignLeftOutlined'
        },
        {
            name: '混合',
            key: 'minxins',
            link: '/less/minxins',
            icon: 'TagsOutlined'
        },
        {
            name: '嵌套',
            key: 'nesting',
            link: '/less/nesting',
            icon: 'ProjectOutlined'
        },
        {
            name: '运算',
            key: 'operations',
            link: '/less/operations',
            icon: 'FundViewOutlined'
        },
        {
            name: '转义',
            key: 'escaping',
            link: '/less/escaping',
            icon: 'FlagOutlined',
            
        },
        {
            name: '函数',
            key: 'functions',
            link: '/less/functions',
            icon: 'AreaChartOutlined'
        },
        {
            name: '命名空间',
            key: 'namespace',
            link: '/less/namespace',
            icon: 'OrderedListOutlined'
        },
        {
            name: '映射',
            key: 'maps',
            link: '/less/maps',
            icon: 'ColumnHeightOutlined'
        },
        {
            name: '作用域',
            key: 'scope',
            link: '/less/scope',
            icon: 'StockOutlined'
        }
    ],
    
}