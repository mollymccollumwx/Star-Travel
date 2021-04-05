import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className="cards"> 
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/Endor.png" text="Explore the nature reserve on the forest moon of Endor" label="Adventure" path="/services"/>
                        <CardItem 
                        src="images/tatooine.jpeg" text="Enjoy dual sunsets on Tatooine from Jabbas Palace" label="Luxury" path="/services"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/Endor.png" text="Explore the nature reserve on the forest moon of Endor" label="Adventure" path="/services"/>
                        <CardItem 
                        src="images/tatooine.jpeg" text="Enjoy dual sunsets on Tatooine from Jabbas Palace" label="Luxury" path="/services"/>
                        <CardItem 
                        src="images/tatooine.jpeg" text="Enjoy dual sunsets on Tatooine from Jabbas Palace" label="Luxury" path="/services"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
