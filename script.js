var navIcon = document.querySelector('.side-nav-icon')
var navOptions = document.querySelector('.side-nav-options')

function sideNavBar() {
    navOptions.style.transform = 'translateX(0)'
}

var cancelMark = document.querySelector('.xmark')

function cancelSideNav() {
    navOptions.style.transform = 'translateX(-100%)'
}

var feedbackBox = document.querySelector('.feedback-box i')

function changeIcon(element) {
    element.classlist.remove('far');
    element.classlist.add('fas', 'active');
}

var slideImages= document.querySelectorAll('.slide-image img')
let index= 0;

function slideShowImage(){
    slideImages[index].classList.remove('active');
    index= (index + 1)%slideImages.length;
    slideImages[index].classList.add('active')
}
slideImages[0].classList.add('active')
setInterval(slideShowImage, 3000);
