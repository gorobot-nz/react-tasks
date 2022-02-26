const btn = document.querySelector(".btn")
const cardContainer = document.querySelector(".card-container")

const card = document.createElement('div')
const cardFrontSide = document.createElement('div')
const cardBackSide = document.createElement('div')

card.className = 'card';
cardFrontSide.className = 'card-side card-front'
cardBackSide.className = 'card-side card-back'

const frontParagpaph = document.createElement('p')
frontParagpaph.innerHTML = 'front'

const backParagpaph = document.createElement('p')
backParagpaph.innerHTML = 'back'

cardFrontSide.appendChild(frontParagpaph)
cardBackSide.appendChild(backParagpaph)

card.appendChild(cardFrontSide)
card.appendChild(cardBackSide)

btn.addEventListener('click', function(e){
    e.preventDefault()
    cardContainer.appendChild(card)
    console.log(cardContainer)
})