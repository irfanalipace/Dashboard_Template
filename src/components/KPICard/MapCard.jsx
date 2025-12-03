import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import L from "leaflet";
import punjabGeoJson from "../../assets/geojson/punjab_districts.json";
import "leaflet/dist/leaflet.css";
import { Typography } from "@mui/material";
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
   
   <Typography
        
        sx={{ color: "#4a5971", mb: 2, fontWeight: 700 }}
      >
        Punjab Districts Map
      </Typography>
      <div className="flex-1 rounded-lg relative">
        <MapContainer
          ref={mapRef}
          center={[31.5, 72.7]}
          zoom={10}
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
      top: Math.min(mousePos.y + 15, window.innerHeight - 330),
      left: Math.min(mousePos.x + 15, window.innerWidth - 260),
      width: "260px",
      maxHeight: "440px",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(8px)",
      borderRadius: "16px",
      padding: "16px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
      zIndex: 1000,
      fontSize: "13px",
      overflowY: "auto",
      pointerEvents: "none",
      animation: "fadeIn 0.25s ease-in-out",
      border: "1px solid #e5e7eb",
    }}
    className="hover-box"
  >
    {/* Title */}
    <div className="mb-3">
      <h3 className="text-lg font-bold text-[#1F2937]">
        {hoverStation.name}
      </h3>
      <p className="text-gray-500 text-xs">{hoverStation.address}</p>
    </div>

    {/* Beautiful stats list */}
    <div className="space-y-3">

      {/* EO / IO */}
      <div className="bg-gray-50 rounded-md p-2 shadow-sm border-l-4 border-blue-500">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Total EO</span>
          <span className="font-bold text-blue-600">{hoverStation.totalEO}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Total IO</span>
          <span className="font-bold text-indigo-600">{hoverStation.totalIO}</span>
        </div>

        {/* Mini bar chart */}
        <div className="mt-1 h-2 w-full bg-gray-200 rounded">
          <div
            className="h-full bg-blue-500 rounded"
            style={{ width: `${(hoverStation.totalEO / (hoverStation.totalEO + hoverStation.totalIO)) * 100}%` }}
          />
        </div>
      </div>

      {/* Requisitions / Strength */}
      <div className="bg-gray-50 rounded-md p-2 shadow-sm border-l-4 border-green-500">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Requisitions</span>
          <span className="font-bold text-green-600">{hoverStation.totalRequisitions}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Strength</span>
          <span className="font-bold text-emerald-600">{hoverStation.totalStrength}</span>
        </div>

        {/* Mini bar chart */}
        <div className="mt-1 h-2 w-full bg-gray-200 rounded">
          <div
            className="h-full bg-green-500 rounded"
            style={{ width: `${(hoverStation.totalStrength / 100) * 100}%` }}
          />
        </div>
      </div>

      {/* Vehicles / HR */}
      <div className="bg-gray-50 rounded-md p-2 shadow-sm border-l-4 border-orange-500">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Vehicles</span>
          <span className="font-bold text-orange-600">{hoverStation.totalVehicles}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Total HR</span>
          <span className="font-bold text-yellow-600">{hoverStation.totalHR}</span>
        </div>

        {/* Mini bar chart */}
        <div className="mt-1 h-2 w-full bg-gray-200 rounded">
          <div
            className="h-full bg-orange-500 rounded"
            style={{ width: `${(hoverStation.totalVehicles / (hoverStation.totalVehicles + hoverStation.totalHR)) * 100}%` }}
          />
        </div>
      </div>

      {/* Inventory */}
      <div className="bg-gray-50 rounded-md p-2 shadow-sm border-l-4 border-purple-500">
        <div className="flex justify-between text-sm">
          <span className="font-semibold text-gray-700">Inventory</span>
          <span className="font-bold text-purple-600">{hoverStation.totalInventory}</span>
        </div>
      </div>
    </div>
  </div>
)}


      </div>
    </div>
  );
}
