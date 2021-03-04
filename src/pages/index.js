import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/noc-logo1.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>What is NoContract?</h2>
                </header> 
                            <p> NoContract (NoCon) is a project to replace real-world physical contracts with Smart Ones!!!</p>
                            <p>We remove 'trusted middle-man' from the traditional contracts, allowing parties to interact directly over smart contracts in a democratic environment.</p>
                            <p>NoCon is DAO (Decentralised Autonomous Organisation), gonverned by a community of stakeholders. This means NoCon is:</p>
                <ul>
                <li>Decentralised: Not governed by one single, centralised entity</li>
                <li>Autonomous: NoCon can automatically execute operations on its own without any intervention.</li>
                <li>Organisation: NoCon is governed by its own predetermined rules, like an organization. The rules to govern the organisation is determined by voting, and the majority will decide the future direction of the organisation.</li>

                </ul>
                            <p>DAO can grow by itself without depending on its creator(s). 
                              <br/>
                              <strong> It is a true a democracy! </strong> </p>
                {
                  /*
                  <ul className="actions">
                    <li>
                      <Link to="/generic" className="button">
                        Learn More
                      </Link>
                    </li>
                  </ul>
                  */
                }
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="tokenomic" className="main special">

            <header className="major">
              <h2>NOC Token Economy</h2>
              <span className="image">
              <img src={require('../assets/images/tokenEconomy.png')} alt="" width='100%'/>
            </span>
              <p>
              <strong> Total Supply (capped): 100M NOC’s </strong>
              <br/>
              Locked Public tokens: 45%
              <br/>
              Locked Development Token: 15%
              <br/>
              Liquidity BNB-NOC swap pair: 20%
              <br/>
              Locked token for founders, key contributors, advisors and seed investors : 20%

              </p>

            </header>
          </section>

          <section id="incentives" className="main special">
            <header className="major">
              <h2>Incentives and Rewards</h2>
              <div className="content" style={{textAlign:'left'}} > 
              NOC tokens have two major purposes:
            <br/>
            A. As the <b> staking token </b> to put into the Escrow smart contract to facilitate and approval of the mutual agreements between parties. 
            <br/>
            B. As the <b>currency </b> to be transferred from the buyer to the seller of goods and services. 
            <br/><br/>
            Other purposes include staking into Liquidity Pools and DAO governance (e.g. voting).  
            <br/><br/>
            <h3 >How stakeholders will be incentivised?</h3>

            
            <ol >
              <li>The token holder can <b> HODL </b> the token and sell for profit later, as the NOC token has intrinsic value (see purposes above) and will appreciate over time proportional to the number of users using the system.</li>
              <li>The token holder can <b>provide liquidity </b> by buying a pair such as BNB-NOC in a DeFi swap - they will be rewarded for LP and the fees (outside NoCon DApp).</li>
              <li>The token holder can <b> transfer </b> their token to our Staker smart contract and get the fees from Escrow smart contract (inside NoCon DApp).</li>
              <li>The token holder can <b> lend </b> their token to the parties who are initiating a mutual contract (e.g. to buy/sell goods). In this case, the lender will collect interest from the borrower. The interest rate will be driven by the market participants or negotiated between lender/borrower (outside NoCon Dapp).</li>
            </ol>
            <h3>How developers will be rewarded?</h3>
              This will be done through NoCon DAO governance (voting). 
              The devleopers will propose the compensation they think it's fair based on their level of contribution and put it into vote.
              The token holders will vote and either accept, decline or counter-offer the reward. The reward for the developers will come out of the “Development Pool” which is locked for release to the developers and contributors.
            </div>

            </header>
          </section>


          <section id="principles" className="main special">
            <header className="major">
              <h2>Key Principles</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Fully Transparent</h3>
                <p>
                  Voting and outcomes, compensations, token distribution, future direction. <b> Everything is public knowledge! </b>
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Governance</h3>
                <p>
                  Everyone who holds the NOC tokens owns a stake within the network, granting them voting rights in the ecosystem.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Limited Token Supply</h3>
                <p>
                  So you know your token value woudn't go anywhere but to the Moon!
                </p>
              </li>
            </ul>
            {
              /*
              <footer className="major">
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </footer>
              */
            }
          </section>

          <section id="roadmap" className="main">
            <header className="major">
              <h2>NOC Roadmap</h2>
              </header>
              <p>
              We have a long-term vision for NoContract project. However, we only lay-out our short to mid-terms roadmap for two reasons:
              <br/>
              1.  given the fast-moving nature of Smart Contracts world, protocols and technologies are progressing in an unprecedented rate; making our long term vision very likely to change; and (more importantly)
              <br/>
              2. This project is a DAO! It doesn’t matter what our visions are! After all, it’s the community who will decide about the direction of the project 😊              <br/>
              </p>  
            
            <span className="image">
              <img src={require('../assets/images/Roadmap.png')} alt="" width='100%'/>
            </span>

            <div className="content">
            <h3>Steps</h3>
            <ul style={{textAlign:'left'}}>
              <li> <b>PoC</b>  – create and test shell of the contract and all functions (Approve, Transfer, Receive..),  decide about protocol, DAO Governance code</li>
              <li> <b>MVP</b>  – build and test the MVP including DAO app, create and lock tokens, create contracts in TestNet (will be deployed to MainNet), first use-case = contract to buy/sell goods & services (think distributed eBay!) </li>
              <li><b>Audit</b> the code and smart contract security – make sure it’s watertight mate!</li>
              <li>List the initial tokens in PancakeSwap </li>
              <li><b>Into the wild (aka Go-live)!</b></li>
            </ul>
            <h3>Roadmap post go-live</h3>

            <ul style={{textAlign:'left'}}>
              <li><b>Contract Templates</b> - Pre defined contract templates to choose from such as bartering contract, care sales contract, insurance, employment etc.</li>
              <li><b>Dynamic Terms of Contract</b> - The parties can define terms of the contract like # of NOC tokens to stake</li>
              <li><b>User Defined Templates</b>: Community can create templates for others to use or even sell the template in the marketplace</li>
              <li><b>Use Collaterial</b> instead of fiat to buy/borrow NOC tokens and stake them</li>
              <li><b>Borrow NOC</b> - others can stake their tokens as collateral for your trade, and you pay interest to them while the contract is yet not approved by both parties</li>
              <li><b>NoContract API</b>  </li>
              <li><b>Distributed AirBnb</b>  </li>
            </ul>

            </div>
 
          </section>

          <section id="team" className="main special">
            <header className="major">
              <h2>The Team</h2>

            </header>
            <p>
              <span className="image">
              <img src={require('../assets/images/Henrique-photo.jpg')} width='196px' alt="" />
              </span>                
              Henrique lives in beautiful Oaxaca, Mexico with his wife. An accomplished individual in Smart Contract, Blockchain and DApp. Other than these cutting edge technologies, Henrique is fluent in more traditional languages: Portuguese, Spanish and English!
              Henrique leads Innovation and Emerging Technology at Logicore, with his main goal to make the world a better and fairer place for everyone!                <br />
                        
            </p>
            <p>
              <span className="image">
              <img src={require('../assets/images/Ali-photo.jpg')} width='196px' alt="" />
              </span>    
              Ali lives in Sydney, Australia. 
              With 15+ years of experience in several industries (Financial Services, Property, Telecom, Aviation, Transport, Education, Public & Health Care), 
              Ali has solid Enterprise, Solution and Integration Architecture background paired with excellent leadership and business acumen.
              <br/>
              Ali is passionate about distributed, demecratic organisations and in his free time he loves to do Calisthenics, in other words he's upside-down 50% of the times!
              <br />
            </p>
            <p>
              <span className="image">
              <img src={require('../assets/images/Anonymous-person.png')} width='196px' alt="" />
              </span>    
              Your name here, our next team member!
              <br />
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/goodquestions" className="button special">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/noconescrow" className="button">
                    NoContract Escrow
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
