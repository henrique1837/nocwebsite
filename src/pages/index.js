import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
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
                            <p>DAO can grow by itself without depending on its creator(s). <strong> We are a democracy! </strong> </p>
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


          <section id="first" className="main special">
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

          <section id="second" className="main">
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
            </ul>

            </div>
 
          </section>





          <section id="second" className="main special">
            <header className="major">
              <h2>NOC Token Economy</h2>
              <p>
              Total Supply (limited): 100M NOC’s
              <br/>
              Locked Public tokens: 45%
              <br/>
              Locked Development Token: 15%
              <br/>
              Liquidity BNB-NOC swap pair: 20%
              </p>
              <p>
              Locked token for founders, key contributors, advisors and seed investors : 20%
              </p>
            </header>
            <span className="image">
              <img src={require('../assets/images/tokenEconomy.png')} alt=""/>
            </span>
            {
              /*
              <ul className="statistics">
                <li className="style1">
                  <span className="icon fa-code-fork"></span>
                  <strong>5,120</strong> Etiam
                </li>
                <li className="style2">
                  <span className="icon fa-folder-open-o"></span>
                  <strong>8,192</strong> Magna
                </li>
                <li className="style3">
                  <span className="icon fa-signal"></span>
                  <strong>2,048</strong> Tempus
                </li>
                <li className="style4">
                  <span className="icon fa-laptop"></span>
                  <strong>4,096</strong> Aliquam
                </li>
                <li className="style5">
                  <span className="icon fa-diamond"></span>
                  <strong>1,024</strong> Nullam
                </li>
              </ul>
              */
            }


            <div className="content">
            <h3>How stakeholders will be rewarded?</h3>
            <ol style={{textAlign:'left'}}>
              <li>The token holder can HODL the token and sell for profit later</li>
              <li>The token holder can provide liquidity by buying a pair such as BNB-NOC in a DeFi swap - they will be rewarded for LP and the fees (outside NoCon DApp)</li>
              <li>The token holder can transfer their token to our Staker smart contract and get the fees from Escrow smart contract(inside NoCon DApp)</li>
            </ol>
            <h3>How developers will be rewarded?</h3>
              <p>This will be done by NoCon governance (voting).</p>
              <p>The devleoper will use token to propose their compensation and put it into vote, then the token holders will vote by using their tokens and decide the reward. The reward for the developers will come out of the “Rewards Pool” which is locked for release to the developers and contributors.</p>
            </div>
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

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
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
