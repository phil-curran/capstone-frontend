import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gateway from "./pages/Gateway/Gateway";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Gateway />} />
          <Route path="/signup" element={<Gateway />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
