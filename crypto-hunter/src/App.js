import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Componentts/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
