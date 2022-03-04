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
    const comment = document.createElement('input')
    comment.innerHTML = input
    post.innerText = text
    name.innerText = "Ahmad Kawasmi"
    name.style.marginLeft = "10%"
    img.style.width = "70px"
    img.style.borderRadius = "50%"
    img.src = 'images/nft2.jpg'
    body.append(img,name,post,comment,hr)
    input.value = ''
}
btn.addEventListener('click', createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }})