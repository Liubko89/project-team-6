import axios from 'axios';

const modalEl = document.querySelector('.modal-backdrop');
const startBtn = document.querySelector('.exercises-gallery');
const closebtn = document.querySelector('.exercise-close-btn');

const hiddenClass = 'is-hidden';

startBtn.addEventListener('click', handleClick);

async function handleClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const res = event.target.closest('[data-filter]').dataset.filter;
  const arr = await axios
    .get('https://energyflow.b.goit.study/api/exercises')
    .then(data => data.data.results)
    .catch(err => console.log(err));
  arr.map(el => {
    if (el.name === res) {
      modalEl.classList.remove(hiddenClass);
      modalWindowMarkup(el);
    }
    // onEscapeClick();
  });
}

// modalEl.addEventListener('keydown', onEscapeClick);

// function onEscapeClick(event) {
//   if (event.code !== 'Escape') {
//     return;
//   }
//   modalEl.classList.add(hiddenClass);
//   modalEl.removeEventListener('keydown', onEscapeClick);
// }

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
                <use href="./svg/icons.svg#icon-close-btn"></use>
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
                  <use href="./svg/icons.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${_id}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;
  modalEl.innerHTML = markup;
}

// closebtn.addEventListener('click', )
