import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import restaurant from '/images/restaurante.ico'

// Define el ícono personalizado
const restaurantIcon = new L.Icon({
  iconUrl: restaurant,
  iconRetinaUrl: restaurant,
  iconSize: [32, 32], // Ajusta el tamaño del ícono según tus necesidades
  iconAnchor: [16, 32], // Ajusta el punto de anclaje del ícono (la parte inferior central del ícono en este caso)
  popupAnchor: [0, -32] // Ajusta el punto desde el cual el popup se abre
})

const MapView = ({ partner }) => {
  if (!partner) {
    return <div>No partner data available</div>
  }

  return (
    <MapContainer
      center={[partner.coordinate_x, partner.coordinate_y]}
      zoom={13}
      style={{ height: '30vh', width: '100%', borderRadius: '15px' }}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker
        position={[partner.coordinate_x, partner.coordinate_y]}
        icon={restaurantIcon}
      >
        <Popup>{partner.restaurant_name}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapView
