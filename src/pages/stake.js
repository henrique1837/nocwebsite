import React from 'react'
import Helmet from 'react-helmet'
import Web3 from 'web3'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import Nav from '../components/NavPage'

import pic04 from '../assets/images/pic04.jpg'
import NOCSTAKER from '../assets/contracts/NOCStaker.json'
import NOC from '../assets/contracts/NOC.json'

class Generic extends React.Component {

  state = {

  }

  constructor(props){
    super(props);
    this.stake = this.stake.bind(this);
    this.initWeb3 = this.initWeb3.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentDidMount = async () => {
    if(window.ethereum){
      await this.initWeb3();
    }
  }

  initWeb3 = async () => {
    await window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    const noc = new web3.eth.Contract(NOC.abi,NOC.goerli);

    this.setState({
      web3: web3,
      noc: noc
    })
  }

  handleOnChange = async e => {
    e.preventDefault();
    this.setState({
      total: (e.target.value*10**18).toFixed(0)
    })
  }

  stake = async () => {
    const web3 = this.state.web3;
    const coinbase = await web3.eth.getCoinbase();
    await this.state.noc.methods.send(NOCSTAKER.goerli,web3.utils.toHex(this.state.total),[]).send({from: coinbase})
  }

  render() {

    return (
      <Layout>

        <Helmet title="Generic Page Title" />
        <HeaderGeneric />

        <Nav sticky={true} />

        <div id="main">
          <section id="content" className="main">
          {
            (
              this.state.web3 ?
              (
                <>
                {
                  /*
                  <span className="image main"><img src={pic04} alt="" /></span>
                  */
                }
                <h2>Stake NOC tokens</h2>
                <p>Stake NOC tokens to earn fees from escrow and DAO smart contracts</p>
                <div>
                <label>Total</label>
                <input type="text" onChange={this.handleOnChange} name="total" />
                <button onClick={this.stake}>Stake</button>
                </div>
                </>
              ) :
              (
                <p>Your browser does not support web3, install metamask</p>
              )
            )
          }
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
