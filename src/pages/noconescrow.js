import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/Header'
import pic_escrow from '../assets/images/escrow-icon.png'
import pic_sunny from '../assets/images/sunny.png'
import pic_rainy from '../assets/images/rainy.png'
import pic_sky from '../assets/images/sky.jpg'
import pic_bike_sharing from '../assets/images/bike-sharing2.png'
import pic_car_sharing from '../assets/images/car-sharing.png'
import pic_scooter_sharing from '../assets/images/scooter-sharing.png'
import pic_house_renting from '../assets/images/house-renting.png'
import pic_photo_selling from '../assets/images/photo-selling.png'





class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Good Questions!" />
        <Header />
        <div id="main">
          <section id="content" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>What is NoContract Escrow?</h2>
                </header>

                <p>NoContract Escrow is the first use-case we are implementing in NoContract project.
              It's best to consider a simple, yet very common scenario to explain this use-case:</p>

              Ali would like to buy a second hand iPhone in Sydney, he searches and finds out that Henrique in Mexico is selling his old iPhone.
            <br />
            They chat over Telegram and agree on a price: $450. But how are they going to trust each other? If Ali sends the money to Henrique, what if Henrique won’t send the phone? Or send a faulty one? If Henrique sends the phone first, what if Ali won’t pay?
            <br />
            Traditionally, two strangers rely on a “trusted” intermediary to solve this problem. For example they trust eBay / PayPal and these platforms act as “escrow”. If Ali pays but won’t receive the phone, he can complain to eBay/PayPal. Also, Henrique is guaranteed to receive his money as long as he sends the phone as described.

              </div>
              <span className="image">
                <img src={pic_escrow} alt="" />
              </span>
            </div>


            What if we can eliminate the intermediary and let Ali and Henrique deal with each other wihtout the fear of getting cheated?


            <br /><br />
            <b> Welcome to NoCon Escrow!</b>

            <br />
            With NoCon Escrow, Ali and Henrique can safely do the transaction and exchange the money/goods over the smart contract, no middle-man, How?
            <br />
            Ali and Henrique will both buy NoCon tokens, equivalent to the amount of the transaction. For example, if the agreed price is $450 and the NoCon token at the time is 1 NoCon = 50c then:
            <br />
            <b> Ali buys 900 NoCon = $450; and</b>
            <br />
            <b>Henrique buys 900 NoCon = $450</b>
            <br />
            Then, both Ali and Henrique stake their NoCon’s which will be kept in NoCon Escrow wallet until:
            <br />
            <b >Ali receives the phone, and confrims he’s received the phone as described; </b>
            <br />
            AND
            <br />
            <b> Henrique receives the money (in whatever currency they’ve agreed upon including crypto - more on this later), and confirms he’s received the money. </b>

            <br /><br />
            <img src={pic_sunny} alt="" width='100px' />
            <br />
            <b> Sunny Scenario :)</b>
            <br />


            Once both confirmations are received, the tokens will be released to the owners (less NoCon fees).


            <br /><br />
            <img src={pic_rainy} alt="" width='100px' />
            <br />
            <b> Rainy Scenario :)</b>
            <br />
            If Ali doesn’t get the phone or phone is faulty, and Henrique refuses to honor it, NoCon tokens for both Ali and Henrique will be released to Ali (Henrique’s tokens will compensate Ali).

            Henrique receives no token!
            <br />
            If Henrique doesn’t get the money but already sent the phone, and Ali refuses to pay, NoCon tokens for both Ali and Henrique will be released to Henrique (Ali’s tokens will compensate Henrique).

            Ali receives no token!
            <br />


          </section>




          <section id="content" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Sky's the Limit!</h2>
                </header>

                <p>NoContract Escrow can be used in virtually any transactions which tranditionally need a middle-man.</p>

              </div>
              <span className="image">
                <img src={pic_sky} alt="" />
              </span>
            </div>


            Below are just a few examples - let your imagination run wild!

            <br/><br/>

      
            <img src={pic_bike_sharing} alt="" width='100px' />
              <b> Bike Sharing </b>
              <br/><br/>

              <img src={pic_car_sharing} alt="" width='100px' />
              <b> Car Sharing (think Uber on Smart Contract) </b>
              <br/><br/>

              <img src={pic_scooter_sharing} alt="" width='100px' />
              <b> Scooter Sharing </b>
              <br/><br/>

              <img src={pic_house_renting} alt="" width='100px' />
              <b> House Renting (think AirBNB on Smart Contract!) </b>
              <br/><br/>

              <img src={pic_photo_selling} alt="" width='100px' />
              <b> Selling your photos and illustrations </b>
              <br/><br/>

   


 




          </section>




            </div>



      </Layout>
    )
  }
}

export default Generic
