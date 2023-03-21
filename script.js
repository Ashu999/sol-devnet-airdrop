const { Connection, PublicKey } = solanaWeb3;
async function submitForm() {
  var solanaPublicKey = document.getElementById('inputText').value;
  const connection = new Connection('https://api.devnet.solana.com');

  let publicKeyObject = new PublicKey(solanaPublicKey);
  let txhash = await connection.requestAirdrop(publicKeyObject, 1e9);
  document.getElementById('tx-id').append(txhash);
}
