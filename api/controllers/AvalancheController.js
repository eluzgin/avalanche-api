const { Avalanche, Buffer, BN } = require('avalanche');
const { Defaults } = require("avalanche/dist/utils");


exports.create_keys = function(req, res) {
  let networkID = req.body.networkID;
  let endpoint = req.body.endpoint;
  let avax = new Avalanche(endpoint, 443, "https", networkID);
  let xchain = avax.XChain();
  let keychain = xchain.keyChain();
  let keypair = keychain.makeKey();
  let response = {
    "address": keypair.getAddressString(),
    "publicKey": keypair.getPublicKeyString(),
    "privateKey": keypair.getPrivateKeyString()
  }
  res.json(response);
};

exports.send_avax = async function(req, res) {
  const networkID = req.body.networkID;
  const endpoint = req.body.endpoint;
  const privateKey = req.body.privateKey;
  const assetID = Defaults.network[networkID].X.avaxAssetID
  const amount = req.body.amount;
  const toAddress = req.body.toAddress;
  const memo = req.body.memo;
  const avax = new Avalanche(endpoint, 443, "https", networkID);
  const xchain = avax.XChain();
  const keychain = xchain.keyChain();
  keychain.importKey(privateKey);
  const addressStrings = keychain.getAddressStrings();
  const UTXOSet = await xchain.getUTXOs(addressStrings);
  const sendAmount = new BN(amount);
  const unsignedTx = await xchain.buildBaseTx(UTXOSet.utxos, sendAmount, assetID, [toAddress], addressStrings, addressStrings, Buffer.from(memo));
  const signedTx = unsignedTx.sign(keychain);
  const txid = await xchain.issueTx(signedTx);
  res.json(txid);
};
