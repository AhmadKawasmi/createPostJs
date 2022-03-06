const input = document.querySelector('#inputContainer')
const btn = document.getElementById('btn')
const body = document.getElementsByTagName('body')[0]
const commentInputValue = document.querySelector('.commentInput')

const createPost = function(){
    const newPost = document.createElement('div')
    const text = input.value
    const img = document.createElement('img')
    const post = document.createElement('h3')
    const hr = document.createElement('hr')
    const name = document.createElement('h2')
    const like = document.createElement('button')
    const comment = document.createElement('button')
    const share = document.createElement('button')
    const commentInput = document.createElement('input')
    const commentSubmit = document.createElement('button')

    newPost.classList.add('newPostForm')
    like.classList.add('btns')
    comment.classList.add('btns')
    share.classList.add('btns')
    name.classList.add('userName')
    img.classList.add('userImg')
    post.classList.add('postContent')
    commentInput.classList.add('commentInput')
    commentSubmit.classList.add('btns')
    commentSubmit.classList.add('commentSubmit')

    share.innerText = "share"
    comment.innerText = "Add a comment"
    commentInput.placeholder = "Add a comment"
    commentSubmit.innerText = "Submit"
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

    comment.addEventListener('click',function(){
        if(comment.style.color == "gray"){
            commentInput.style.display ="block"
            commentSubmit.style.display = "block"
            comment.style.backgroundColor = "rgb(22, 44, 107)"
            comment.style.color = "white"
        }else{
            commentInput.style.display ="none"
            commentSubmit.style.display = "none"
            comment.style.backgroundColor = "white"
            comment.style.color = "gray"
        }
     
    })

    commentSubmit.addEventListener('click', function(){
         const commentDiv = document.getElementById('div')
         const commentValue = commentInputValue.value
         const comUserImg = document.createElement('img')
         const commentContent = document.createElement('h3')
         const commentName = document.createElement('h2')

        commentContent.innerText = commentValue
        comUserImg.src = 'images/nft7.png'

        
        newPost.append(commentDiv)
        commentDiv.append(comUserImg,commentName,commentContent)
        commentInput.value = ''
    })

    body.append(newPost)
    newPost.append(img,name,post,hr,like,comment,share,commentInput,commentSubmit)
    input.value = ''
}
btn.addEventListener('click', createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }})