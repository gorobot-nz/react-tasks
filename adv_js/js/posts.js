const posts = new Map()
const users = new Map()
const comments = new Map()

const button = document.querySelector('#comment-button')
const commentsContainer = document.querySelector('#comments-container')

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

window.onload = async() => {
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

button.addEventListener('click', function(e) {
    console.log(commentsContainer.style.display)
    if (commentsContainer.style.display === 'none'){
        commentsContainer.style.display === 'flex'
        button.innerHTML = 'Hide'
    } else {
        commentsContainer.style.display === 'none'
        button.innerHTML = 'Show'
    }
})