const posts = new Map()
const users = new Map()
const comments = new Map( )


class User {

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
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await responce.json()
    data.forEach(item => {
        const post = new Post(item.id, item.userId, item.title, item.body)
        posts.set(post.id, post)
    });
    console.log(posts)
}