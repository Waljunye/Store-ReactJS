import * as React from 'react';
import { hot } from 'react-hot-loader/root'
import styles from './style.css'

export function HeaderComponent(){
    return(
        <header className={styles.example}>
            <h1>Reddit for our own</h1>
        </header>
    )
}
export const Header = hot(HeaderComponent)