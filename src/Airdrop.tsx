
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function RequestAirDrop(){
 
    const wallet=useWallet();
    const {connection}=useConnection()



     async function reqairdrop(){
         try {
        if(!wallet.publicKey){
        throw new Error("amount not send ")
       }
        let amount=Number((document.getElementById("amount") as HTMLInputElement).value);

             //user public key with the wallet connect 
      await connection.requestAirdrop(wallet.publicKey,amount*LAMPORTS_PER_SOL);
      alert("Airdropped"+amount +"SOL to"+wallet.publicKey?.toBase58())
         } catch (error) {
            console.log(error); 
         }
     }
    return <div className="space-y-4">
      <div className="flex space-x-4">
        <input
          type="text"
          id="amount"
          placeholder="Amount in SOL"
          className="  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={reqairdrop}
          className="px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Request Airdrop
        </button>
      </div>
     
    </div>

} 

