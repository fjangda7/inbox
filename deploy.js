const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'choose chapter gap economy enrich space float convince light fuel crop index',
  'https://rinkeby.infura.io/v3/328bc9a93d424f1b82137b56d68e2920'
);

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts(); 
  console.log('attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['hi there!']})
    .send({gas: '1000000', from: accounts[0]});

  console.log('contract deployed to', result.options.address);

};

deploy();