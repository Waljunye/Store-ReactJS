import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './Header.css';

export function HeaderComponent(){
    console.log(styles.example)
    return(
        <header>
            <h1 className={styles.example}>Hello React</h1>
        </header>
    )
}
export const Header = hot(HeaderComponent)