$(function(){
    $('.slick__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        
    });
});

const loadBtn = document.getElementsByClassName('btn__loadMore')[0]
const moreSection = document.getElementsByClassName('loaded__content')[0]
const btnArea = document.getElementsByClassName('signUp__btn')[0]
// console.log(btnArea)
const loadNore = () => {
    moreSection.style.display = 'block'
    btnArea.style.display = 'none'

}
// console.dir(loadBtn)

loadBtn.onclick = loadNore