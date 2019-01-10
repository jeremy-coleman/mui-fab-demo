import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/main.css'
//import {forceRenderStyles} from 'typestyle';

self.document.body.style.setProperty('--window-chrome', '#424242')
self.document.body.style.setProperty('--window-chrome-action', 'orange')
self.document.body.style.setProperty('--window-splitter-color', 'black')
self.document.body.style.setProperty('--action-color', 'orange')
self.document.body.style.setProperty('--primary', '#424242')
self.document.body.style.setProperty('--matte-black', '#424242')
self.document.body.style.setProperty('--text-on-background', 'white')
self.document.body.style.setProperty('--text-on-page', 'black')
self.document.body.style.setProperty('--readable-bg', 'white')
self.document.body.style.setProperty('--readable-text', 'black')

// import {normalize, setupPage} from "csstips";
// normalize();
// setupPage('#root');


self.document.body.style.setProperty('--cog-primary', 'orange')

import { AppView } from './main';

ReactDOM.render(<AppView />, document.getElementById("root"))
