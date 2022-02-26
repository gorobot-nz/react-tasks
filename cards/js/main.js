class Card {
    constructor(text, color){
        this.text = text
        this.color = color
    }

    setCardSideStyles(element, name){
        element.className = name
        element.style.background = this.color
    }

    getDomCard(){
        const card = document.createElement('div')
        const cardFrontSide = document.createElement('div')
        const cardBackSide = document.createElement('div')

        card.className = 'card';
        this.setCardSideStyles(cardFrontSide, 'card-side card-front')
        this.setCardSideStyles(cardBackSide, 'card-side card-back')

        const backParagpaph = document.createElement('p')
        backParagpaph.innerHTML = this.text

        cardBackSide.appendChild(backParagpaph)

        card.appendChild(cardFrontSide)
        card.appendChild(cardBackSide)

        return card
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

function createGradient(){
    let startColor = getRandomColor()
    let endColor = getRandomColor()

    return `linear-gradient(${startColor}, ${endColor})`
}

const cards = [];

const FIRST = 'first'
const LAST = 'last'

const addFirstbutton = document.querySelector("#insert-first")
const addLastbutton = document.querySelector("#insert-last")
const cardContainer = document.querySelector(".card-container")

addFirstbutton.addEventListener('click', function(e) {
    e.preventDefault()
    createCard(FIRST)
})

addLastbutton.addEventListener('click', function(e) {
    e.preventDefault()
    createCard(LAST)
})

function createCard (position){
    if (cards.length == 20){
        alert("Enought cards")
        return
    }

    let sentence = getRandomSentence(20)    
    let color = createGradient()

    const card = new Card(sentence, color)
    addToList(card.getDomCard(), position)
}

function addToList(node, position){
    if (position === FIRST){
        cards.push(node)
    } else {
        cards.unshift(node)
    }
    render(node, position)
}

function render(node, position) {
    if (position === FIRST){
        cardContainer.insertBefore(node, cardContainer.firstChild)
    } else {
        cardContainer.appendChild(node)
    }
}