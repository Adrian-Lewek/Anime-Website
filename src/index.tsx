import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './pages/App';
import {store} from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename='/work_management_app'>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
