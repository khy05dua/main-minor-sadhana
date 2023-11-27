import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatBot from 'react-simple-chatbot';
import './index.css';
import App from './App';
import Ch from './Chatb';


import ShopContextProvider from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
          <ShopContextProvider>
            <App />
          <div>
          <Ch />
          </div>
        {/* document.getElementById('root') */}
           </ShopContextProvider> 
           
);


