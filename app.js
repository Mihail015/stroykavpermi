const leftBtn = document.querySelector('.left-button')
const rightBtn = document.querySelector('.right-button')
const headerContainer = document.querySelector('.header-container')
const headerSlide = document.querySelector('.header-slide')
const slidesCount = headerSlide.querySelectorAll('div').length
let activeSlideIndex = 0

leftBtn.addEventListener('click', () => {
    changeSlide("left")
})

rightBtn.addEventListener('click', () => {
    changeSlide("right")
})

headerSlide.style.width = `${slidesCount * 100}%`

function changeSlide(direction){
    if(direction === 'right'){
        activeSlideIndex++
        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0
        }
    } else if(direction === 'left'){
        activeSlideIndex--
    }if(activeSlideIndex < 0){
        activeSlideIndex = slidesCount -1
    }

    const width = headerContainer.clientWidth 
    headerSlide.style.transform = `translateX(-${activeSlideIndex * width + 0.5}px)`
}