const home = document.getElementById('home')
const favorites = document.getElementById('favorites')
const back = document.querySelector('.back-image')
const quote = document.querySelector('.quote')
const favorites_m = document.querySelector('favorites-m')
const home_m = document.querySelector('home-m')

function onClickChange () {
    home.classList.remove('is-active')
    home.classList.add('no-active')
    favorites.classList.remove('no-active')
    favorites.classList.add('is-active')
    quote.classList.remove('container')

    back.style.display = "none"
}

onClickChange()