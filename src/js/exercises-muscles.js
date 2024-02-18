const containerMuscles = document.querySelector('.exercises-nav-list');
const exercisesContainer = document.querySelector('.exercises-container');
const exerciseGroup = document.querySelector('.exercise-group');
const pagination = document.querySelector('.pagination');
const BASE_URL = 'https://energyflow.b.goit.study/api';
let currentFilter = 'Muscles';

containerMuscles.addEventListener('click', handleContainerMuscles);
pagination.addEventListener('click', handleSwitchPage);

getExercises(currentFilter).then(render);

export default async function handleContainerMuscles(evt) {
  const { filter } = evt.target.dataset;
  if (!filter) return;

  currentFilter = filter;

  await getExercises(filter).then(render);

  const prevBtn = containerMuscles.querySelector('.active');
  const nextBtn = evt.target;

  prevBtn.classList.remove('active');
  nextBtn.classList.add('active');
}

async function getExercises(filter, page = 1) {
  return fetch(
    `${BASE_URL}/filters?filter=${filter}&page=${page}&limit=12`
  ).then(resp => resp.json());
}

function render({ results, page, totalPages }) {
  renderExerciseCards(results);
  renderPagination(totalPages, page);
}

function renderExerciseCards(exercises) {
  exercisesContainer.innerHTML = exercises.map(buildExerciseCard).join('');
}

function buildExerciseCard({ name, filter, imgUrl }) {
  return `
    <li class="exercise-card" data-filter="${filter}" data-group="${name}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${imgUrl}" alt="${name}">
        <div class="container-text">
          <h3 class="description-category">${name}</h3>
          <p class="description-category-par">${filter}</p>
        </div>      
      </div>
    </li>
  `;
}

function renderPagination(pageCount, currentPage) {
  if (pageCount <= 1) {
    pagination.innerHTML = '';
    return;
  }

  pagination.innerHTML = Array(pageCount)
    .fill(1)
    .map((n, i) => n + i)
    .map(buildPageButton)
    .join('');

  const currentPageItem = pagination.children[currentPage - 1];

  currentPageItem.classList.add('active');
  // currentPageItem.firstElementChild.disabled = true;
}

function buildPageButton(i) {
  return `
    <li class="page" data-page="${i}">
      <button>${i}</button>
    </li>
  `;
}

function handleSwitchPage(evt) {
  const page = evt.target.closest('.page')?.dataset.page;

  if (!page) return;

  getExercises(currentFilter, page).then(render);
}

///////////////////////////
exercisesContainer.addEventListener('click', handleExerciseCardClick);

function handleExerciseCardClick(event) {
  const clickedElement = event.target;
  const exerciseCard = clickedElement.closest('.exercise-card');

  if (!exerciseCard) return;

  const name = exerciseCard.querySelector('.description-category').textContent;

  exerciseGroup.textContent = name;

  return exerciseGroup.textContent;
}
