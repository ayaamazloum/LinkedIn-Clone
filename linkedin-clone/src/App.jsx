import "./styles/utilities.css";
import "./styles/colors.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
