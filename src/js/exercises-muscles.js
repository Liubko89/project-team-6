const containerMuscles = document.querySelector('.exercises-nav-list');
const exercisesContainer = document.querySelector('.exercises-container');
const BASE_URL = 'https://energyflow.b.goit.study/api';

containerMuscles.addEventListener('click', handleContainerMuscles);

getExercises('Muscles').then(renderExerciseCards);

async function handleContainerMuscles(evt) {
  const { filter } = evt.target.dataset;
  if (!filter) return;
  await getExercises(filter).then(renderExerciseCards);

  const prevBtn = containerMuscles.querySelector('.active');
  const nextBtn = evt.target;

  prevBtn.disabled = false;
  nextBtn.disabled = true;

  prevBtn.classList.remove('active');
  nextBtn.classList.add('active');
}

async function getExercises(filter) {
  return fetch(`${BASE_URL}/filters?filter=${filter}&page=1&limit=12`)
    .then(resp => resp.json())
    .then(data => data.results);
}

function renderExerciseCards(exercises) {
  exercisesContainer.innerHTML = exercises.map(buildExerciseCard);
}

function buildExerciseCard({ name, filter, imgUrl }) {
  return `
    <li class="exercise-card" data-filter="${name}">
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
