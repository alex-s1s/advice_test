import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Queries from "./pages/Queries";
import Schedules from "./pages/Schedules";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/schedules" element={<Schedules />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
