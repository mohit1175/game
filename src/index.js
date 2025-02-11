import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import YesPage from "./pages/YesPage"; // Ensure this file exists
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// ✅ Correct way in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
