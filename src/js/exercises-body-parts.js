const containerMuscles = document.querySelector('.exercises-nav-list');
const hiddenContainer = document.querySelector('.exercises');
const exGroupCardList = document.querySelector('.exercises-container');
const imageEl = document.querySelector('.exercise-card');
const listExercisesEl = document.querySelector('.exercises-gallery');
const breadcrumb = document.querySelector('.header-box');
const filterBtn = document.querySelector('.exercises-search');
const exercisesFilterSection = document.querySelector(
  '.exercise-filters-section'
);

// let currentGroup = 'Waist';

const BASE_URL = `https://energyflow.b.goit.study/api/`;
const filterDict = {
  Muscles: 'muscles',
  'Body parts': 'bodypart',
  Equipment: 'equipment',
};
const hiddenClass = 'is-hidden';

exGroupCardList.addEventListener('click', handleGroupSelection);
hiddenContainer.classList.remove(hiddenClass);
exercisesFilterSection.classList.add(hiddenClass);

// getExercises('Muscles').then(renderExerciseCards);

async function handleGroupSelection(evt) {
  const card = evt.target.closest('.exercise-card');

  if (!card) return;
  // currentGroup = { group };
  const { filter, group } = card.dataset;

  await getExercises(filterDict[filter], group).then(renderExerciseCards);
  hiddenContainer.classList.add(hiddenClass);
  exercisesFilterSection.classList.remove(hiddenClass);
  filterBtn.addEventListener('click', handleBackClick);

  function handleBackClick(evt) {
    console.log(evt.target);
    if (currentTarget === evt.target) {
      hiddenContainer.classList.remove(hiddenClass);
      exercisesFilterSection.classList.add(hiddenClass);
    }
  }
}

async function getExercises(filter, group) {
  return fetch(`${BASE_URL}exercises?${filter}=${group}&page=1&limit=12`)
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
  _id,
}) {
  return `<li class = "list-exercises" id="${_id}" data-filter="${name}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${rating}</p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${name}</h4>
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
// function renderExerciseContainer({ results }) {
//   renderExerciseCards(results);
//   renderHeaderGroup(group);
// }

// function renderHeaderGroup(group) {
//   breadcrumb.insertAdjacentHTML(
//     'beforeend',
//     `<h3 class="exercise-group">${group}</h3>`
//   );
// }
