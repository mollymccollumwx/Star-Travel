import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
import Endor from "../images/Endor.png"
import Hoth from "../images/Hoth.jpeg"
import Dagobah from "../images/Dagobah.png"
import CloudCity from "../images/CloudyCity.jpeg"
import Tatooine from "../images/tatooine.jpeg"

function Cards() {
    return (
        <div className="cards"> 
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={Endor} text="Explore the nature reserve on the forest moon of Endor" label="Adventure" path="/services"/>
                        <CardItem 
                        src={Tatooine} text="Enjoy dual sunsets on Tatooine from Jabbas Palace" label="Luxury" path="/tatooine"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={Hoth} text="Ride a majestic Tauntaun through the endless Winter on Hoth" label="Adventure" path="/services"/>
                        <CardItem 
                        src={CloudCity} text="Unparalleled aerial tour above the clouds on Bespin" label="Luxury" path="/services"/>
                        <CardItem 
                        src={Dagobah} text="Visit the swamp lands of Dagobah you must" label="Adventure" path="/services"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
