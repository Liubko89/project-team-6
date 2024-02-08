import axios from 'axios';
// import axios from './templates.js';
import iziToast from 'izitoast';

const refs = {
  formEl: document.querySelector('.form-search'),
  exercisesEl: document.querySelector('.exercises-gallery'),
  loaderGallery: document.querySelector('.loader-gallery'),
};

const hiddenClass = 'is-hidden';

let query = '';
let page = 1;
let maxPage = 0;

// async function getRequest(endPoint, attr = {}) {
//   try {
//     const response = await fetch(this.#baseURL + endPoint, attr);
//     if (!response.ok) {
//       throw new Error(`HTTP error, status: ${response.status}`);
//     }
//     return response.json();
//   } catch (error) {
//     throw error;
//   }
// }

// async objectGetRequest(endPoint) {
//   return this.#dbRequest(endPoint);
// }

const BASE_URL = `https://energyflow.b.goit.study/api/`;
const endPoint = `filters`;

async function getGallery(endPoint, resp = {}) {
  try {
    const response = await axios.get(BASE_URL + endPoint, {
      params: {
        filter: Muscles,
        bodypart: cardio,
        muscles: abs,
        equipment: cable,
        page,
        limit: 10,
      },
    });
    console.log(data);
    return response;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      titleSize: '30',
      messageSize: '25',
      message: 'Sorry! Try later! Server not working',
    });
    console.error(error.message);
  }
}
refs.formEl.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();

  refs.exercisesEl.innerHTML = '';
  //   refs.loaderGallery.classList.remove(hiddenClass);

  page = 1;
  console.log(event);
  const form = event.currentTarget;
  query = form.elements.query.value;

  if (!query) {
    refs.loaderGallery.classList.add(hiddenClass);
    iziToast.show({
      title: '❌',
      messageColor: 'white',
      message: 'Sorry, You have not entered any word.Please try again!',
      position: 'topRight',
      color: 'grey',
    });
    return;
  }

  try {
    const {
      totalPages,
      data: { results },
    } = await getGallery(query);
    if (totalPages === 0) {
      return;
    }

    maxPage = Math.ceil(totalPages / 10);
    createGallery(results);
  } catch (error) {
    console.log(console.error);
  } finally {
    form.reset();
    alert(`wrong`);
  }
}

function createGallery(filters = {}) {
  const { bodyPart, target, name, burnedCalories, rating, time } = filters;
  const markup = `<li class = "list-exercises"><div class="options">
        <p class="options-item"> WORKOUT</p>
        <span class="options-item-span">${rating}</span>
        <button type = "button" >START</button>
        <p class="options-item"> <span class="options-item-span">svg</span>${name}</p>
        <p class="options-item"> Burned calories:${burnedCalories}/${time}</p>
        <p class="options-item">Body part:${bodyPart}</p>
        <p>Target:${target}</p></div>
        </li>`;

  markup.join('');
  refs.exercisesEl.insertAdjacentHTML('beforeend', markup);
}
