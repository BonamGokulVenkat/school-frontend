interface MapEmbedProps {
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
}

export function MapEmbed({
  lat,
  lng,
  zoom = 15,
  className = "",
}: MapEmbedProps) {
  // Using Google Maps embed URL (replace with your preferred map service)
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 ${className}`}
      style={{ minHeight: "300px" }}
    >
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ minHeight: "300px", border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="School Location Map"
        className="absolute inset-0"
      />
    </div>
  );
}