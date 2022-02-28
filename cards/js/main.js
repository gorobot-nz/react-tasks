const cards = [];
const cardsMap = new Map();
let counter = 0;

const FIRST = 'first'
const LAST = 'last'

const addFirstbutton = document.querySelector("#insert-first")
const shufflebutton = document.querySelector("#shuffle")
const addLastbutton = document.querySelector("#insert-last")
const cardContainer = document.querySelector(".card-container")

class Card {

    constructor(text, color) {
        this.text = text
        this.color = color
        this.id = counter;
        counter++;
    }

    setCardSideStyles(element, name) {
        element.className = name
        element.style.background = this.color
    }

    getDomCard() {
        const card = document.createElement('div')
        const cardFrontSide = document.createElement('div')
        const cardBackSide = document.createElement('div')

        card.className = 'card';
        this.setCardSideStyles(cardFrontSide, 'card-side card-front')
        this.setCardSideStyles(cardBackSide, 'card-side card-back')

        const frontParagraph = document.createElement('p')
        frontParagraph.innerHTML = this.id

        const backParagpaph = document.createElement('p')
        backParagpaph.innerHTML = this.text

        cardFrontSide.appendChild(frontParagraph)
        cardBackSide.appendChild(backParagpaph)

        card.appendChild(cardFrontSide)
        card.appendChild(cardBackSide)

        return card
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }

    return color;
}

function getRandomSentence(length) {
    const words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];

    let sentence = "";

    for (let i = 0; i < length; i++) {
        sentence = `${sentence} ${words[Math.floor(Math.random() * words.length)]}`;
    }

    return sentence;
}

function createGradient() {
    let startColor = getRandomColor()
    let endColor = getRandomColor()

    return `linear-gradient(${startColor}, ${endColor})`
}

addFirstbutton.addEventListener('click', function (e) {
    e.preventDefault()
    createCard(FIRST)
})

addLastbutton.addEventListener('click', function (e) {
    e.preventDefault()
    createCard(LAST)
})

shufflebutton.addEventListener('click', function (e) {
    e.preventDefault()
    shuffle(cards)
    cardContainer.innerHTML = ''
    cards.forEach(card => render(card, LAST))
})

function createCard(position) {
    if (cards.length == 20) {
        alert("Enought cards")
        return
    }

    let sentence = getRandomSentence(10)
    let color = createGradient()

    const card = new Card(sentence, color)
    addToList(card, position)
}

function addToList(node, position) {
    if (position === FIRST) {
        cards.push(node.id)
    } else {
        cards.unshift(node.id)
    }
    cardsMap.set(node.id, node.getDomCard())
    render(node.id, position)
}

function render(id, position) {
    const node = cardsMap.get(id)
    if (position === FIRST) {
        cardContainer.insertBefore(node, cardContainer.firstChild)
    } else {
        cardContainer.appendChild(node)
    }
}