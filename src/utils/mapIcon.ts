import mapMarkerImg from '../images/logo-marker.svg';
import L from 'leaflet';

const mapIcon = L.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  });

  export default mapIcon;