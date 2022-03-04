const posts = new Map()
const users = new Map()

class User {
    constructor(id, name, username) {
        this.id = id
        this.name = name
        this.username = username
    }
}

class Post {
    constructor(id, userId, title, body) {
        this.id = id
        this.userId = userId
        this.title = title
        this.body = body
    }

    getDomHR() {
        return document.createElement('hr')
    }

    getDomPostHeader() {
        const header = document.createElement('div')
        header.className = 'post-card-header'

        const title = document.createElement('div')
        title.className = 'post-title'

        const titleInner = document.createElement('h1')
        titleInner.innerHTML = this.title

        title.appendChild(titleInner)

        const avatarContainer = document.createElement('div')
        avatarContainer.className = 'post-user-avatar'

        const img = document.createElement('img')
        img.id = `user-avatar-${this.id}`
        img.className = 'avatar'
        img.src = '../samples/c46888f9135c3b440f5d9060a345b35e.png'

        avatarContainer.appendChild(img)

        const userInfoContainer = document.createElement('div')
        userInfoContainer.id = `user-info-${this.id}`
        userInfoContainer.className = 'section-hidden'

        const userInfo = users.get(this.userId)

        const userName = document.createElement('div')
        userName.className = 'user-data'
        userName.innerHTML = userInfo.name

        const userUsername = document.createElement('div')
        userUsername.className = 'user-data'
        userUsername.innerHTML = userInfo.username


        userInfoContainer.appendChild(userName)
        userInfoContainer.appendChild(userUsername)

        header.appendChild(title)
        header.appendChild(avatarContainer)
        header.appendChild(userInfoContainer)

        return header
    }

    getDomPostBody() {
        const body = document.createElement('div')
        body.className = 'post-card-body'

        const paragraph = document.createElement('p')
        paragraph.innerHTML = this.body

        body.appendChild(paragraph)
        return body
    }

    getDomPostButton() {
        const buttonContainer = document.createElement('div')
        buttonContainer.className = 'post-card-button-container'

        const button = document.createElement('button')
        button.id = `comment-button-${this.id}`
        button.className = 'comment-button'
        button.innerHTML = 'Show'

        buttonContainer.appendChild(button)
        return buttonContainer
    }

    getDomPostComments() {
        const commentsContainer = document.createElement('div')
        commentsContainer.id = `comments-container-${this.id}`
        commentsContainer.className = 'section-hidden'
        return commentsContainer
    }

    getDomPost() {
        const postCard = document.createElement('div')
        postCard.className = 'post-card'

        postCard.appendChild(this.getDomPostHeader())
        postCard.appendChild(this.getDomHR())
        postCard.appendChild(this.getDomPostBody())
        postCard.appendChild(this.getDomHR())
        postCard.appendChild(this.getDomPostButton())
        postCard.appendChild(this.getDomPostComments())

        return postCard
    }
}

class Comment {
    constructor(id, postId, name, email, body) {
        this.id = id
        this.postId = postId
        this.name = name
        this.email = email
        this.body = body
    }

    getDomCommentHeader() {
        const header = document.createElement('div')
        header.className = 'comment-header'

        const headerName = document.createElement('div')
        headerName.className = 'comment-header-name'
        headerName.innerHTML = `Name: ${this.name}`

        const hr = document.createElement('hr')

        const headerMail = document.createElement('div')
        headerMail.className = 'comment-header-mail'
        headerMail.innerHTML = `Mail: ${this.email}`

        header.appendChild(headerName)
        header.appendChild(hr)
        header.appendChild(headerMail)

        return header
    }

    getDomCommentBody() {
        const body = document.createElement('div')
        body.className = 'comment-body'
        body.innerHTML = this.body

        return body
    }

    getDomComment() {
        const comment = document.createElement('div')
        comment.className = 'comment'

        comment.appendChild(this.getDomCommentHeader())
        comment.appendChild(document.createElement('hr'))
        comment.appendChild(this.getDomCommentBody())

        return comment
    }
}

window.onload = async () => {
    await getPosts()
    await getUsers()

    const main = document.querySelector('#main')

    posts.forEach(value => {
        renderCard(value.getDomPost())
    })

    const buttons = document.querySelectorAll(`[id^="comment-button"]`);
    const userAvatars = document.querySelectorAll(`[id^="user-avatar"]`)

    buttons.forEach(button => {
        button.onclick = async function (e) {
            const buttonId = e.target.id.split('-').pop()
            const commentsContainer = document.querySelector(`#comments-container-${buttonId}`)
            const className = commentsContainer.className
            if (className === 'section-hidden') {
                commentsContainer.className = 'comments-container'
                button.innerHTML = 'Hide'
                const comments = await getComments(buttonId)
                comments.forEach(value => {
                    renderComments(commentsContainer, value.getDomComment())
                })

            } else {
                commentsContainer.className = 'section-hidden'
                commentsContainer.innerHTML = ''
                button.innerHTML = 'Show'
            }
        }
    })

    userAvatars.forEach(avatar => {
        avatar.onclick = function (e) {
            const avatarId = e.target.id.split('-').pop()
            const userInfo = document.querySelector(`#user-info-${avatarId}`)
            const className = userInfo.className
            if (className === 'post-card-user-info-container') {
                userInfo.className = 'section-hidden'
            } else {
                userInfo.className = 'post-card-user-info-container'
            }
        }
    })

    async function getPosts() {
        const postsResponce = await fetch('https://jsonplaceholder.typicode.com/posts')
        const postsData = await postsResponce.json()
        postsData.forEach(item => {
            const post = new Post(item.id, item.userId, item.title, item.body)
            posts.set(post.id, post)
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

    async function getComments(postId) {

        const comments = new Map()

        const commentsResponce = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        const commentsData = await commentsResponce.json()
        commentsData.forEach(item => {
            const comment = new Comment(item.id, item.postId, item.name, item.email, item.body)
            comments.set(comment.id, comment)
        });

        return comments
    }

    function renderCard(card) {
        main.appendChild(card)
    }

    function renderComments(container, comment) {
        container.appendChild(comment)
    }
}