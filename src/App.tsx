import './App.css';
import { ConnectWalletButton } from './components/ConnectWalletButton';
import { useAccount } from 'wagmi';
import { useGetNfts } from './components/useGetNfts';
import type { Nft } from './types/nft';

function App() {
  const { address, isConnected } = useAccount();
  const { data: nfts, isLoading, isError } = useGetNfts(address);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey, View my NFTs!</h1>
        <ConnectWalletButton />
      </header>
      {isConnected && (
        <main>
          <h2>My NFTs</h2>
          {isLoading ? (
            <p>Loading NFTs...</p>
          ) : isError ? (
            <p>Error fetching NFTs.</p>
          ) : (
            <div className="nft-grid">
              {nfts.map((nft: Nft) => (
                <div key={nft.id.tokenId} className="nft-card">
                  <img src={nft.media[0]?.gateway} alt={nft.title} />
                  <h3>{nft.title}</h3>
                </div>
              ))}
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;