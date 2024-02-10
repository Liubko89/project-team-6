const home = document.getElementById('home')
const favorites = document.getElementById('favorites')



function onClickChange () {
    home.classList.remove('is-active')

    home.classList.add('no-active')

    favorites.classList.remove('no-active')


    favorites.classList.add('is-active')
}

onClickChange()