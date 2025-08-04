import { useState } from "react";

export default function PublishForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { title, description, imageUrl };

    const res = await fetch("http://localhost:3000/ads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Anuncio publicado");
      setTitle(""); setDescription(""); setImageUrl("");
    } else {
      alert("Error al publicar");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <input className="border p-2 rounded" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea className="border p-2 rounded" placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
      <input className="border p-2 rounded" placeholder="Imagen URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Publicar</button>
    </form>
  );
}
