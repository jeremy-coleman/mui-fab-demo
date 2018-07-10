import * as React from "react"
import { Provider, observer } from "mobx-react"
import {ThemeProvider} from 'theming'
import {injectGlobal} from 'react-emotion'

import { store } from "./stores"

import { AppLayout } from './modules/layout/AppLayout';
import AppRouter from './Router';
import { NavStore } from "./stores/NavStore";

const navStore = new NavStore()

const stores = {
    nav: navStore,
    store: store,
  }


@observer
export class AppView extends React.Component<any, any> {
render(){
  return (
    <Provider {...stores}>
      
      <ThemeProvider theme={stores.store.uiStore.combinedTheme}>
      <div style={{height: '100vh', width: '100vw'}}>
            <AppLayout>
              <AppRouter/>
            </AppLayout>
        </div>
        </ThemeProvider>
    </Provider>

  )
}}


// body > font-size: ${theme.fontSizes[1]}px;
injectGlobal`
* {
  box-sizing: border-box;
  font-weight: inherit;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-appearance: none;
  -moz-appearance: none;
  user-select: none
  font: caption;
}

html,
body {
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  position: relative;
  height: 100%;
  max-height: 100%;
  width: 100vw;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

a {
  color: currentColor;
  text-decoration: none;
}

textarea {
  resize: none;
},
#root {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`