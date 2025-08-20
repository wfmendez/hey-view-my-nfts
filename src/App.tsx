import './App.css';
import { ConnectWalletButton } from './components/ConnectWalletButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey, View my NFTs!</h1>
        <ConnectWalletButton />
      </header>
    </div>
  );
}

export default App;