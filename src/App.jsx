import "./css/App.css";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}
export default App;
