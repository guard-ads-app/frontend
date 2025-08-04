import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PublishPage from "./pages/PublishPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <nav className="flex gap-4 mb-4">
          <Link to="/" className="text-blue-600 font-semibold">Buscar</Link>
          <Link to="/publicar" className="text-blue-600 font-semibold">Publicar</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/publicar" element={<PublishPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
