const albums = new Map()
const photos = new Map()

class Album {
    constructor(id, title, userId) {
        this.id = id
        this.title = title
        this.userId = userId
    }

    getDomAlbumHeader(){
        const header = document.createElement('div')
        header.className = 'album-card-header'

        const headerTitle = document.createElement('div')
        headerTitle.className = 'album-title'

        const title = document.createElement('h1')
        title.innerHTML = this.title

        headerTitle.appendChild(title)
        header.appendChild(headerTitle)

        return header
    }

    getDomAlbumBody(photos){
        const photosContainer = document.createElement('div')
        photosContainer.className = 'album-card-photos'
        
        photos.forEach(item => {
            photosContainer.appendChild(item.getDomThumbinailPhoto())
        })

        return photosContainer
    }

    getDomAlbum(photos) {
        const albumCard = document.createElement('div')
        albumCard.id = `album-card-${this.id}`
        albumCard.className = 'album-card'

        albumCard.appendChild(this.getDomAlbumHeader())
        albumCard.appendChild(document.createElement('hr'))
        albumCard.appendChild(this.getDomAlbumBody(photos))

        return albumCard
    }
}

class Photo {
    constructor(id, albumId, title, url, thumbnailUrl) {
        this.id = id
        this.albumId = albumId
        this.title = title
        this.url = url
        this.thumbnailUrl = thumbnailUrl
    }

    getDomThumbinailPhoto(){
        const photoContainer = document.createElement('div')
        photoContainer.className = 'thumbnail-photo-container'

        const img = document.createElement('img')
        img.src = this.thumbnailUrl

        photoContainer.appendChild(img)
        return photoContainer
    }

    getDomPhoto(){
        const photoContainer = document.createElement('div')
        photoContainer.className = 'fullsize-photo-container'

        const img = document.createElement('img')
        img.src = this.url

        photoContainer.appendChild(img)
        return photoContainer
    }
}

window.onload = async () => {
    const albumsContainer = document.querySelector('#album-cards-container')

    await getAlbums()

    async function getAlbums() {
        const albumsResponce = await fetch('https://jsonplaceholder.typicode.com/albums')
        const albumsData = await albumsResponce.json()
        albumsData.forEach(async (item) => {
            const album = new Album(item.id, item.title, item.userId)
            albums.set(album.id, album)
            const thumbinailPhotos = await getPhotos(album.id)
            renderAlbum(album, thumbinailPhotos)
        });
    }

    async function getPhotos(albumId) {
        const photosResponce = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        const photosData = await photosResponce.json()

        const temp = new Array()

        photosData.forEach(async (item) => {
            const photo = new Photo(item.id, item.albumId, item.title, item.url, item.thumbnailUrl)
            temp.push(photo)
        });
        photos.set(albumId, temp)
        return temp.slice(0, 4)
    }

    function renderAlbum(album, photos) {
        const domAlbum = album.getDomAlbum(photos)
        albumsContainer.appendChild(domAlbum)
    }
}

const albumCardsContainer = document.querySelector('#album-cards-container')
const albumCard = document.querySelector('#album-card')
const modalLayout = document.querySelector('#modal-layout')



albumCard.onclick = function () {
    albumCardsContainer.className = 'section-hidden'
    modalLayout.className = 'modal-layout'
}

modalLayout.onclick = function () {
    modalLayout.className = 'section-hidden'
    albumCardsContainer.className = 'album-cards-container'
}