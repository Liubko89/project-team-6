const startBtn = document.querySelector('.start-btn');
const modalEl = document.querySelector('.modal-backdrop');

startBtn.addEventListener('click', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  fetchExercises().then(modalWindowMarkup).catch();
}

function fetchExercises() {
  return fetch(
    'https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a2'
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
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

  const markup = `<div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="../svg/icons.svg#icon-close-btn"></use>
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
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${name}</p>
                <p class="modal-rating">${rating}</p>
              </div>
              <div class="exercise-params-container">
                <ul class="exercise-params">
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
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${burnedCalories}/${time} m</p>
              </div>
              <p class="exercise-description">${description}</p>
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
                  <use href="../svg/icons.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${_id}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;
}
