import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import AdList from "../components/AdList";

interface Ad {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export default function SearchPage() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [page, setPage] = useState(1);

  const fetchAds = async (query = "", page = 1) => {
    const res = await fetch(`http://localhost:3000/ads/search?q=${encodeURIComponent(query)}&page=${page}`);
    console.log("🚀 ~ fetchAds ~ res:", res)
    if (res.ok) {
      const data = await res.json();
      console.log("🚀 ~ fetchAds ~ data:", data)
      setAds(data.results || []);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Buscar Anuncios</h1>
      <SearchBar onSearch={fetchAds} />
      <AdList ads={ads} />
      <div className="flex gap-2 mt-4">
        <button disabled={page === 1} onClick={() => { setPage(p => p - 1); fetchAds("", page - 1); }}>Anterior</button>
        <button onClick={() => { setPage(p => p + 1); fetchAds("", page + 1); }}>Siguiente</button>
      </div>
    </div>
  );
}

