const posts = new Map()
const users = new Map()
const comments = new Map()

const button = document.querySelector('#comment-button')
const commentsContainer = document.querySelector('#comments-container')
const userAvatar = document.querySelector('#user-avatar')
const userInfo = document.querySelector('#user-info')

const check = document.getElementById('comments-container')

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

button.onclick = function(){
    const className = commentsContainer.className
    console.log(className)
    if (className === 'comments-container'){
        commentsContainer.className = 'section-hidden'
        button.innerHTML = 'Show'
    } else {
        commentsContainer.className = 'comments-container'
        button.innerHTML = 'Hide'
    }
}

userAvatar.onclick = function() {
    const className = userInfo.className
    if (className === 'post-card-user-info-container') {
        userInfo.className = 'section-hidden'
    } else {
        userInfo.className = 'post-card-user-info-container'
    }
}