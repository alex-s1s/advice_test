import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Queries from "./pages/Queries";
import Schedules from "./pages/Schedules";

import { GlobalProvider } from "./hooks/context/globalState";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/queries" element={<Queries />} />
            <Route path="/schedules" element={<Schedules />} />
          </Routes>
        </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
