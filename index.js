const ethers = require('ethers');

async function getWalletBalance(address) {
    // Ensure you're using a valid provider. Here, we use the default provider.
    const provider = new ethers.JsonRpcProvider("Lava Eth End Point Url");

    // Fetch the balance in wei
    const balanceInWei = await provider.getBalance(address);

    // Convert the balance to ether
    const balanceInEther = ethers.formatEther(balanceInWei);

    console.log(`Balance of ${address} is ${balanceInEther} ETH`);
    return balanceInEther;
}

// Example usage (Replace 'your_wallet_address_here' with an actual Ethereum wallet address)
const walletAddress = 'your wallet address'; // <-- Replace with a real address

getWalletBalance(walletAddress).catch(console.error);
