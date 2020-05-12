import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from '../src/Components/App';
import { PortfolioProvider } from '../src/Context/PortfolioContext'

ReactDOM.render(
    <BrowserRouter>
        <PortfolioProvider>
            <App />
        </PortfolioProvider>
    </BrowserRouter>, document.getElementById('root')
);
