import React from "react";
import "./App.css";
import DashboardComponent from "./components/dashboard/dashboardComponent";
import { Provider } from "react-redux";
import configStore from "./store/index";
const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DashboardComponent />
      </div>
    </Provider>
  );
}

export default App;
