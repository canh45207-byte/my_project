import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import TaskManager from "./components/TaskManager";
import TaskStatus from "./components/TaskStatus";

function App() {
  const [page, setPage] = useState("login");

  if (page === "login") return <Login onSwitch={() => setPage("register")} />;
  if (page === "register") return <Register onSwitch={() => setPage("login")} />;
  if (page === "tasks") return <TaskManager />;
  if (page === "status") return <TaskStatus />;
}

export default App;