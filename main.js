const input = document.querySelector('#inputContainer')
const btn = document.getElementById('btn')
const body = document.getElementsByTagName('body')[0]

const createPost = function(){
    const content = input.value
    const text = input.value
    const img = document.createElement('img')
    const post = document.createElement('h2')
    const hr = document.createElement('hr')
    const name = document.createElement('h2')
    const like = document.createElement('button')
    const comment = document.createElement('button')
    const share = document.createElement('button')

    share.innerText = "share"
    share.style.marginLeft = "10px"
    share.style.color = "gray"
    share.style.fontWeight = "bold"

    comment.innerText = "Add a comment"
    comment.style.marginLeft = "10px"
    comment.style.color = "gray"
    comment.style.fontWeight = "bold"

    like.innerText = "Like"
    like.style.color = "gray"
    like.style.fontWeight = "bold"
    like.style.cursor = "pointer"
    like.addEventListener('click', function(){
        if(like.style.color == "gray"){
            like.style.color = "blue"
            like.innerText = "Liked"
        }else{
            like.style.color = "gray"
            like.innerText = "Like"
        }
    })

    post.innerText = text

    name.innerText = "Ahmad Kawasmi"
    name.style.marginLeft = "10%"
    name.style.marginTop = "-10%"
    name.style.marginBottom = "5%"

    img.style.width = "70px"
    img.style.borderRadius = "50%"
    img.style.marginBottom = "5%"
    img.src = 'images/nft7.png'

    body.append(img,name,post,like,comment,share,hr)
    input.value = ''
}
btn.addEventListener('click', createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }})