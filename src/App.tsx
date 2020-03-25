import React from 'react'
import './App.css'
import AppWrapper from "./Components/AppWrapper/AppWrapper"
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <h1>Brainence React Test task</h1>
              <AppWrapper/>
          </div>
      </Provider>
  );
}

export default App;
