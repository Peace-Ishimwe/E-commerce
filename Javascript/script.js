
let bigImg = document.querySelector('.big-img')
let smallImg = document.querySelector('.small-img')


for(let i = 0 ; i < smallImg.children.length ; i++){

    smallImg.children[i].addEventListener('click' , function(){
        let imgIndex  = i
        for(let j = 0 ; j < bigImg.children.length ; j++){
            bigImg.children[j].classList.remove('d-flex')
            bigImg.children[j].classList.add('d-none')
        }
        bigImg.children[i].classList.remove('d-none')
        bigImg.children[i].classList.add('d-flex')
    })

}

let body = document.querySelector('.blur')
let images = document.querySelector('.images')
let icon1 = document.querySelector('.icon1')
let icon2 = document.querySelector('.icon2')
let close = document.querySelector('.close')

bigImg.addEventListener('click' , function(){
    images.classList.add('zoom')
    body.classList.add('body')
    icon1.classList.remove('d-none')
    icon2.classList.remove('d-none')
    close.classList.remove('d-none')

})
close.addEventListener('click' , function(){
    images.classList.remove('zoom')
    body.classList.remove('body')
    icon1.classList.add('d-none')
    icon2.classList.add('d-none')
    close.classList.add('d-none')
})
  
for(let i = 0 ; i<bigImg.children.length; i){
    icon2.addEventListener('click' , function(){
        i++
        bigImg.children[i].classList.remove('d-none')
    })
}