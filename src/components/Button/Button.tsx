import React from 'react';
import styles from './Button.module.scss'

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
}

export const Button = ({title, onClickHandler}:ButtonPropsType) => {
    return (
        <button className={styles.button} onClick={onClickHandler}>
            {title}
        </button>
    );
};
