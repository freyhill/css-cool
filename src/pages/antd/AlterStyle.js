import React, { Component } from 'react';
import {Button} from 'antd';
import styles from './styles.module.less';
import NewButton from '@/components/NewButton.js'
class AlterStyle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="">
                <div className={styles.hello}>
                    <span className={styles.deleted}>Hello World</span>
                </div>
                <div className={styles['newbutton']}>
                    <Button type="primary">我的样式被修改了</Button>
                </div>
                <NewButton text="hahhah"></NewButton>
                <Button type="primary">我的样式没被修改</Button>
            </div>
        );
    }
}

export default AlterStyle;
