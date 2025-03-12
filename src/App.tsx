// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Toaster } from "react-hot-toast";
import "./App.css";
import Table from "./pages/Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
