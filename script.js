// JavaScript ajastimelle
const countdownElement = document.getElementById('countdown');
const countdownTime = 24 * 60 * 60 * 1000; // 24 tuntia millisekunneissa
let endTime = new Date().getTime() + countdownTime;

function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = endTime - now;

    if (timeLeft < 0) {
        endTime = new Date().getTime() + countdownTime;
        timeLeft = countdownTime;
    }

    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
}

setInterval(updateCountdown, 1000);
// Oletetaan, että 1€ = 1200 PEPE
const euroPerPepe = 1200;

function calculatePepeAmount(euroAmount) {
    return euroAmount * euroPerPepe;
}

const euroInput = document.getElementById('euroInput');
const pepeOutput = document.getElementById('pepeOutput');

euroInput.addEventListener('input', function() {
    const euroAmount = parseFloat(euroInput.value) || 0;
    pepeOutput.innerText = calculatePepeAmount(euroAmount) + " PEPE";
});
async function connectWalletAndPay() {
    if (window.solana) {
        try {
            // Connect to the user's wallet
            await window.solana.connect();
            const wallet = window.solana;

            const recipient = '9tF5acx2XK2P3Rh3WGt8PhazhjNeZMtSxrBdVUvDPq4k';
            const amount = parseFloat(document.getElementById('solAmount').value);

            if (amount <= 0) {
                alert("Enter a valid amount.");
                return;
            }

            // Create a transaction
            let transaction = new solanaWeb3.Transaction().add(
                solanaWeb3.SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: new solanaWeb3.PublicKey(recipient),
                    lamports: solanaWeb3.LAMPORTS_PER_SOL * amount // Convert SOL to lamports
                })
            );

            // Send the transaction
            let { signature } = await wallet.sendTransaction(transaction, connection);
            alert(`Transaction successful: ${signature}`);
        } catch (error) {
            console.error("Payment failed", error);
            alert('Transaction failed. Please try again.');
        }
    } else {
        alert('Solana wallet not found! Please install a Solana wallet extension like Phantom.');
    }
}
