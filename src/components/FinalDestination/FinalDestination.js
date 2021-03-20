import React from 'react';
import map from '../../images/Map.png';
import car from '../../images/car.png';
import people from '../../images/peopleicon.png';
import './FinalDestination.css';

const FinalDestination = () => {
    const fromPlace = document.getElementById("from-place").value;
    const toPlace = document.getElementById("to-place").value;
    return (
        <div className="destination-container">
            <div className="final-destination">
                <h3>* {fromPlace}</h3>
                <h3>|</h3>
                <h3>* {toPlace}</h3>
                <div className="ride-detail">
                    <img src={car} alt="car" />
                    <h3>Car</h3>
                    <img src={people} alt="people" />
                    <h3>4</h3>
                    <h3>$67</h3>
                </div>
                <div className="ride-detail">
                    <img src={car} alt="car" />
                    <h3>Car</h3>
                    <img src={people} alt="people" />
                    <h3>4</h3>
                    <h3>$67</h3>
                </div>
                <div className="ride-detail">
                    <img src={car} alt="car" />
                    <h3>Car</h3>
                    <img src={people} alt="people" />
                    <h3>4</h3>
                    <h3>$67</h3>
                </div>
            </div>
            <div className="map1">
                <img src={map} alt="map-pic" />
            </div>
        </div>
    );
};

export default FinalDestination;