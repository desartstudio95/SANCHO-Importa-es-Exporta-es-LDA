import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Importação crítica para o build funcionar

console.log("SANCHO App starting...");
const rootElement = document.getElementById('root');

try {
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
} catch (error) {
  console.error("Critical initialization error:", error);
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: sans-serif; text-align: center;">
        <h2>Erro ao carregar SANCHO</h2>
        <p>${error instanceof Error ? error.message : String(error)}</p>
        <p>Por favor, tente recarregar a página.</p>
      </div>
    `;
  }
}