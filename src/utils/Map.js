import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = () => {
    return (
        <div>
            <MapContainer center={[18.494102, 73.932754]} zoom={13} scrollWheelZoom={false} style={{ height: '110vh', width:'40vw', zIndex: '1'}}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[18.494102, 73.932754]}>
                    <Popup>Tadaa! Here's where I live</Popup>
                </Marker>
                <div className="map-content">
                    <span>Aaryan Pinto,</span>
                    <br />
                    <span>Location: Pune, India</span>
                    <br />
                    <span>Email: imaryan32@gmail.com</span>
                </div>
            </MapContainer>
        </div>
    )
}

export default Map
