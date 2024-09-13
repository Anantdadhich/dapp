/*
import { FC, useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Sendmessage from "./Sendmessage";

import '@solana/wallet-adapter-react-ui/styles.css';
import Sendtokens from "./Sendtokens";
import { RequestAirDrop } from "./Airdrop";
import { ShowSolBalance } from "./showSolbalance";
export const App:FC=()=>{
  const network=WalletAdapterNetwork.Devnet;

  const endpoint=useMemo(()=>clusterApiUrl(network),[network]);

  const wallets=useMemo(()=>[
    new UnsafeBurnerWalletAdapter(),

  ],[network]);
  
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
              <div className="flex gap-4 border-xl ">
              <WalletMultiButton></WalletMultiButton>
              <WalletDisconnectButton></WalletDisconnectButton>
              </div>
               connect
               <RequestAirDrop></RequestAirDrop>
               <ShowSolBalance></ShowSolBalance>
               <Sendmessage></Sendmessage>  
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
  
}

export default App;
*/

import { FC, useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import Sendmessage from "./Sendmessage";
import Sendtokens from "./Sendtokens";
import { RequestAirDrop } from "./Airdrop";
import { ShowSolBalance } from "./showSolbalance";

import '@solana/wallet-adapter-react-ui/styles.css';

export const App: FC = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-600 p-8">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Solana Wallet App</h1>
                <div className="flex justify-center space-x-4 mb-8">
                  <WalletMultiButton className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300" />
                  <WalletDisconnectButton className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Request Airdrop</h2>
                    <RequestAirDrop />
                  </div>
                  
                  <div className="bg-gray-100 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">SOL Balance</h2>
                    <ShowSolBalance />
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg shadow md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Send tokens</h2>
                    <Sendtokens/>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-lg shadow md:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Send Message</h2>
                    <Sendmessage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;