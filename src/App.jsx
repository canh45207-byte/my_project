
import TaskManager from "./components/TaskManager";

function App() {
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";


  return isLogin ? (
    <Login onSwitch={() => setIsLogin(false)} />
  ) : (
    <Register onSwitch={() => setIsLogin(true)} />
  );
}

export default App;