
import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';

import bs58 from 'bs58';

const SendMessage = () => {
    const { publicKey, signMessage } = useWallet();

    const onClick = async () => {
        if (!publicKey) {
            alert('Wallet not connected');
            return;
        }
        if (!signMessage) {
            alert('Wallet does not support message signing');
            return;
        }

        const messageElement = document.getElementById('message') as HTMLInputElement;
        if (!messageElement) {
            alert('Message input not found');
            return;
        }

        const message = messageElement.value;
        const encodedMessage = new TextEncoder().encode(message);

        try {
            const signature = await signMessage(encodedMessage);
            const publicKeyBytes = publicKey.toBytes();
            
            // Verify the signature
            const isValid = ed25519.verify(signature, encodedMessage, publicKeyBytes);

            if (!isValid) {
                alert('Message signature invalid');
            } else {
                alert(`Message signature: ${bs58.encode(signature)}`);
            }
        } catch (error) {
         console.log(error)
        }
    };

    return (
     
     <div className="space-y-4">
            <input
              id="message" type="text" placeholder="Enter message"    onChange={(e) => (e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
                onClick={onClick}
                className="w-full px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
                Sign Message
            </button>
          
        </div>
    );
};

export default SendMessage;
