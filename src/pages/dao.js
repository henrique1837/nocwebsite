import React from 'react'
import Helmet from 'react-helmet'
import Web3 from 'web3'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import Nav from '../components/NavPage'
import NOC from '../assets/contracts/NOC.json'
import NOCDAO from '../assets/contracts/NOCDAO.json'


const IPFS = require('ipfs-api');
const ipfs = new IPFS({host: "ipfs.infura.io", port: 5001, protocol: "https"});

class Generic extends React.Component {

  state = {
    events: []
  }

  constructor(props){
    super(props);
    this.voteOrPropose = this.voteOrPropose.bind(this);
    this.addSuggestion = this.addSuggestion.bind(this);
    this.handleEvents = this.handleEvents.bind(this);
    this.checkIsOnVote = this.checkIsOnVote.bind(this);
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
    const noc = new web3.eth.Contract(NOC.abi,NOC.goerli);
    const nocdao = new web3.eth.Contract(NOCDAO.abi,NOCDAO.goerli);
    const blockNumber = await web3.eth.getBlockNumber();
    const lastProposal = await nocdao.methods.latestProposal().call();
    const proposal = await nocdao.methods.proposal(lastProposal).call();
    const isOnVote = (proposal.blockLimit > blockNumber);
    this.setState({
      web3: web3,
      noc: noc,
      nocdao: nocdao,
      lastProposal: lastProposal,
      isOnVote: isOnVote
    })

    nocdao.events.SugestionAdded({
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

  voteOrPropose = async () => {
    const web3 = this.state.web3;
    const coinbase = await web3.eth.getCoinbase();
    await this.state.noc.methods.send(NOCDAO.goerli,web3.utils.toHex(this.state.total),this.state.data).send({from: coinbase})
  }

  addSuggestion = async () => {
    const web3 = this.state.web3;
    const coinbase = await web3.eth.getCoinbase();
    const res = await ipfs.add(Buffer.from(this.state.sugestion));
    await this.state.nocdao.methods.addSugestion(web3.utils.fromAscii(res[0].hash)).send({from: coinbase});
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

  checkIsOnVote = async() => {
    const web3 = this.state.web3;
    const nocdao = this.state.nocdao;
    const blockNumber = await web3.eth.getBlockNumber();
    const lastProposal = await nocdao.methods.latestProposal().call();
    const proposal = await nocdao.methods.proposal(lastProposal).call();
    const isOnVote = (proposal.blockLimit > blockNumber);
    this.setState({
      lastProposal: lastProposal,
      isOnVote: isOnVote
    })
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
                <h2>Last Proposal</h2>
                <p>{this.state.lastProposal}</p>
                {
                  (
                    this.state.isOnVote ?
                    (
                      <>
                      <button onClick={this.addSugestion}>Vote</button>
                      </>
                    ) :
                    (
                      <>
                      <h2>Add Proposal</h2>
                      <div>
                      <label>Total NOC</label>
                      <input type="text" onChange={this.handleOnChangeTotal} name="total" />
                      <label>Address</label>
                      <input type="text" onChange={this.handleOnChangeValue} name="proposal" />
                      <button onClick={this.addSugestion}>Add proposal</button>
                      </div>
                      </>
                    )
                  )
                }
                <h2>Add suggestion</h2>
                <div>
                <label>Description</label>
                <input type="text" onChange={this.handleOnChangeValue} name="sugestion" />
                <button onClick={this.addSuggestion}>Add sugestion</button>
                </div>
                {
                  (
                    this.state.events.length > 0 &&
                    (
                      <>
                      <h3>Suggestions added</h3>
                      <div>
                      {
                        this.state.events.map(string => {
                          const obj = JSON.parse(string);
                          const hash = that.state.web3.utils.toAscii(obj.returnValues.id);
                          return(
                            <div>
                              <hr />
                              <p>From: {obj.returnValues.from}</p>
                              <p>Id: {obj.returnValues.id}</p>
                              <p>Proposal: <a href={`https://ipfs.io/ipfs/${hash}`} target="_blank">{hash}</a></p>
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
