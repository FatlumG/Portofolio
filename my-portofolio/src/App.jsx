import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vulum from "./pages/Vulum";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vulum" element={<Vulum />} />
      </Routes>
    </Router>
  );
}

export default App;
