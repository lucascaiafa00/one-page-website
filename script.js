var services = document.querySelectorAll(".servico")
var currentService = 0

services[currentService].classList.add("show")

function changeService(direction) {
    services[currentService].classList.remove("show")
    
    direction = "next" ? currentService++ : currentService--
    
    if (currentService > 3) {
        currentService = 0
    } 
    else if(currentService < 0){
        currentService = 4
    }
    console.log(currentService);
    services[currentService].classList.add("show")
        
}
