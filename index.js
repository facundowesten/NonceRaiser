const ethers = require("ethers");
const wallets = require("./wallets.json");
require('dotenv').config();

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);


(async () => {
    for(let x = 0; x < wallets.length; x++) {
        const wallet = new ethers.Wallet(wallets[x].privateKey, provider);
        const to = new ethers.Wallet.createRandom();

        const tx = await wallet.sendTransaction({
            to: to.address,
            value: ethers.parseUnits("1", "wei"),
        }).then(
            (tx) => {
                console.log("txHash: ",  tx);
            }  
        ).catch(
            (err) => {
                console.log("err: ", err);
            }
        );
     
    }})();