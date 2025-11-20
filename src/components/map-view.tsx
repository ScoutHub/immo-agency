import { useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { items } from "@/data/fake-data";

const DefaultIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.setIcon(DefaultIcon);

interface MapViewProps {
  items: typeof items;
}

const MapBounds = ({ items }: MapViewProps) => {
  const map = useMap();

  useMemo(() => {
    if (items.length > 0) {
      const bounds = L.latLngBounds(
        items.map((item) => [item.lat, item.lng] as [number, number])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [items, map]);

  return null;
};

export default function MapView() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
    document.head.appendChild(link);
  }, []);

  const center: [number, number] = [45.764, 4.834]; // Lyon center

  return (
    <div className="w-full h-[700px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={center} zoom={13} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapBounds items={items} />
        {items.map((item, idx) => (
          <Marker key={`${item} - ${idx}`} position={[item.lat, item.lng]}>
            <Popup>
              <div className="p-2 w-48">
                <img
                  src={item.image}
                  alt={item.badges[0]}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <p className="font-semibold text-sm">
                  {item.badges[0]} - {item.price.toLocaleString()}€
                </p>
                <p className="text-xs text-gray-600">{item.city}</p>
                <p className="text-xs text-gray-600">
                  {item.badges.join(", ")}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
