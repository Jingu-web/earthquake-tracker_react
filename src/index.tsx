import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "leaflet/dist/leaflet.css";
import App from "./App";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
