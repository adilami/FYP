import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
// import Register from './Register';
// import Example from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
      <App />
    </Router>
    <ToastContainer />
  </React.StrictMode>
);



