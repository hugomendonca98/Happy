import React from 'react'
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import "../styles/pages/OrphanageMaps.css";
import mapMarkerImg from '../images/Local.svg';

interface Props {}

function OrphanageMaps(props: Props) {
    const {} = props

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfonato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>São Paulo SP</strong>
                </footer>
            </aside>
            <Map  
                center={[-23.4408951,-46.7381793]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanageMaps
