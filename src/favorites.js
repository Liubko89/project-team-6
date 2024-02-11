const home = document.getElementById('home')
const favorites = document.getElementById('favorites')
const back = document.querySelector('.back-image')
const quote = document.querySelector('.quote')
const text = document.querySelectorAll('.mob-nav-link')

function onClickChange () {
    home.classList.remove('is-active')
    home.classList.add('no-active')
    favorites.classList.remove('no-active')
    favorites.classList.add('is-active')
    quote.classList.remove('container')

    text[0].classList.remove('is-active')
    text[0].classList.add('no-active')
    text[1].classList.remove('no-active')
    text[1].classList.add('is-active')


    back.style.display = "none"
}

onClickChange()