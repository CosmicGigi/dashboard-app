import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/Calculator";
import Todolist from "./pages/Todolist";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { calculator, home, error, todolist } from "./routes";
import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={calculator} element={<Calculator />} />
        <Route path={todolist} element={<Todolist />} />
        <Route path={error} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
