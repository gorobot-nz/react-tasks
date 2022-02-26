class Card {
    constructor(text, color){
        this.text = text
        this.color = color
    }

    getDomCard(){
        const card = document.createElement('div')
        const cardFrontSide = document.createElement('div')
        const cardBackSide = document.createElement('div')

        card.className = 'card';
        cardFrontSide.className = 'card-side card-front'
        cardBackSide.className = 'card-side card-back'
        cardFrontSide.style.backgroundColor = this.color
        cardBackSide.style.backgroundColor = this.color

        const backParagpaph = document.createElement('p')
        backParagpaph.innerHTML = this.text

        cardBackSide.appendChild(backParagpaph)

        card.appendChild(cardFrontSide)
        card.appendChild(cardBackSide)

        return card
    }
}

function getRandomColor() {       
    const letters = 'BCDEF'.split('');       
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

const cards = [];

const btn = document.querySelector(".btn")
const cardContainer = document.querySelector(".card-container")

window.addEventListener("load", function(event) {
    console.log(cardContainer)
});

btn.addEventListener('click', function(e){
    color = getRandomColor()
    sentence = getRandomSentence(20)    

    console.log(sentence)

    card = new Card(sentence, color)
    cards.push(card)
    e.preventDefault()
    cardContainer.appendChild(card.getDomCard())
    console.log(cardContainer)
})