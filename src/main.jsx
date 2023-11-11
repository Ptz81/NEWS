// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
// <BrowserRouter>
//     {/* <BrowserRouter basename='/NEWS'> */}
//       <App />
//     </BrowserRouter>

// )
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client'
import { persistor, store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css'
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {/* <BrowserRouter basename='/NEWS'> */}
         <BrowserRouter >
          <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  
)
