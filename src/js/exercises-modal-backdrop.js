import axios from 'axios';
import icons from '../svg/icons.svg';

const modalBackdrop = document.querySelector('.modal-backdrop');
const startBtn = document.querySelector('.exercises-gallery');
const closebtn = document.querySelector('.exercise-close-btn');

const modalVisibility = 'is-open';

startBtn.addEventListener('click', handleClick);

async function handleClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const res = event.target.closest('li').id;
  console.dir(res);
  try {
    const obj = await axios.get(`/exercises/${res}`);
    console.log(obj.data);
    // modalEl.classList.add(hiddenClass);
    modalWindowMarkup(obj.data);
    modalBackdrop.classList.add(modalVisibility);
    // renderRatingStars(ratingEl);
  } catch {
    err => console.log(err);
  }
}

modalBackdrop.addEventListener('click', onBackDropClick);
// closebtn.addEventListener('click', onCloseBtn);
window.addEventListener('keydown', onWindowKeydown);

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBtn(event);
  }
}

// function onCloseBtnClick() {
//   modalBackdrop.classList.remove(modalVisibility);
// }

function onCloseBtn() {
  window.removeEventListener('keydown', onWindowKeydown);
  modalBackdrop.classList.remove(modalVisibility);
}

function onWindowKeydown(event) {
  if (event.code === 'Escape') {
    onCloseBtn(event);
  }
}

function modalWindowMarkup(filters = {}) {
  const {
    _id,
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
  } = filters;
  const markup = `<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
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
                <p class="exercise-rating">${rating}</p>
                <div class="rating-container"></div>
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
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="${_id}"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${icons}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${_id}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;
  modalBackdrop.innerHTML = markup;
}
