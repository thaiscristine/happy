import React from 'react';
import { Link } from 'react-router-dom';
import {FiArrowRight, FiPlus} from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarkerImg from '../images/logo-marker.svg'

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    
    iconSize: [58, 68],
    iconAnchor: [29, 68],

    popupAnchor: [178, 2]

})

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um organato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>
                        São Bernardo do Campo
                    </strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-23.6898429, -46.5648481]}
                zoom={14}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}></TileLayer>
                <Marker 
                icon={mapIcon}
                position={[-23.6898429, -46.5648481]}>
                    <Popup 
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                        className="map-popup"
                    >
                        Lar das meninas
                        <Link to="orphanages/1">
                            <FiArrowRight size={20} color='#fff' />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={ 32 } color="#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;