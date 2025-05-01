let generated = false;

function getRandomColor() {
    const colors = ["#4CAF50", "#2196F3", "#FF5722", "#9C27B0", "#3F51B5"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateCard() {
    if (generated) {
        alert("Une seule carte par utilisateur !");
        return;
    }

    const type = document.getElementById("cardType").value;

    fetch("cards.json")
        .then(response => response.json())
        .then(data => {
            const cards = data[type];
            const card = cards[Math.floor(Math.random() * cards.length)];

            const display = document.getElementById("cardDisplay");
            const cardHTML = `
                <div class="card" style="background-color:${getRandomColor()}">
                    <h2>ePay (${type})</h2>
                    <p><strong>Nom :</strong> ${card.name}</p>
                    <p><strong>Numéro :</strong> ${card.number}</p>
                    <p><strong>CVV :</strong> ${card.cvv}</p>
                    <p><strong>Expiration :</strong> ${card.expiry}</p>
                </div>
            `;
            display.innerHTML = cardHTML;
            generated = true;
        });
}
