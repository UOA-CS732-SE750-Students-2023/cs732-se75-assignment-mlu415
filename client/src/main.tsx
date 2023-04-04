import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import reducers from "./redux/reducers";
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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={`481927917106-9kohhs7o29esbkgutdl7tobkelfu5c5s.apps.googleusercontent.com`}
      >
        <Router>
          <App />
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
