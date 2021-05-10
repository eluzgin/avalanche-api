const { Avalanche, BinTools, Buffer, BN } = require('avalanche');

let bintools = BinTools.getInstance();


exports.create_keys = function(req, res) {
  let networkID = req.body.networkID;
  let blockchainID = req.body.blockchainID;
  let endpoint = req.body.endpoint;
  let ava = new Avalanche(endpoint, 443, "https", networkID, blockchainID);
  let xchain = ava.XChain();
  let keychain = xchain.keyChain();
  let keypair = keychain.makeKey();
  let response = {
    "address": keypair.getAddressString(),
    "publicKey": keypair.getPublicKeyString(),
    "privateKey": keypair.getPrivateKeyString()
  }
  res.json(response);
};

exports.sign_tx = async function(req, res) {
  let networkID = req.body.networkID;
  let blockchainID = req.body.blockchainID;
  let endpoint = req.body.endpoint;
  let privateKey = req.body.privateKey;
  let assetID = req.body.assetID;
  let amount = req.body.amount;
  let toAddress = req.body.toAddress;
  let memo = req.body.memo;
  let avax = new Avalanche(endpoint, 443, "https", networkID);
  let xchain = avax.XChain();
  let keychain = xchain.keyChain();
  let account = keychain.importKey(privateKey);
  const addresses = keychain.getAddresses();
  const addressStrings = keychain.getAddressStrings();
  console.log(addressStrings);
  const UTXOSet = await xchain.getUTXOs(addressStrings);
  let sendAmount = new BN(amount);
  console.log(sendAmount);
  let unsignedTx = await xchain.buildBaseTx(UTXOSet.utxos, sendAmount, assetID, [toAddress], addressStrings, addressStrings, memo);
  console.log(unsignedTx);
  let signedTx = unsignedTx.sign(keychain);
  let txid = xchain.issueTx(signedTx);
  let response = {
    "signedTx": signedTx,
    "txid": txid
  }
  res.json(response);
};
