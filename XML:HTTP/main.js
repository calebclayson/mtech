let deckId;

function loadDeck() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(httpRequest.response)
            if (response.success) {
                deckId = response.deck_id
            }
        }
    }

    httpRequest.open('GET', `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
    httpRequest.send();
}

function addOneCardP1() {
    let cardDrawRequest = new XMLHttpRequest();
    cardDrawRequest.onreadystatechange = () => {
        if (cardDrawRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(cardDrawRequest.response)
            if (response.success) {
                let card = `
                    <div class="card">
                        <img class="card-image" src="${response.cards[0].image}"/>
                    </div>
                `;
                document.getElementById('card-container-one').innerHTML += card;
            }
        }
    }

    cardDrawRequest.open('GET', `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    cardDrawRequest.send();
}

function addOneCardP2() {
    let cardDrawRequest = new XMLHttpRequest();
    cardDrawRequest.onreadystatechange = () => {
        if (cardDrawRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(cardDrawRequest.response)
            if (response.success) {
                let card2 = `
                    <div class="card2">
                        <img class="card-image" src="${response.cards[0].image}"/>
                    </div>
                `;
                document.getElementById('card-container-two').innerHTML += card2;
            }
        }
    }

    cardDrawRequest.open('GET', `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    cardDrawRequest.send();
}

function getTwoCards() {
    let cardDrawRequest = new XMLHttpRequest();
    cardDrawRequest.onreadystatechange = () => {
        if (cardDrawRequest.readyState == XMLHttpRequest.DONE) {
            let response = JSON.parse(cardDrawRequest.response)
            if (response.success) {
                let card = `
                    <div class="card">
                        <img class="card-image" src="${response.cards[0].image}"/>
                    </div>
                    <div class="card">
                        <img class="card-image" src="${response.cards[1].image}"/>
                    </div>
                `;
                let card2 = `
                    <div class="card2">
                        <img class="card-image" src="${response.cards[2].image}"/>
                    </div>
                    <div class="card2">
                        <img class="card-image" src="${response.cards[3].image}"/>
                    </div>
                `;
                document.getElementById('card-container-one').innerHTML += card;
                document.getElementById('card-container-two').innerHTML += card2;
            }
            $('.drawCard').css('display', 'none');
            $('.addCard').css('display', 'block');
        }
    }

    cardDrawRequest.open('GET', `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`);
    cardDrawRequest.send();
}