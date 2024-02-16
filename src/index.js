import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// import { Gamestart } from './component/gamestart';
// ReactDOM.createRoot(document.getElementById('root')).render(<Gamestart/>);

// import { Gameplay } from './component/gameplay';
// ReactDOM.createRoot(document.getElementById('root')).render(<Gameplay/>);

import { Home } from './component/home';
ReactDOM.createRoot(document.getElementById('root')).render(<Home/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
