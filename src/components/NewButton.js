import React, { Component } from 'react';
import {Button} from 'antd';
import styles from '@/styles/theme-rest.module.less';

export default function NewButton({text= 'button',}) {
    return (
        <div className={styles['new-button']}>
            <Button type="primary">{text}</Button>
        </div>
    )
}