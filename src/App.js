import React from "react";
import Routes from "./lib/application/routes";
// Redux
import { Provider } from "react-redux";
import store from "./store";
//style
import "./App.css"; 

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
