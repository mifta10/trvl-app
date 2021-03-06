import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import adventure from '../assets/images/img-9.jpg'
import luxury from '../assets/images/img-2.jpg'
import atlantic from '../assets/images/img-3.jpg'
import football from '../assets/images/img-4.jpg'
import desert from '../assets/images/img-8.jpg'


function Cards() {
  return (
    <div className="cards">
      <h1>Check Out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src={adventure}
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
            />
            <CardItem
            src={luxury}
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
            src={atlantic}
            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
            label="Mystery"
            path="/services"
            />
            <CardItem
            src={football}
            text="Experience Football on Top of the Himalayan Mountains"
            label="Adventure"
            path="/products"
            />
            <CardItem
            src={desert}
            text="Ride through the Sahara Desert on a guided camel tour"
            label="Adventure"
            path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
