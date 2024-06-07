import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Utilizamos el componente BrowserRouter para poder navegar entre paginas */}
    <BrowserRouter>
    {/* Envolvemos nuestro proyecto en la store de redux para tener la data que necesitamos a nivel global */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
