const input = document.querySelector('#inputContainer')
const btn = document.getElementById('btn')
const body = document.getElementsByTagName('body')[0]

const createPost = function(){
    const newPost = document.createElement('div')
    const content = input.value
    const text = input.value
    const img = document.createElement('img')
    const post = document.createElement('h3')
    const hr = document.createElement('hr')
    const name = document.createElement('h2')
    const like = document.createElement('button')
    const comment = document.createElement('button')
    const share = document.createElement('button')

    newPost.classList.add('newPostForm')
    like.classList.add('btns')
    comment.classList.add('btns')
    share.classList.add('btns')
    name.classList.add('userName')
    img.classList.add('userImg')
    post.classList.add('postContent')

    share.innerText = "share"
    comment.innerText = "Add a comment"
    like.innerText = "Like"
    name.innerText = "Ahmad Kawasmi"
    post.innerText = text 

    img.src = 'images/nft7.png'


    like.addEventListener('click', function(){
        if(like.style.color == "gray"){
            like.style.color = "white"
            like.style.backgroundColor = "blue"
            like.innerText = "Liked"
        }else{
            like.style.color = "gray"
            like.style.backgroundColor = "white"
            like.innerText = "Like"
        }
    })

    body.append(newPost)
    newPost.append(img,name,post,hr,like,comment,share)
    input.value = ''
}
btn.addEventListener('click', createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }})