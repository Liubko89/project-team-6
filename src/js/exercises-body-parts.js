const containerMuscles = document.querySelector('.exercises-nav-list');
const listImagesEl = document.querySelector('.exercises-container');
const imageEl = document.querySelector('.exercise-card');
const listExercisesEl = document.querySelector('.exercises-gallery');

const BASE_URL = `https://energyflow.b.goit.study/api/`;
const hiddenClass = 'is-hidden';

listImagesEl.addEventListener('click', handleContainerMuscles);
listImagesEl.classList.remove(hiddenClass);
getExercises('Muscles').then(renderExerciseCards);

async function handleContainerMuscles(evt) {
  console.log(evt.target);
  const { filter } = evt.target.dataset;

  if (!filter) return;

  await getExercises(filter).then(renderExerciseCards);
  listImagesEl.classList.add(hiddenClass);
}

async function getExercises(filter) {
  return fetch(`${BASE_URL}exercises?filter=${filter}&page=1&limit=12`)
    .then(resp => resp.json())
    .then(data => data.results);
}

function createExerciseCard({
  bodyPart,
  target,
  name,
  burnedCalories,
  rating,
  time,
}) {
  return `<li class = "list-exercises" data-filter="${name}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${rating}</p><svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="../svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="../svg/icons.svg#icon-running-man"></use></svg></div>
            <p class="ex-name">${name}</p>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${burnedCalories}/${time}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${bodyPart}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${target}</p></div>
            </div>
            </li>`;
}

function renderExerciseCards(exercises) {
  listExercisesEl.innerHTML = exercises.map(createExerciseCard).join('');
}
