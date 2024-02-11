import axios from "axios";

import {searchFilter, searchGroup, createExerciseCard, renderExerciseCards}  from'./exercises-body-parts'



// document.getElementById('submitIcon').addEventListener('click', function() {
//   formEl.submit();
// });


const formEl = document.querySelector('.form-search')
formEl.addEventListener('submit', onSubmit);


// getFilter(filter).then(console.log);

// https://energyflow.b.goit.study/api/exercises?muscles=abs&keyword=ball&page=1&limit=10
// https://energyflow.b.goit.study/api/exercises?bodypart=cardio&muscles=abs&equipment=band&keyword=side&page=1&limit=10  -  приклади запитів


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




// ***необхідні параметри для корректного виклику функції (потрібна логіка їх визначення)
// let bodypart = "";
// let muscles = "delts";
// let equipment = "";
let query;
// let group = "delts"

// getSearch(group, query).then(console.log);

// при використанні функцій використовувати async..wait  з try catch  або просто .then.catch


// ***************

async function onSubmit(event) {
    event.preventDefault();
    
  query = event.currentTarget.elements['input-search'].value.trim();
    console.log(query);
    console.log(searchFilter);
    console.log(searchGroup);
     
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
            results: [{ bodyPart, target, name, burnedCalories, rating, time, _id }],
        } = data.data;
        
        console.log(data); 
                
        console.log(bodyPart, target, name, burnedCalories, rating, time, _id); 
        
          if (data.data.results.length === 0) {
          
          console.log('TODO: Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.');
          } else {
              
              
            console.log('TODO: малюэмо розмітку'); 
            createExerciseCard({
                bodyPart,
                target,
                name,
                burnedCalories,
                rating,
                time,
                _id,
                }) 
              
              renderExerciseCards();

          }
          
  } catch (error) {
    console.log(error);
  } finally {

  }
}


// export {getQuotes, getFilter, getSearch}