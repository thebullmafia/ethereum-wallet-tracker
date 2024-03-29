const ethers = require('ethers');

async function getWalletBalance(address) {
    // Ensure you're using a valid provider. Here, we use the default provider.
    const provider = new ethers.JsonRpcProvider("https://eth1.lava.build/lava-referer-37836702-36e2-4282-a2e6-a87bf2ef1dfe/");

    // Fetch the balance in wei
    const balanceInWei = await provider.getBalance(address);

    // Convert the balance to ether
    const balanceInEther = ethers.formatEther(balanceInWei);

    console.log(`Balance of ${address} is ${balanceInEther} ETH`);
    return balanceInEther;
}

// Example usage (Replace 'your_wallet_address_here' with an actual Ethereum wallet address)
const walletAddress = '0x62bCcF6Fb4A41167C9d58d063412632b8e95B366'; // <-- Replace with a real address

getWalletBalance(walletAddress).catch(console.error);
