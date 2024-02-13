import axios from "axios";

import {searchFilter, searchGroup, createExerciseCard, renderExerciseCards}  from'./exercises-body-parts'

const hiddenContainer = document.querySelector('.fetch-container'); //ok
const exercisesFilterSection = document.querySelector('.exercises-toolbar'); //ok
const searchContainer = document.querySelector('.search-container');// ok
const searchListEl = document.querySelector('.search-list'); //ok
const formEl = document.querySelector('.form-search')  // ok
const noResultsText = document.querySelector('.no-results') // ok
const searchPagination = document.querySelector('.search-pagination')

const cardsPerPage = innerWidth < 1440 ? 8 : 9; // ok
const hiddenClass = 'is-hidden';// ok

let query;
let currentArray;

formEl.addEventListener('submit', onSubmit);
searchPagination.addEventListener('click', handleSwitchPageSearch);

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
        searchContainer.classList.remove(hiddenClass);
        noResultsText.classList.remove(hiddenClass);
        exercisesFilterSection.classList.add(hiddenClass);
        searchListEl.classList.add(hiddenClass);
        
        

          } else {              
        
            const {
             results: [{ bodyPart, target, name, burnedCalories, rating, time, _id }],
          } = data.data;
        // console.log(data);
        searchContainer.classList.remove(hiddenClass);
        searchListEl.classList.remove(hiddenClass);
        noResultsText.classList.add(hiddenClass);    
        exercisesFilterSection.classList.add(hiddenClass);
        
          
        currentArray = data.data.results;
        
          // console.log('TODO: малюэмо розмітку'); 
              
         searchListEl.innerHTML = currentArray.map(createExerciseCard).join('');


          }
          
  } catch (error) {
    console.log(error);
  } finally {
    // console.log('блок finally');
    formEl.reset();
  }
}
//********пагінація *****/

function renderExercisePagination(page) {
  pageCount = Math.ceil(currentArray.length / cardsPerPage);

  console.log(currentArray);

  if (currentArray.length <= cardsPerPage) {
    searchPagination.innerHTML = '';
    return;
  }

  const a = Array(pageCount) //шо це?
  console.log(a);

  searchPagination.innerHTML = Array(pageCount)
    .fill(1)
    .map((n, i) => n + i)
    .map(
      i =>
        `<li class="page-exercises" data-page="${i}"><button id="prevPage">${i}</button></li>`
    )
    .join('');

  const currentPageItem = searchPagination.children[page - 1];

  currentPageItem.classList.add('active');
  // currentPageItem.firstElementChild.disabled = true;

  limitPagination(page);
}

function limitPagination(currentPage) {
  for (const pageItem of [...searchPagination.children]) {
    const page = +pageItem.dataset.page;

    if (
      page !== 1 &&
      page !== pageCount &&
      (page < currentPage - 3 || page > currentPage + 3)
    ) {
      pageItem.remove();
    }
  }
  const secondPage = searchPagination.children[1]?.dataset.page;
  const secondToLastPage =
    searchPagination.lastElementChild.previousElementSibling?.dataset.page;
  if (secondPage > 2) {
    searchPagination.firstElementChild.after('...');
  }
  if (secondToLastPage < pageCount - 1) {
    searchPagination.lastElementChild.before('...');
  }
}

function renderCards(page = 1) {
  const i = (page - 1) * cardsPerPage;

  const pageSearch = currentArray.slice(i, i + cardsPerPage);

  searchListEl.innerHTML = pageSearch.map(createExerciseCard).join('');

  renderExercisePagination(page);
}

function handleSwitchPageSearch(evt) {
  const page = +evt.target.closest('.page-exercises')?.dataset.page; //?.page-exercises'

  if (!page) return;

  renderCards(page);
}

// export {getQuotes, getFilter, getSearch} додати cardsPerPage, renderExercisePagination, 