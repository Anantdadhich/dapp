/*import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react'

export const ShowSolbalance = () => {
    const {connection}=useConnection();
    const wallet =useWallet();

    async function getbalancee(){
       if(wallet.publicKey){
        const balance=await connection.getBalance(wallet.publicKey);
        (document.getElementById("balance").innerHTML)=balance/LAMPORTS_PER_SOL;
       }
    }
    getbalancee();
  return (
    <div>
      <p>Per SOL</p>
      <div id='balance'>

      </div>
    </div>
  )
}
*/

import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export const ShowSolBalance = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const [balance, setBalance] = useState<number | null>(null);

    useEffect(() => {
        const getBalance = async () => {
            if (publicKey) {
                try {
                    const balance = await connection.getBalance(publicKey);
                    setBalance(balance / LAMPORTS_PER_SOL);
                } catch (error) {
                    console.error('Failed to fetch balance:', error);
                    setBalance(null);
                }
            } else {
                setBalance(null);
            }
        };

        getBalance();
        // Set up an interval to refresh the balance every 10 seconds
        const intervalId = setInterval(getBalance, 10000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [connection, publicKey]);

    return (
         <div className=" flex">
            <p className="text-xl font-semibold text-gray-700 "> Balance:</p>
            <div className=" bg-gray-100 rounded-md text-xl font-bold text-purple-600">
                {balance !== null 
                    ? `${balance.toFixed(4)} SOL`
                    : 'Connect your wallet to view balance'}
            </div>
        </div>
    );
};

