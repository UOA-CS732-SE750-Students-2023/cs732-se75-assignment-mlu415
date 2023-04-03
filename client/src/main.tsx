import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./global.css";

import { Provider } from "react-redux";
import { reducers } from "./redux/reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider>
        <Router>
          <App />
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
