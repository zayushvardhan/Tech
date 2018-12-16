import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestCustom from './TestCustom';
import Welcome from './TestFunctionComponent';

import * as serviceWorker from './serviceWorker';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

const element = <Welcome name="Ayush" />;
 ReactDOM.render(element, document.getElementById('testcustom'));
 ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<TestCustom />, document.getElementById('testcustom'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
