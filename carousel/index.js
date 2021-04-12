const carouselItem = document.querySelectorAll('.carousel-item');
const btnPrev = document.getElementById('carousel-button-prev')
const btnNext = document.getElementById('carousel-button-next')


// eventListener

function Hide() {
     for( i = 0; i < carouselItem.length; i++){
     carouselItem[i].classList.remove('carousel-item-visible')
    }
}



let n = 0
function Next(){
    Hide()
    if(n == carouselItem.length - 1){
        n = 0
    }else{
        n++
    }
    
    carouselItem[n].classList.add('carousel-item-visible')
}
btnNext.addEventListener('click', Next)







function Hidee() {
    for( i = 0; i < carouselItem.length; i++){
    carouselItem[i].classList.remove('carousel-item-visible')
   }
}



function Prev(){
   Hidee()
   if(n == 0){
      n = carouselItem.length = 0
  }else{
    n--
  }
  
   carouselItem[n].classList.add('carousel-item-visible')
}

btnPrev.addEventListener('click', Prev)