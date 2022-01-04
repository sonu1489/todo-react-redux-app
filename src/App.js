import "./App.css";
import React from "react";
import Input from "./components/input";
import { Provider } from "react-redux";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Input />
      </div>
    </Provider>
  );
}

export default App;
