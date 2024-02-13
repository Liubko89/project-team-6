import icons from '/svg/icons.svg';
const home = document.getElementById('home');
const favorites = document.getElementById('favorites');
const back = document.querySelector('.back-image');
const quote = document.querySelector('.quote');
const text = document.querySelectorAll('.mob-nav-link');
const toDelete = document.querySelector('.content-no-favorites');
const gallery = document.querySelector('.gallery');
const favoritesBackdrop = document.querySelector('.favorites-backdrop');
const bodyOnScr = document.querySelector('body');

back.classList.add('is-hidden');

function onClickChange() {
  home.classList.remove('is-active');
  home.classList.add('no-active');
  favorites.classList.remove('no-active');
  favorites.classList.add('is-active');
  quote.classList.remove('container');

  text[0].classList.remove('is-active');
  text[0].classList.add('no-active');
  text[1].classList.remove('no-active');
  text[1].classList.add('is-active');
}

onClickChange();

const render = JSON.parse(localStorage.getItem('favorites'));

checkContent(render);

function checkContent(arr) {
  arr.length !== 0
    ? toDelete.classList.add('is-hidden')
    : toDelete.classList.remove('is-hidden');
}

function renderContent(arr) {
  return arr
    .map(
      ({
        bodyPart,
        name,
        _id,
        target,
        burnedCalories,
        time,
      }) => `<li class = "list-exercises" id="${_id}" data-filter="${name}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    
    <button class="trash-btn" id="trash" type="button">
    <svg class="icon-trash" width="18" height="18"><use href="${icons}#icon-trash"></use></svg>
    </button>
    
    </div>
  
    
    <button type = "button" class="btn-start-arrow" id="open">Start<svg class="icon-arrow" width="14" height="14"><use href="${icons}#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${icons}#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${name}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${burnedCalories}/${time}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${bodyPart}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${target}</p></div>
              </div>
             </li>`
    )
    .join('');
}

gallery.innerHTML = renderContent(render);

gallery.addEventListener('click', handleRemove);

function handleRemove(event) {
  if (event.target.closest('button').id === 'trash') {
    render.find((el, idx, arr) => {
      return el._id === event.target.closest('li').id
        ? arr.splice(idx, 1)
        : null;
    });
    localStorage.setItem('favorites', JSON.stringify(render));
    gallery.innerHTML = renderContent(render);
    checkContent(render);
  }

  if (event.target.closest('button').id === 'open') {
    favoritesBackdrop.classList.add('is-open');
    bodyOnScr.classList.add('on-scroll');
    const found = render.find(el => {
      return el._id === event.target.closest('li').id;
    });

    const {
      bodyPart,
      equipment,
      time,
      target,
      burnedCalories,
      gifUrl,
      name,
      popularity,
      rating,
      description,
    } = found;

    favoritesBackdrop.innerHTML = `<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${icons}#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${gifUrl}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${name}</p>
                <div class="rating-container">
                <p class="exercise-rating">${rating}</p>
                <div class="stars-wrap">
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${icons}#icon-star"></use>
                  </svg>
               </div>
                </div>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${target}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${bodyPart}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${equipment}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${popularity}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${burnedCalories}/${time} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${description}</p>
            </div>
          </div>
        </div>`;

    const stars = document.querySelectorAll('.stars-wrap-svg');
    getStars(stars, Math.round(rating));

    const closebtn = document.getElementById('modal-close-btn');
    closebtn.addEventListener('click', () => {
      favoritesBackdrop.classList.remove('is-open');
      bodyOnScr.classList.remove('on-scroll');
    });

    favoritesBackdrop.addEventListener('click', onBackDropClick);
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        onCloseBtn(event);
      }
    });
  }
}

function getStars(arr, rate) {
  arr.forEach((el, id) => {
    id < rate ? el.classList.add('yellow') : null;
  });
}

function onCloseBtn() {
  window.removeEventListener('keydown', onWindowKeydown);
  favoritesBackdrop.classList.remove('is-open');
  bodyOnScr.classList.remove('on-scroll');
}

function onWindowKeydown(event) {
  if (event.code === 'Escape') {
    onCloseBtn(event);
  }
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBtn(event);
  }
}
