// import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Transactions from "./views/Transactions";
function App() {
  const headerData = ["home", "transactions"];
  return (
    <>
      <BrowserRouter>
        <Header tabTitles={headerData} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
