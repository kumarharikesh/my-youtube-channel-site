import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Comp1 from "./components/Comp1";
import Slider from "./components/videoSlider"
import Footer from "./components/Footer";

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<React.StrictMode><Header /></React.StrictMode>);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<React.StrictMode><Comp1 /></React.StrictMode>);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<React.StrictMode><Slider /></React.StrictMode>);

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<React.StrictMode><Footer /></React.StrictMode>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
