import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import CalculatorApp from './CalculatorApp';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <CalculatorApp />
    </StrictMode>
);

reportWebVitals();