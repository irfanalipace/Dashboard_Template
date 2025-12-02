import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import L from "leaflet";
import punjabGeoJson from "../../assets/geojson/punjab_districts.json";
import "leaflet/dist/leaflet.css";
import { stations } from "../../mocks/stations";
import "./KPICard.css"
// Custom marker icon (circle)
const stationIcon = L.divIcon({
  html: `<div style="
    background-color:#1f8f6e;
    width:20px;
    height:20px;
    border-radius:50%;
    border:2px solid white;">
  </div>`,
  className: "",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

export default function MapCard({ onDistrictClick }) {
  const [hoverStation, setHoverStation] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mapRef = useRef();

  const onEachDistrict = (district, layer) => {
    layer.bindTooltip(district.properties.name);
    layer.on({
      click: () => onDistrictClick && onDistrictClick(district.properties.name),
    });
  };

  const handleMouseMove = (e) => {
    if (!mapRef.current) return;
    const mapContainer = mapRef.current.getContainer();
    const rect = mapContainer.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 h-full flex flex-col">
      <h3 className="text-sm font-medium mb-3">Punjab Districts Map</h3>

      <div className="flex-1 rounded-lg overflow-hidden relative">
        <MapContainer
          ref={mapRef}
          center={[31.5, 72.7]}
          zoom={7}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "100%" }}
          whenCreated={(map) => mapRef.current = map}
          onMouseMove={handleMouseMove}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <GeoJSON data={punjabGeoJson} onEachFeature={onEachDistrict} />

          {stations.map((station, idx) => (
            <Marker
              key={idx}
              position={[station.lat, station.lng]}
              icon={stationIcon}
              eventHandlers={{
                mouseover: () => setHoverStation(station),
                mouseout: () => setHoverStation(null),
              }}
            />
          ))}
        </MapContainer>

  {hoverStation && (
  <div
    style={{
      position: "absolute",
      top: Math.min(mousePos.y + 15, window.innerHeight - 330), // ensure it doesn't overflow bottom
      left: Math.min(mousePos.x + 15, window.innerWidth - 250), // ensure it doesn't overflow right
      width: "240px",
      maxHeight: "320px",
      background: "linear-gradient(145deg, #ffffff, #f3f4f6)",
      borderRadius: "12px",
      padding: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
      zIndex: 1000,
      fontSize: "12px",
      overflowY: "auto",
      pointerEvents: "none",
      transition: "all 0.2s ease-in-out",
      animation: "fadeIn 0.25s ease-in-out",
    }}
    className="hover-box"
  >
    <div className="flex items-center mb-1">
  
      <strong style={{ fontSize: "14px", color: "#111827" }}>{hoverStation.name}</strong>
    </div>

    <div className="space-y-1 text-gray-700">
      <div><strong>Address:</strong> {hoverStation.address}</div>
    
      
      <div className="flex justify-between"><div><strong>Total EO:</strong> {hoverStation.totalEO}</div><div><strong>Total IO:</strong> {hoverStation.totalIO}</div></div>
    
    
            <div className="flex justify-between"><div><strong>Total Requisitions:</strong>{hoverStation.totalRequisitions}</div><div><strong>Total Strength:</strong> {hoverStation.totalStrength}</div></div>

       <div className="flex justify-between"><div><strong>Total Vehicles:</strong>{hoverStation.totalVehicles}</div><div><strong>Total HR:</strong>{hoverStation.totalHR}</div></div>
      
      <div><strong>Total Inventory:</strong> {hoverStation.totalInventory}</div>
    </div>
  </div>
)}




      </div>

      <div className="mt-2 text-xs text-gray-500">
        Hover over a district or station to see details
      </div>
    </div>
  );
}
