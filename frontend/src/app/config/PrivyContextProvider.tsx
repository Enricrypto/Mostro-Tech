'use client';

import {PrivyProvider} from '@privy-io/react-auth';
import {toSolanaWalletConnectors} from "@privy-io/react-auth/solana";
import {useConnectWallet} from '@privy-io/react-auth';
import type { WalletListEntry } from '@privy-io/react-auth';
import { Button } from "@/components/ui/button"

//filtered wallet connexion propositions
const ConnectWalletButton = () => {
	const {connectWallet} = useConnectWallet();

	const handleClick = () => {
		connectWallet({ 
			walletChainType : "solana-only",
			walletList: [
      			"phantom",
				"metamask",
      			"solflare",
   			]
		});
	}
	return <div className="flex justify-end p-4">
			<Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handleClick}>Connect Wallet</Button>
		</div>

}

//
export default function Providers({children}: {children: React.ReactNode}) {
  return (
	  <PrivyProvider
      appId="cmgg0gpv2001igw0cz6w0c3r3"
      config={{
		  // Set privy to acces to existing solana wallet
		  appearance: {walletChainType: 'solana-only'},
		  externalWallets: {
			  solana: {connectors: toSolanaWalletConnectors()}
			},
			// Create embedded wallets for users who don't have a wallet
			embeddedWallets: {
				solana: {
					createOnLogin: 'users-without-wallets'
				}
			}
		}}
		>
		<ConnectWalletButton></ConnectWalletButton>
      {children}
    </PrivyProvider>
  );
}