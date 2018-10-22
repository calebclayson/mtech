let deckId;

function displayCards() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(httpRequest.response)
            if (response.success) {
                deckId = response.deck_id
            }
            getTwoCards(deckId);
        }
    }

    httpRequest.open('GET', `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    httpRequest.send();
}

function getTwoCards(deckId) {
    let cardDrawRequest = new XMLHttpRequest();
    cardDrawRequest.onreadystatechange = () => {
        if (cardDrawRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(cardDrawRequest.response)
            if (response.success) {
                let card = `
                    <div class="card">
                        <img src="${response.cards[0].image}"/>
                    </div>
                    <div class="card">
                        <img src="${response.cards[1].image}"/>
                    </div>
                `;
                document.getElementById('card-container').innerHTML = card;
            }
        }
    }

    cardDrawRequest.open('GET', `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    cardDrawRequest.send();
}