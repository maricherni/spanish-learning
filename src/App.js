import React from "react";
import Routes from "./lib/application/routes";
// Redux
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <>
    <p>{process.env.REACT_APP_SALUDO}</p>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
