import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importação crítica para o build funcionar

console.log("SANCHO App starting...");
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Could not find root element to mount to");
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
console.log("React root created, rendering...");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
console.log("Initial render call completed.");