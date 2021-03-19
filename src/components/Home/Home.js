import React from 'react';
import Card from '../Card/Card';
import './Home.css';
import bike from '../../images/bike.png';
import car from '../../images/car.png';
import bus from '../../images/bus.png';
import train from '../../images/train.png';

const Home = () => {
    return (
        <div className="home-main">
            <h1>Travelling Is Easier Than Before</h1>
            <h1>Select Your Ride</h1>
            <div className="cards">
                <Card name="BIKE" picture={bike}></Card>
                <Card name="CAR" picture={car}></Card>
                <Card name="BUS" picture={bus}></Card>
                <Card name="TRAIN" picture={train}></Card>
            </div>
        </div>
    );
};

export default Home;