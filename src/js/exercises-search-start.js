
import axios from "axios";


// ****запит цитати****
function getQuotes() {
  return axios.get('/quote');
}

// getQuotes().then(console.log);

// ***Запит Muscles/Body parts/ 

function getFilter(filter = 'Muscles', page = 1, limit = 12) {
  return axios.get('/filters', {
    params: {
      filter,
      page,
      limit,
    },
  });
}

//  const filter = 'Body parts'; //якщо змінювати значення filter будуть мінятися параметри запиту
// getFilter(filter).then(console.log);

/  https://energyflow.b.goit.study/api/exercises?muscles=abs&keyword=ball&page=1&limit=10
// https://energyflow.b.goit.study/api/exercises?bodypart=cardio&muscles=abs&equipment=band&keyword=side&page=1&limit=10  -  приклади запитів



function getSearch(bodypart, muscles, equipment, query, page = 1, limit = 9) {
  return axios.get('/exercises', {
    params: {
        bodypart,
        muscles,
        equipment,
        keyword: query,
        page,
        limit,
    },
  });
}

// ***необхідні параметри для корректного виклику функції (потрібна логіка їх визначення)
let bodypart = "";
let muscles = "delts";
let equipment = "";
let query = "";

getSearch(bodypart, muscles, equipment, query).then(console.log);

// при використанні функцій використовувати async..wait  з try catch  або просто .then.catch


// ***************

// async function onSubmit(event) {
//   event.preventDefault();
  
//   query = event.currentTarget.elements['search-query'].value.trim();
//   console.log(query);
//   page = 1;

//   try {
//     const {
//       data: { results, total_pages },
//     } = await getSearch(searchQuery, page, perPage);
//     if (results.length === 0) {
//       iziToast.error({
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//       });
//     }
//     console.log(results);
//     listEl.innerHTML = createMarkup(results);

//     hasMoreData(total_pages);
//   } catch (error) {
//     console.log(error);
//   } finally {
    
//   }
// }


export {getQuotes, getFilter, getSearch}