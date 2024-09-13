import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";


const Sendtokens = () => {

    const wallet=useWallet();
    //it s an rpc connection that provide the conncetion to wallet 
    const {connection}=useConnection();

    async function sendtokens(){
         try {
            if(!wallet.publicKey){
                throw new Error("wallet not connect")
            }
      let to=(document.getElementById("to") as HTMLInputElement).value;
      const amount=Number((document.getElementById("amount") as HTMLInputElement).value);
         
          if(!to ||isNaN(amount)){
            throw new Error("invalid input")
           }

          const transaction=new Transaction();

          transaction.add(SystemProgram.transfer({
            fromPubkey:wallet.publicKey,
            toPubkey:new PublicKey(to),
            lamports:amount*LAMPORTS_PER_SOL,
          }));


           await  wallet.sendTransaction(transaction,connection);
       
           alert(`Sent ${amount} to Sol to ${to}`);
         } catch (error) {
            console.log(error); 
         }
    }
  return (
    <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
             
                     id="to"
                   placeholder="Recipient Address"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="number"
                     id="amount"
                    placeholder="Amount"
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    onClick={sendtokens}
                    className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                    Send Tokens
                </button>
            </div>
         
        </div>
  )
}

export default Sendtokens
