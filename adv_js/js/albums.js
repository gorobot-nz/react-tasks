const albums = new Map()
const photos = new Map()
const users = new Map()

class User {
    constructor(id, name, username) {
        this.id = id
        this.name = name
        this.username = username
    }
}

class Album {
    constructor(id, title, userId) {
        this.id = id
        this.title = title
        this.userId = userId
    }

    getDomAlbumHeader() {
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

    getDomAlbumBody(photos) {
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

    getDomThumbinailPhoto() {
        const photoContainer = document.createElement('div')
        photoContainer.className = 'thumbnail-photo-container'

        const img = document.createElement('img')
        img.src = this.thumbnailUrl

        photoContainer.appendChild(img)
        return photoContainer
    }

    getDomPhoto() {
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
    const modalLayout = document.querySelector('#modal-layout')
    const modalTitle = document.querySelector('#modal-title')
    const modalContent = document.querySelector('#modal-content')
    const select = document.querySelector('#users-select')
    const mainLoader = document.querySelector('#main-loader')
    select.onchange = selectChange

    await getAlbums()
    await getUsers()

    renderSelect()


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

    async function getUsers() {
        const usersResponce = await fetch('https://jsonplaceholder.typicode.com/users')
        const usersData = await usersResponce.json()
        usersData.forEach(item => {
            const user = new User(item.id, item.name, item.username)
            users.set(user.id, user)
        });
    }

    async function getPhotos(albumId) {
        const photosResponce = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        const photosData = await photosResponce.json()

        const photosArray = new Array()

        photosData.forEach(async (item) => {
            const photo = new Photo(item.id, item.albumId, item.title, item.url, item.thumbnailUrl)
            photosArray.push(photo)
        });
        photos.set(albumId, photosArray)
        return photosArray.slice(0, 4)
    }

    function renderAlbum(album, photos) {
        const domAlbum = album.getDomAlbum(photos)
        domAlbum.onclick = openAlbum
        albumsContainer.appendChild(domAlbum)
    }

    function renderModal(albumId) {
        modalLayout.className = 'modal-layout'

        const album = albums.get(Number(albumId))
        const albumPhotos = photos.get(Number(albumId))

        const title = document.createElement('h1')
        title.innerHTML = album.title
        modalTitle.appendChild(title) 

        albumPhotos.forEach(photo => {
            modalContent.appendChild(photo.getDomPhoto())
        })
    }

    function openAlbum(e) {
        let node = e.target
        while (!node.id.startsWith('album-card')) {
            node = node.parentNode
        }
        const id = node.id.split('-').pop()
            renderModal(id)
    }

    function renderSelect() {
        users.forEach(user => {
            const option = document.createElement('option')
            option.innerHTML = user.name
            option.id = user.id
            select.appendChild(option)
        })
        mainLoader.className='section-hidden'
    }

    function selectChange(e) {
        const id = e.target.options[e.target.selectedIndex].id
        albumsContainer.innerHTML = ''
        if (id === '0') {
            albums.forEach(value => {
                const phs = photos.get(value.id).slice(0,4)
                renderAlbum(value, phs)
            })
        } else {
            const filteredAlbums = new Map(
                [...albums].filter(val => val[1].userId === Number(id))
            )
            filteredAlbums.forEach(value => {
                const phs = photos.get(value.id).slice(0,4)
                renderAlbum(value, phs)
            })
        }
    }

    modalLayout.onclick = function () {
        modalLayout.className = 'section-hidden'

        modalTitle.innerHTML = ''
        modalContent.innerHTML = ''
    }
}