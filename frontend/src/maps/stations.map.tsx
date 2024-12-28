import { LayersControl } from 'react-leaflet/LayersControl';
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { TileLayer } from 'react-leaflet/TileLayer'
import { BASE_LAYERS } from "./baseLayers.tsx";

const OUTER_BOUNDS = [
    [-80, -180],
    [80, 180],
];

function StationsMap({ stations }: { stations: never[] }) {

    return (
        <>
            <MapContainer style={{ height: "100vh" }} center={[46.80121, 8.226692]} zoom={9} scrollWheelZoom={false} maxBounds={[[-80, -180], [80, 180]]} maxBoundsViscosity={1}>
                <LayersControl position="topright">
                    {BASE_LAYERS.map((baseLayer) => (
                        <LayersControl.BaseLayer
                            key={baseLayer.url}
                            checked={baseLayer.checked}
                            name={baseLayer.name}
                        >
                            <TileLayer
                                attribution={baseLayer.attribution}
                                url={baseLayer.url}
                            />
                        </LayersControl.BaseLayer>
                    ))}
                </LayersControl>

                {stations.map((item, index) => (
                    <Marker position={[item["lat"], item["lon"]]}>
                        <Popup>
                            {item["label"]} {item["station_code"]}
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </>
    );
}

export default StationsMap;