import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
      </Routes>

      <Reviews />
    </div>
  );
}

export default App;
