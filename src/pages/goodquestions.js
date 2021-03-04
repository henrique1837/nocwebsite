import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Header from '../components/Header'
import pic04 from '../assets/images/faq-logo.png'

import { Link } from 'gatsby'

var acc = document.getElementsByClassName("accordion");
var i;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

class Generic extends React.Component {



  render() {

    return (

      <Layout>
        <Helmet title="Good Questions!" />
        <Header />
        <div id="main">
          <section id="content" className="main">
            <img src={pic04} alt="" width='500px' />
            <h2>Good Questions!</h2>

            {/* <p>What is NoContract?</p>
            <p>NoContract (NoCon) is a project to replace real-world physical contracts with Smart Ones!
            We remove 'trusted middle-man' from the traditional contracts, allowing parties to interact directly over smart contracts in a democratic environment.
            NoCon is DAO (Decentralised Autonomous Organisation), gonverned by a community of stakeholders.
                     </p> */}

            <button class="accordion">What is NoContract?</button>
            <div class="panel">
              <p>NoContract (NoCon) is a project to replace real-world physical contracts with Smart Ones!
              We remove 'trusted middle-man' from the traditional contracts, allowing parties to interact directly over smart contracts in a democratic environment.
              NoCon is DAO (Decentralised Autonomous Organisation), gonverned by a community of stakeholders.
                     </p>
            </div>

            <button class="accordion">What is NoContract Escrow?</button>
            <div class="panel">
              <p>
              <Link to="/noconescrow" >
                    NoContract Escrow
                  </Link>

              </p>
            </div>

            <button class="accordion">In Escrow, what if either party doesn’t have enough money (on top of agreed goods or services price) to buy tokens to stake in the escrow?</button>
            <div class="panel">
              <p>Parties can borrow tokens from other token holders in the network and pay a small interest (defined by the community / market) while the borrower have staked it in the escrow. As soon as parties approve they’ve received goods/cash, they’ll get the tokens back, and the borrower will return the token borrowed to the lender, stopping to pay interest fees.</p>
            </div>


            <button class="accordion">The price of NOC token is volatile due to market fluctuations, what if the price sharply goes down while the tokens are staked by the parties? </button>
            <div class="panel">
              <p>We can peg the token to a stable coin such as USDT</p>
            </div>


            <button class="accordion">How many tokens are in circulation?</button>
            <div class="panel">
              <p>
              Total number of tokens are LIMITED to 100M. Initially only a limited percentage of the total will be released in DeFi platforms.
              Each year on certain calnedar dates, (or based on community votes) more tokens will be released until total # of tokens reach 100% of the total tokens ie. 50M in circulation. 
              The community of stakeholders may also decide to "burn" tokens or buy them back to deflate the tokens and increase their values.
              </p>
            </div>


            <button class="accordion">Is NOC fungible or non-fungible? </button>
            <div class="panel">
              <p>NOC is a fungible token, so that each individual token (or fraction of a token) is equivalent to the next. </p>
            </div>

            <button class="accordion">How NoContract is governed? who makes decisions? </button>
            <div class="panel">
              <p>NoContract is inherently structured as a DAO and although there is a core team, decision making ultimately rests in the hands of the community. Decisions about future development and token releases are made collectively and democratically by the comunity of stake-holders. </p>
            </div>





          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
