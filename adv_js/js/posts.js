const posts = new Map()
const users = new Map()
const comments = new Map()

const buttons = document.querySelectorAll(`[id^="comment-button"]`);
const userAvatars = document.querySelectorAll(`[id^="user-avatar"]`)

console.log(userAvatars)

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
}

class Comment {
    constructor(id, postId, name, email, body) {
        this.id = id
        this.postId = postId
        this.name = name
        this.email = email
        this.body = body
    }
}

window.onload = async () => {
    const postsResponce = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postsData = await postsResponce.json()
    postsData.forEach(item => {
        const post = new Post(item.id, item.userId, item.title, item.body)
        posts.set(post.id, post)
    });

    const usersResponce = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await usersResponce.json()
    usersData.forEach(item => {
        const user = new User(item.id, item.name, item.username)
        users.set(user.id, user)
    });
}

buttons.forEach(button => {
    button.onclick = function (e) {
        const buttonId = e.target.id.split('-').pop()
        console.log(buttonId)
        const commentsContainer = document.querySelector(`#comments-container-${buttonId}`)
        console.log(commentsContainer)
        const className = commentsContainer.className
        if (className === 'section-hidden') {
            commentsContainer.className = 'comments-container'
            button.innerHTML = 'Hide'
        } else {
            commentsContainer.className = 'section-hidden'
            button.innerHTML = 'Show'
        }
    }
})

userAvatars.forEach(avatar => {
    avatar.onclick = function (e) { 
        const avatarId = e.target.id.split('-').pop() 
        console.log(avatarId)
        const userInfo = document.querySelector(`#user-info-${avatarId}`)
        const className = userInfo.className
        if (className === 'post-card-user-info-container') {
            userInfo.className = 'section-hidden'
        } else {
            userInfo.className = 'post-card-user-info-container'
        }
    }
})