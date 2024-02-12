import axios from "axios";

import {searchFilter, searchGroup, createExerciseCard, renderExerciseCards}  from'./exercises-body-parts'

const hiddenContainer = document.querySelector('.fetch-container');
const exercisesFilterSection = document.querySelector('.exercises-toolbar');
const listExercisesEl = document.querySelector('.exercises-gallery');
const formEl = document.querySelector('.form-search')
const noResultsText = document.querySelector('.no-results')
const cardsPerPage = innerWidth < 1440 ? 8 : 9;

let query;
let currentArray;

formEl.addEventListener('submit', onSubmit);

// bodypart запит
function getSearchBodypart(group, query, page = 1, limit = 9) {
  return axios.get('/exercises', {
    params: {
        bodypart: group,
        keyword: query,
        page,
        limit,
    },
  });
}

// muscles запит
function getSearchMuscles(group, query, page = 1, limit = 9) {
  return axios.get('/exercises', {
    params: {
        muscles: group,
        keyword: query,
        page,
        limit,
    },
  });
}

// equipment запит
function getSearchEquipment(group, query, page = 1, limit = 9) {
  return axios.get('/exercises', {
    params: {
        equipment: group,
        keyword: query,
        page,
        limit,
    },
  });
}

// ******


async function onSubmit(event) {
  event.preventDefault();
  // noResultsText.classList.add('is-hidden')  
  
  query = event.currentTarget.elements['input-search'].value.trim();
       
    let data;
      
    try {
          if (searchFilter === 'Body parts') {
            
              data = await getSearchBodypart(searchGroup, query)
              
            } else if (searchFilter === 'Muscles') {
              
              data = await getSearchMuscles(searchGroup, query)
        
            } else if (searchFilter === 'Equipment') {
              
              data = await getSearchEquipment(searchGroup, query)
        
            }         
        
        const {
            totalPages,
            perPage,
            results,            
          } = data.data;
      
      // const array = data.data.results
        // console.log(data); 
        // console.log(totalPages); 
        
      if (totalPages  === null) {
         
        listExercisesEl.innerHTML = '<li class="no-results"> Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs. </li>';
        // noResultsText.classList.remove('is-hidden')
          } else {              
        

            const {
             results: [{ bodyPart, target, name, burnedCalories, rating, time, _id }],
          } = data.data;
        // console.log(data);
          
          hiddenContainer.classList.add('is-hidden');
         exercisesFilterSection.classList.remove('is-hidden');
        
          
        currentArray = data.data.results;
        
          // console.log('TODO: малюэмо розмітку'); 
              
        listExercisesEl.innerHTML = currentArray.map(createExerciseCard).join('');


          }
          
  } catch (error) {
    console.log(error);
  } finally {
    // console.log('блок finally');
    formEl.reset();
  }
}
//********пагінація *****/

// function renderExercisePagination(page) {
//   pageCount = Math.ceil(exercises.length / cardsPerPage);

//   if (exercises.length <= cardsPerPage) {
//     paginationExercises.innerHTML = '';
//     return;
//   }

//   paginationExercises.innerHTML = Array(pageCount)
//     .fill(1)
//     .map((n, i) => n + i)
//     .map(
//       i =>
//         `<li class="page-exercises" data-page="${i}"><button id="prevPage">${i}</button></li>`
//     )
//     .join('');

//   const currentPageItem = paginationExercises.children[page - 1];

//   currentPageItem.classList.add('active');
//   // currentPageItem.firstElementChild.disabled = true;

//   limitPagination(page);
// }

// function limitPagination(currentPage) {
//   for (const pageItem of [...paginationExercises.children]) {
//     const page = +pageItem.dataset.page;

//     if (
//       page !== 1 &&
//       page !== pageCount &&
//       (page < currentPage - 3 || page > currentPage + 3)
//     ) {
//       pageItem.remove();
//     }
//   }
//   const secondPage = paginationExercises.children[1]?.dataset.page;
//   const secondToLastPage =
//     paginationExercises.lastElementChild.previousElementSibling?.dataset.page;
//   if (secondPage > 2) {
//     paginationExercises.firstElementChild.after('...');
//   }
//   if (secondToLastPage < pageCount - 1) {
//     paginationExercises.lastElementChild.before('...');
//   }
// }

// function renderExerciseCards(page = 1) {
//   const i = (page - 1) * cardsPerPage;

//   const pageExercises = exercises.slice(i, i + cardsPerPage);

//   listExercisesEl.innerHTML = pageExercises.map(createExerciseCard).join('');

//   renderExercisePagination(page);
// }

// function handleSwitchPageExercises(evt) {
//   const page = +evt.target.closest('.page-exercises')?.dataset.page;

//   if (!page) return;

//   renderExerciseCards(page);
// }
// export {getQuotes, getFilter, getSearch} додати cardsPerPage, renderExercisePagination, 