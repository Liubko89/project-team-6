const containerMuscles = document.querySelector('.exercises-nav-list');
const hiddenContainer = document.querySelector('.fetch-container');
const exGroupCardList = document.querySelector('.exercises-container');
const imageEl = document.querySelector('.exercise-card');
const listExercisesEl = document.querySelector('.exercises-gallery');
const breadcrumb = document.querySelector('.header-box');
const filterBtn = document.querySelector('.exercises-search');
const exercisesFilterSection = document.querySelector('.exercises-toolbar');
const musclesButton = document.getElementById('muscles-button');
const paginationExercises = document.querySelector('.pagination-exercises');
const cardsPerPage = innerWidth < 1440 ? 8 : 9;
const exercisesNavItem = document.querySelectorAll('.exercises-nav-item');

let exercises, pageCount;
let searchFilter;
let searchGroup;

paginationExercises.addEventListener('click', handleSwitchPageExercises);

// const equipmenBtn = document.getElementById('equipment-button');

// let currentGroup = 'Waist';

const BASE_URL = `https://energyflow.b.goit.study/api/`;
const filterDict = {
  Muscles: 'muscles',
  'Body parts': 'bodypart',
  Equipment: 'equipment',
};
const hiddenClass = 'is-hidden';

// function selectBtn() {
//   musclesButton.disabled = false;
//   musclesButton.classList.add('active-button');

//   const activeButton = document.querySelector('.exercises-button.active');
//   if (activeButton && activeButton !== musclesButton) {
//     activeButton.classList.remove('active-button');
//     activeButton.classList.add('inactive-button');
//   }
// }

exGroupCardList.addEventListener('click', handleGroupSelection);
hiddenContainer.classList.remove(hiddenClass);
exercisesFilterSection.classList.add(hiddenClass);

// getExercises('Muscles').then(renderExerciseCards);

async function handleGroupSelection(evt) {
  const card = evt.target.closest('.exercise-card');

  if (!card) return;
  // currentGroup = { group };
  const { filter, group, page } = card.dataset;

  searchFilter = filter;
  searchGroup = group;

  await getExercises(filterDict[filter], group).then(renderExerciseCards);
  hiddenContainer.classList.add(hiddenClass);
  exercisesFilterSection.classList.remove(hiddenClass);

  filterBtn.addEventListener('click', handleBackClick);

  function handleBackClick(evt) {
    console.log(evt.target);
    if (evt.currentTarget === filterBtn) {
      hiddenContainer.classList.remove(hiddenClass);
      exercisesFilterSection.classList.add(hiddenClass);
    }
  }
}

async function getExercises(filter, group) {
  return fetch(`${BASE_URL}exercises?${filter}=${group}&limit=1e6`)
    .then(resp => resp.json())
    .then(data => {
      exercises = data.results;
    });
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

function renderExercisePagination(page) {
  pageCount = Math.ceil(exercises.length / cardsPerPage);

  paginationExercises.innerHTML = Array(pageCount)
    .fill(1)
    .map((n, i) => n + i)
    .map(
      i =>
        `<li class="page-exercises" data-page="${i}"><button id="prevPage">${i}</button></li>`
    )
    .join('');

  const currentPageItem = paginationExercises.children[page - 1];

  currentPageItem.classList.add('active');
  // currentPageItem.firstElementChild.disabled = true;

  limitPagination(page);
}

function limitPagination(currentPage) {
  for (const pageItem of [...paginationExercises.children]) {
    const page = +pageItem.dataset.page;

    if (
      page !== 1 &&
      page !== pageCount &&
      (page < currentPage - 3 || page > currentPage + 3)
    ) {
      pageItem.remove();
    }
  }
  const secondPage = paginationExercises.children[1]?.dataset.page;
  const secondToLastPage =
    paginationExercises.lastElementChild.previousElementSibling?.dataset.page;
  if (secondPage > 2) {
    paginationExercises.firstElementChild.after('...');
  }
  if (secondToLastPage < pageCount - 1) {
    paginationExercises.lastElementChild.before('...');
  }
}

function renderExerciseCards(page = 1) {
  const i = (page - 1) * cardsPerPage;

  const pageExercises = exercises.slice(i, i + cardsPerPage);

  listExercisesEl.innerHTML = pageExercises.map(createExerciseCard).join('');

  renderExercisePagination(page);
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

function handleSwitchPageExercises(evt) {
  const page = +evt.target.closest('.page-exercises')?.dataset.page;

  if (!page) return;

  renderExerciseCards(page);
}

export { searchFilter, searchGroup, createExerciseCard, renderExerciseCards };
