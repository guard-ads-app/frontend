interface Ad {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface AdListProps {
  ads: Ad[];
}

export default function AdList({ ads }: AdListProps) {
  if (ads.length === 0) {
    return <p className="text-gray-500">No se encontraron anuncios.</p>;
  }

  return (
    <ul className="space-y-4">
      {ads.map((ad) => (
        <li key={ad.id} className="border p-4 rounded shadow">
          <div className="flex-1">
            <h2 className="font-bold text-lg">{ad.title}</h2>
            <p className="text-gray-700">{ad.description}</p>
          </div>
          <div className="text-sm text-gray-500">{ad.category}</div>
        </li>
      ))}
    </ul>
  );
}
