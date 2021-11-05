import * as React from 'react';
import { hot } from 'react-hot-loader/root'

export function HeaderComponent(){
    return(
        <header>
            <h1>Reddit for our 123123</h1>
        </header>
    )
}
export const Header = hot(HeaderComponent)