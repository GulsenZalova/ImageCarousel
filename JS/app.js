let slideArea=document.querySelector(".slideArea")
let btnPrev=document.querySelector(".btn-prev")
let btnNext=document.querySelector(".btn-next")
let imageURLArr=[]

function getImage(){
     fetch("https://source.unsplash.com/random")
    .then(res=>{
        slideArea.innerHTML = "";
        let imageURL=res.url
        imageURLArr.push(imageURL)

        if(imageURLArr.length>5){
            imageURLArr.shift()
        }    
        renderImage()   
    })

//    console.log(imageURLArr,imageURLArr.length)
    
}

function renderImage(){
    for(let i=0;i<imageURLArr.length;i++){
        let newImg=document.createElement("img")
        newImg.src=imageURLArr[i]
        // newImg.id=i
        slideArea.appendChild(newImg)
    }
    let imgs=document.querySelectorAll("img")
    imgs[0].classList.add("active")
    imgs.forEach(img=>{
        if(img.nextElementSibling){
            img.classList.remove("active")
            img.nextElementSibling.classList.add("active")
        }
    })
}


btnNext.addEventListener("click",function(){
    let imgs=document.querySelectorAll("img")
    let activeImg=document.querySelector(".active")
    if(activeImg.nextElementSibling){
        activeImg.classList.remove("active")
        activeImg.nextElementSibling.classList.add("active")
    }else{
        activeImg.classList.remove("active")
        imgs[0].classList.add("active")
    }
 
})

btnPrev.addEventListener("click",function(){
    let imgs=document.querySelectorAll("img")
    let activeImg=document.querySelector(".active")
    if(activeImg.previousElementSibling){
        activeImg.classList.remove("active")
        activeImg.previousElementSibling.classList.add("active")
    }else{
        activeImg.classList.remove("active")
        imgs[imgs.length-1].classList.add("active")
    }
 
})
window.addEventListener("load",function(){
    getImage()
})

  setInterval(getImage,3000)


