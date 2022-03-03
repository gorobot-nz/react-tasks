const albumCardsContainer = document.querySelector('#album-cards-container')
const albumCard = document.querySelector('#album-card')
const modalLayout = document.querySelector('#modal-layout')


albumCard.onclick = function(){
    albumCardsContainer.className='section-hidden'
    modalLayout.className='modal-layout'
}

modalLayout.onclick = function(){
    modalLayout.className='section-hidden'
    albumCardsContainer.className='album-cards-container'
}