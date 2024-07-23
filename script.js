document.getElementById('roll-dice').addEventListener('click', function() {
    let diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-result').textContent = `Heitit numeron: ${diceResult}`;
});

document.getElementById('deposit-crypto').addEventListener('click', function() {
    let amount = document.getElementById('crypto-amount').value;
    if (amount && amount > 0) {
        document.getElementById('deposit-result').textContent = `Talletit ${amount} kryptoja.`;
    } else {
        document.getElementById('deposit-result').textContent = `Syötä kelvollinen määrä.`;
    }
});
