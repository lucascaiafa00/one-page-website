var services = document.querySelectorAll(".servico")
var currentService = 0
var currentImage = 0
var galleryOpen = false
let gallerys = document.querySelectorAll(".gallery")
let images = document.querySelectorAll(".gallery img")
let fullImageContainer = document.getElementById("full-img-container")
let fullImage = document.getElementById("full-img")

services[currentService].classList.add("show")

function changeService(direction) {
    services[currentService].classList.remove("show")
    
    direction === "next" ? currentService++ : currentService--
    
    if (currentService > 3) {
        currentService = 0
    } 
    else if(currentService < 0){
        currentService = 3
    }
    services[currentService].classList.add("show")
        
}

function showImages(serviceN) {
    if (galleryOpen == true) {
        gallerys[serviceN].classList.remove("show")
        galleryOpen = false
    } 
    else{
        gallerys[serviceN].classList.add("show")
        galleryOpen = true

    }
}

function closeImage() {
    fullImageContainer.classList.remove("show")
}

images.forEach(image => {
    image.onclick = ()=>{
        fullImage.src = image.getAttribute("data-full-image")
        fullImageContainer.classList.add("show")
    }
});
