class Card {
    constructor(text){
        this.text = text
    }

    getDomCard(){
        const card = document.createElement('div')
        const cardFrontSide = document.createElement('div')
        const cardBackSide = document.createElement('div')

        card.className = 'card';
        cardFrontSide.className = 'card-side card-front'
        cardBackSide.className = 'card-side card-back'

        const backParagpaph = document.createElement('p')
        backParagpaph.innerHTML = this.text

        cardBackSide.appendChild(backParagpaph)

        card.appendChild(cardFrontSide)
        card.appendChild(cardBackSide)

        return card
    }
}

const cards = [];

const btn = document.querySelector(".btn")
const cardContainer = document.querySelector(".card-container")

btn.addEventListener('click', function(e){
    card = new Card('bruuuuh');
    cards.push(card)
    e.preventDefault()
    cardContainer.appendChild(card.getDomCard())
    console.log(cardContainer)
})