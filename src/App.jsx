
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  if (page === "login") return <Login onSwitch={() => setPage("register")} />;
  if (page === "register") return <Register onSwitch={() => setPage("login")} />;
  if (page === "tasks") return <TaskManager />;
  if (page === "status") return <TaskStatus />;
}

export default App;