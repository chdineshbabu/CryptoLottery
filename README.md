# 🎰 CryptoLottery DApp

A decentralized lottery application built with Next.js, Solidity, and Web3. Users can participate in a blockchain-based lottery by entering with 0.1 ETH, and the contract owner can pick a random winner who receives the entire pot.

## 🌟 Features

- **Decentralized Lottery**: Built on Ethereum blockchain using smart contracts
- **Web3 Integration**: Connect with MetaMask wallet
- **Real-time Updates**: Live lottery pot and player count updates
- **Winner History**: View previous lottery winners
- **Responsive Design**: Modern UI with CSS modules
- **Gas Optimization**: Efficient smart contract design

## 🏗️ Architecture

### Frontend (Next.js)
- **Framework**: Next.js 12.2.5 with React 18
- **Web3**: Web3.js for blockchain interaction
- **Styling**: CSS Modules for component-specific styles
- **State Management**: React Context API for global state

### Backend (Smart Contracts)
- **Language**: Solidity ^0.8.15
- **Framework**: Truffle for development and deployment
- **Networks**: Goerli and Sepolia testnets
- **Provider**: Infura for blockchain connectivity

## 📁 Project Structure

```
CryptoLottery/
├── backend/                    # Smart contract development
│   ├── contracts/
│   │   └── Lottery.sol        # Main lottery contract
│   ├── migrations/
│   │   └── 1_deploy.js        # Deployment script
│   ├── build/
│   │   └── contracts/
│   │       └── Lottery.json   # Compiled contract ABI
│   └── truffle-config.js      # Truffle configuration
├── components/                 # React components
│   ├── ConnectWalletBtn.js    # Wallet connection button
│   ├── Header.js              # App header
│   ├── LotteryCard.js       # Lottery information card
│   ├── Table.js              # Players table
│   ├── TableRow.js           # Individual table row
│   └── UserCard.js           # User information card
├── context/
│   └── context.js            # React context for state management
├── pages/
│   ├── _app.js               # Next.js app wrapper
│   ├── index.js              # Main lottery page
│   └── api/
│       └── hello.js          # API route
├── styles/                   # CSS modules
│   ├── globals.css           # Global styles
│   ├── Header.module.css     # Header styles
│   ├── Home.module.css       # Home page styles
│   ├── PotCard.module.css    # Pot card styles
│   ├── Table.module.css      # Table styles
│   └── TableRow.module.css   # Table row styles
├── utils/
│   ├── constants.js          # Contract constants
│   ├── Lottery.json          # Contract ABI
│   └── lotteryContract.js    # Contract interaction utilities
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MetaMask browser extension
- Truffle (for smart contract development)
- Goerli or Sepolia testnet ETH

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CryptoLottery
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the backend directory with your wallet mnemonic:
   ```
   MNEMONIC=your_wallet_mnemonic_phrase_here
   INFURA_PROJECT_ID=your_infura_project_id
   ```

4. **Deploy smart contracts**
   ```bash
   cd backend
   truffle compile
   truffle migrate --network goerli  # or sepolia
   ```

5. **Update contract address**
   After deployment, update the contract address in `utils/constants.js` with the deployed contract address.

6. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🎮 How to Use

### For Players
1. **Connect Wallet**: Click "Connect Wallet" and approve the connection in MetaMask
2. **Enter Lottery**: Click "Enter Lottery" and confirm the 0.1 ETH transaction
3. **View Status**: See your entry in the players table and current lottery pot
4. **Wait for Winner**: The contract owner will pick a winner when ready

### For Contract Owner
1. **Connect as Owner**: Use the owner wallet to connect
2. **Pick Winner**: Click "Pick Winner" to randomly select and pay the winner
3. **View History**: See all previous winners in the winners list

## 🔧 Smart Contract Details

### Lottery Contract Functions

- `enter()`: Enter the lottery with 0.1 ETH minimum
- `getPlayers()`: Get list of current players
- `getBalance()`: Get current lottery pot
- `getLotteryId()`: Get current lottery round ID
- `pickWinner()`: Pick random winner (owner only)
- `getWinners()`: Get list of all winners

### Security Features

- **Access Control**: Only contract owner can pick winners
- **Minimum Entry**: 0.1 ETH minimum to prevent spam
- **Random Selection**: Uses block timestamp and owner address for randomness
- **Automatic Reset**: Players array resets after each winner selection

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Smart Contract Development

```bash
cd backend
truffle compile          # Compile contracts
truffle test            # Run tests
truffle migrate         # Deploy to local network
truffle migrate --network goerli  # Deploy to Goerli
```

## 🌐 Network Configuration

The application is configured for:
- **Goerli Testnet**: Primary test network
- **Sepolia Testnet**: Alternative test network
- **Infura**: Blockchain node provider

## 📦 Dependencies

### Frontend
- `next`: React framework
- `react`: UI library
- `web3`: Ethereum JavaScript API
- `@truffle/hdwallet-provider`: Wallet provider for Truffle
- `truncate-eth-address`: Address formatting utility

### Backend
- `truffle`: Development framework
- `@truffle/hdwallet-provider`: HD wallet provider
- `solc`: Solidity compiler

## 🔒 Security Considerations

- **Testnet Only**: This is for testing purposes only
- **Private Key Security**: Never commit private keys or mnemonics
- **Gas Limits**: Set appropriate gas limits for transactions
- **Randomness**: Current randomness is not cryptographically secure
- **Access Control**: Only deploy with trusted owner addresses

## 🚀 Deployment

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to Vercel, Netlify, or your preferred platform
3. Update contract address for production network

### Smart Contract Deployment
1. Update `truffle-config.js` with production network settings
2. Deploy to mainnet: `truffle migrate --network mainnet`
3. Verify contract on Etherscan
4. Update frontend with production contract address

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This is a demonstration project for educational purposes. The lottery system uses pseudo-random number generation and should not be used for real money without proper security audits and improvements.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the smart contract code

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Truffle Documentation](https://trufflesuite.com/docs)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [MetaMask Documentation](https://docs.metamask.io/)
