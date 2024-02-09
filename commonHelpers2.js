import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as y}from"./assets/vendor-0cb09735.js";y.defaults.baseURL="https://energyflow.b.goit.study/api";const n=document.querySelector(".exercises-nav-list"),$=document.querySelector(".exercises-container"),w="https://energyflow.b.goit.study/api";n.addEventListener("click",E);l("Muscles").then(o);async function E(e){const{filter:s}=e.target.dataset;if(!s)return;await l(s).then(o);const a=n.querySelector(".active"),i=e.target;a.disabled=!1,i.disabled=!0,a.classList.remove("active"),i.classList.add("active")}async function l(e){return fetch(`${w}/filters?filter=${e}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function o(e){$.innerHTML=e.map(L).join("")}function L({name:e,filter:s,imgUrl:a}){return`
    <li class="exercise-card" data-filter="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${a}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}document.querySelector(".exercises-nav-list");const c=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const S=document.querySelector(".exercises-gallery"),q="https://energyflow.b.goit.study/api/",d="is-hidden";c.addEventListener("click",C);c.classList.remove(d);p("Muscles").then(u);async function C(e){console.log(e.target);const{filter:s}=e.target.dataset;s&&(await p(s).then(u),c.classList.add(d))}async function p(e){return fetch(`${q}exercises?filter=${e}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function k({bodyPart:e,target:s,name:a,burnedCalories:i,rating:t,time:r}){return`<li class = "list-exercises" data-filter="${a}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${t}</p><svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="../svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="../svg/icons.svg#icon-running-man"></use></svg></div>
            <p class="ex-name">${a}</p>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${i}/${r}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
            </li>`}function u(e){S.innerHTML=e.map(k).join("")}const B=document.querySelector(".start-btn"),M=document.querySelector(".modal-backdrop");B.addEventListener("click",T);function T(e){e.preventDefault(),j().then(R).catch()}function j(){return fetch("https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a2").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function R(e={}){const{_id:s,bodyPart:a,equipment:i,time:t,target:r,burnedCalories:v,gifUrl:m,name:x,popularity:g,rating:h,description:f}=e,b=`<div class="exercises-modal-window">
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
                src="${m}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container">
                <p class="exercise-name">${x}</p>
                <p class="exercise-rating">${h}</p>
              </div>
              <div class="exercise-params-container">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${r}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${i}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${g}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${v}/${t} m</p></li>
                </ul>
                
              </div>
              <p class="exercise-descr">${f}</p>
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
        </div>`;M.innerHTML=b}
//# sourceMappingURL=commonHelpers2.js.map
