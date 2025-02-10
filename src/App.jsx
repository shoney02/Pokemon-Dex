import React from "react";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer position="top-center" autoClose={2000} />
      <Router />
    </Provider>
  );
};

export default App;
