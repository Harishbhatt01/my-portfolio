const navElement = document.querySelector('.nav-element');
const deletIcon = document.querySelector('.xmark-icon')

function mobileResponsiveNav(){
    document.querySelector('.logo').style.display = 'none'
    navElement.style.display = 'block';
    deletIcon.style.display = 'block';
    document.querySelector('.bar-icon').style.display = 'none'
}

deletIcon.addEventListener('click',()=>{
    navElement.style.display = 'none';
    deletIcon.style.display = 'none';
    document.querySelector('.logo').style.display = 'block'
    document.querySelector('.bar-icon').style.display = 'block'
})