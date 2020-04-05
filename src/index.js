import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./views/App/App";
import * as serviceWorker from "./serviceWorker";
import * as ReactRedux from "react-redux/lib";
import { Provider } from "react-redux";
import store from "./state/store";

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackHooks: true,
    trackExtraHooks: [ [ ReactRedux, "useSelector" ] ]
  });
}

// This is the JavaScript Entry Point. ReactDOM.render call lives here, we're
// rendering the Application component, which I haven't fully written yet.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
