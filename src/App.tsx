import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { LeaguePage } from "./pages/LeaguePage";
import { LeagueBadge } from "./pages/LeagueBadge";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeaguePage />} />
        <Route path="/:id" element={<LeagueBadge />} />
      </Routes>
    </Router>
  );
}

export default App;
