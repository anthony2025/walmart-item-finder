// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Toaster } from "react-hot-toast";
import "./App.css";
import Table from "./pages/Table";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route index element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
