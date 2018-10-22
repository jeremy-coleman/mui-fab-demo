import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppView } from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

(process as NodeJS.EventEmitter).on('uncaughtException', (error) => {console.error('[err-client]', error.message, error.stack);});
window.onerror = (  message: string, filename?: string, lineno?: number,colno?: number, error?:Error ) => 
  {console.error('[err-client]', message, filename, lineno, colno, error); return true;} // prevent default handler


document.addEventListener("dragover", event => event.preventDefault())
document.addEventListener("drop", event => event.preventDefault())


ReactDOM.render(<AppView />, document.getElementById("root"))
registerServiceWorker();