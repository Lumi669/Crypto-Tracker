import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Componentts/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
