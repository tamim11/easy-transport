import React from 'react';
import './Destination.css';
import map from '../../images/Map.png';
import { Link } from 'react-router-dom';

const Destination = () => {
    return (
        <div className="destination-container">
            <div className="place-info">
                <label htmlFor="from">Pick From</label><br />
                <input id="from-place" type="text" name="from" /><br /><br />
                <label htmlFor="to">Pick To</label><br />
                <input id="to-place" type="text" name="to" /><br /><br />
                <Link to="/finaldest"><button className="pick-button">Search</button></Link>
            </div>
            <div className="map1">
                <img src={map} alt="map-pic" />
            </div>
        </div>
    );
};

export default Destination;