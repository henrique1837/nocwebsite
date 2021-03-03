import React from 'react'
import Helmet from 'react-helmet'
import Web3 from 'web3'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import Nav from '../components/NavPage'
import NOC from '../assets/contracts/NOC.json'
import NOCESCROW from '../assets/contracts/NOCEscrow.json'


const IPFS = require('ipfs-api');
const ipfs = new IPFS({host: "ipfs.infura.io", port: 5001, protocol: "https"});

class Generic extends React.Component {

  state = {
    events: []
  }

  constructor(props){
    super(props);
    this.addOffer = this.addOffer.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
    this.initWeb3 = this.initWeb3.bind(this);
    this.handleOnChangeTotal = this.handleOnChangeTotal.bind(this);
    this.handleOnChangeValue = this.handleOnChangeValue.bind(this);

  }

  componentDidMount = async () => {
    if(window.ethereum){
      await this.initWeb3();
    }
  }

  initWeb3 = async () => {
    await window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    const coinbase = await web3.eth.getCoinbase();
    const noc = new web3.eth.Contract(NOC.abi,NOC.goerli);
    const nocescrow = new web3.eth.Contract(NOCESCROW.abi,NOCESCROW.goerli);
    this.setState({
      web3: web3,
      coinbase: coinbase,
      noc: noc,
      nocescrow: nocescrow
    })

    nocescrow.events.OfferCreated({
      filter: {},
      fromBlock: 0
    },this.handleEvents);

  }

  handleOnChangeTotal = async e => {
    e.preventDefault();
    this.setState({
      total: (e.target.value*10**18).toFixed(0)
    })
  }

  handleOnChangeValue = async e => {
    e.preventDefault();
    this.state[e.target.name] = e.target.value;
    await this.forceUpdate();
  }



  addOffer = async () => {
    const web3 = this.state.web3;
    const coinbase = await web3.eth.getCoinbase();
    const obj = {
      name: this.state.name,
      description: this.state.description
    }
    const res = await ipfs.add(Buffer.from(JSON.stringify(obj)));
    console.log(web3.utils.fromAscii(res[0].hash))
    await this.state.noc.methods.send(NOCESCROW.goerli,web3.utils.toHex(this.state.total),[web3.utils.fromAscii(res[0].hash)]).send({from: coinbase})
  }

  acceptOffer = async (id,total) => {
    const web3 = this.state.web3;
    const coinbase = await web3.eth.getCoinbase();
    await this.state.noc.methods.send(NOCESCROW.goerli,web3.utils.toHex(total),[id]).send({from: coinbase})
  }

  handleEvents = async(err,res) => {
    const web3 = this.state.web3;
    const timestamp = (await web3.eth.getBlock(res.blockNumber)).timestamp;
    const obj = {
      blockNumber: res.blockNumber,
      timestamp: timestamp,
      returnValues: res.returnValues
    }
    if(!this.state.events.includes(JSON.stringify(obj))){
      this.state.events.push(JSON.stringify(obj));
      await this.forceUpdate();
    }
  }


  render() {
    const that = this;
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
                <h2>Add Offer</h2>
                <div>
                <label>Total NOC</label>
                <input type="text" onChange={this.handleOnChangeTotal} name="total" />
                <label>Name</label>
                <input type="text" onChange={this.handleOnChangeValue} name="name" />
                <label>Description</label>
                <input type="text" onChange={this.handleOnChangeValue} name="description" />
                <button onClick={this.addOffer}>Add Offer</button>
                </div>
                {
                  (
                    this.state.events.length > 0 &&
                    (
                      <>
                      <h3>Offers Created</h3>
                      <div>
                      {
                        this.state.events.map(string => {
                          const obj = JSON.parse(string);
                          const hash = that.state.web3.utils.toAscii(obj.returnValues.id);
                          return(
                            <div>
                              <hr />
                              <p>From: {obj.returnValues.from}</p>
                              <p>Total NOC: {obj.returnValues.amount/10**18}</p>
                              <p>Id: {obj.returnValues.id}</p>
                              <p>Offer: <a href={`https://ipfs.io/ipfs/${hash}`} target="_blank">{hash}</a></p>
                              <p>{(new Date(obj.timestamp*1000)).toUTCString()}</p>
                            </div>
                          )
                        })
                      }
                      </div>
                      </>
                    )
                  )
                }
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
