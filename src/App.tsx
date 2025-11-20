import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TipCalc from "./pages/TipCalc";
import ChangeCalc from "./pages/ChangeCalc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tip-calculator" element={<TipCalc />} />
          <Route path="/change-calculator" element={<ChangeCalc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;