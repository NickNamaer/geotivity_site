import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SoftwarePage from "./pages/SoftwarePage";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/software" element={<SoftwarePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
