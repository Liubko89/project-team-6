import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as p,i as u}from"./assets/vendor-edda1e25.js";p.defaults.baseURL="https://energyflow.b.goit.study/api";document.querySelector("container-muscles");document.querySelector("exercises-container");document.getElementById("muscles-button");document.getElementById("body-parts-button");document.getElementById("equipment-button");const i={formEl:document.querySelector(".form-search"),exercisesEl:document.querySelector(".exercises-gallery"),loaderGallery:document.querySelector(".loader-gallery")},v="is-hidden";let l="",m=1,f=0;const h="https://energyflow.b.goit.study/api/";async function $(e,a={}){try{const s=await p.get(h+e,{params:{filter:Muscles,bodypart:cardio,muscles:abs,equipment:cable,page:m,limit:10}});return console.log(data),s}catch(s){u.error({title:"Error",titleSize:"30",messageSize:"25",message:"Sorry! Try later! Server not working"}),console.error(s.message)}}i.formEl.addEventListener("submit",w);async function w(e){e.preventDefault(),i.exercisesEl.innerHTML="",m=1,console.log(e);const a=e.currentTarget;if(l=a.elements.query.value,!l){i.loaderGallery.classList.add(v),u.show({title:"❌",messageColor:"white",message:"Sorry, You have not entered any word.Please try again!",position:"topRight",color:"grey"});return}try{const{totalPages:s,data:{results:r}}=await $(l);if(s===0)return;f=Math.ceil(s/10),E(r)}catch{console.log(console.error)}finally{a.reset(),alert("wrong")}}function E(e={}){const{bodyPart:a,target:s,name:r,burnedCalories:c,rating:o,time:n}=e,t=`<li class = "list-exercises"><div class="options">
        <p class="options-item"> WORKOUT</p>
        <span class="options-item-span">${o}</span>
        <button type = "button" >START</button>
        <p class="options-item"> <span class="options-item-span">svg</span>${r}</p>
        <p class="options-item"> Burned calories:${c}/${n}</p>
        <p class="options-item">Body part:${a}</p>
        <p>Target:${s}</p></div>
        </li>`;t.join(""),i.exercisesEl.insertAdjacentHTML("beforeend",t)}const S=document.querySelector(".start-btn"),q=document.querySelector(".modal-backdrop");S.addEventListener("click",T);function T(e){e.preventDefault(),B().then(L).catch()}function B(){return fetch("https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a2").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function L(e={}){const{_id:a,bodyPart:s,equipment:r,time:c,target:o,burnedCalories:n,gifUrl:t,name:d,popularity:g,rating:y,description:x}=e,b=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="../svg/icons.svg#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${t}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container">
                <p class="exercise-name">${d}</p>
                <p class="exercise-rating">${y}</p>
              </div>
              <div class="exercise-params-container">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${o}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${s}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${r}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${g}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${n}/${c} m</p></li>
                </ul>
                
              </div>
              <p class="exercise-descr">${x}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="${a}"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="../svg/icons.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${a}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;q.innerHTML=b}
//# sourceMappingURL=commonHelpers2.js.map
