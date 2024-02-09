import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as p,i as d}from"./assets/vendor-edda1e25.js";p.defaults.baseURL="https://energyflow.b.goit.study/api";const u=document.querySelector(".exercises-nav-list"),$=document.querySelector(".exercises-container"),w="https://energyflow.b.goit.study/api";u.addEventListener("click",E);m("Muscles").then(g);async function E(e){const{filter:s}=e.target.dataset;if(!s)return;await m(s).then(g);const a=u.querySelector(".active"),r=e.target;a.disabled=!1,r.disabled=!0,a.classList.remove("active"),r.classList.add("active")}async function m(e){return fetch(`${w}/filters?filter=${e}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function g(e){$.innerHTML=e.map(S).join("")}function S({name:e,filter:s,imgUrl:a}){return`
    <li class="exercise-card" data-filter="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${a}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}const i={formEl:document.querySelector(".form-search"),exercisesEl:document.querySelector(".exercises-gallery"),loaderGallery:document.querySelector(".loader-gallery")},q="is-hidden";let l="",x=1,L=0;const T="https://energyflow.b.goit.study/api/";async function M(e,s={}){try{const a=await p.get(T+e,{params:{filter:Muscles,bodypart:cardio,muscles:abs,equipment:cable,page:x,limit:10}});return console.log(data),a}catch(a){d.error({title:"Error",titleSize:"30",messageSize:"25",message:"Sorry! Try later! Server not working"}),console.error(a.message)}}i.formEl.addEventListener("submit",B);async function B(e){e.preventDefault(),i.exercisesEl.innerHTML="",x=1,console.log(e);const s=e.currentTarget;if(l=s.elements.query.value,!l){i.loaderGallery.classList.add(q),d.show({title:"❌",messageColor:"white",message:"Sorry, You have not entered any word.Please try again!",position:"topRight",color:"grey"});return}try{const{totalPages:a,data:{results:r}}=await M(l);if(a===0)return;L=Math.ceil(a/10),C(r)}catch{console.log(console.error)}finally{s.reset(),alert("wrong")}}function C(e={}){const{bodyPart:s,target:a,name:r,burnedCalories:c,rating:n,time:o}=e,t=`<li class = "list-exercises"><div class="options">
        <p class="options-item"> WORKOUT</p>
        <span class="options-item-span">${n}</span>
        <button type = "button" >START</button>
        <p class="options-item"> <span class="options-item-span">svg</span>${r}</p>
        <p class="options-item"> Burned calories:${c}/${o}</p>
        <p class="options-item">Body part:${s}</p>
        <p>Target:${a}</p></div>
        </li>`;t.join(""),i.exercisesEl.insertAdjacentHTML("beforeend",t)}const k=document.querySelector(".start-btn"),P=document.querySelector(".modal-backdrop");k.addEventListener("click",R);function R(e){e.preventDefault(),j().then(A).catch()}function j(){return fetch("https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a2").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function A(e={}){const{_id:s,bodyPart:a,equipment:r,time:c,target:n,burnedCalories:o,gifUrl:t,name:y,popularity:v,rating:f,description:b}=e,h=`<div class="exercises-modal-window">
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
                <p class="exercise-name">${y}</p>
                <p class="exercise-rating">${f}</p>
              </div>
              <div class="exercise-params-container">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${n}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${r}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${v}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${o}/${c} m</p></li>
                </ul>
                
              </div>
              <p class="exercise-descr">${b}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="${s}"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="../svg/icons.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${s}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;P.innerHTML=h}
//# sourceMappingURL=commonHelpers2.js.map
