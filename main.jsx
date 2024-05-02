import React from 'react';
import ReactDOM from 'react-dom/client'; // React DOM for rendering
import App from './App'; // Root component

// Render the root component into the DOM
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' exists in index.html
root.render(
   <App /> 
);