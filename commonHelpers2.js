import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as w}from"./assets/vendor-0cb09735.js";w.defaults.baseURL="https://energyflow.b.goit.study/api";const p=document.querySelector(".exercises-nav-list"),E=document.querySelector(".exercises-container"),c=document.querySelector(".pagination"),L="https://energyflow.b.goit.study/api";let n="Muscles";p.addEventListener("click",S);c.addEventListener("click",M);l(n).then(o);async function S(e){const{filter:s}=e.target.dataset;if(!s)return;n=s,await l(s).then(o);const a=p.querySelector(".active"),t=e.target;a.disabled=!1,t.disabled=!0,a.classList.remove("active"),t.classList.add("active")}async function l(e,s=1){return fetch(`${L}/filters?filter=${e}&page=${s}&limit=12`).then(a=>a.json())}function o({results:e,page:s,totalPages:a}){q(e),k(a,s)}function q(e){E.innerHTML=e.map(C).join("")}function C({name:e,filter:s,imgUrl:a}){return`
    <li class="exercise-card" data-filter="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${a}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function k(e,s){c.innerHTML=Array(e).fill(1).map((t,i)=>t+i).map(B).join("");const a=c.children[s-1];a.classList.add("active"),a.firstElementChild.disabled=!0}function B(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function M(e){var a;const s=(a=e.target.closest(".page"))==null?void 0:a.dataset.page;s&&l(n,s).then(o)}document.querySelector(".exercises-nav-list");const d=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const T=document.querySelector(".exercises-gallery"),j="https://energyflow.b.goit.study/api/",u="is-hidden";d.addEventListener("click",P);d.classList.remove(u);m("Muscles").then(v);async function P(e){console.log(e.target);const{filter:s}=e.target.dataset;s&&(await m(s).then(v),d.classList.add(u))}async function m(e){return fetch(`${j}exercises?filter=${e}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function A({bodyPart:e,target:s,name:a,burnedCalories:t,rating:i,time:r}){return`<li class = "list-exercises" data-filter="${a}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="../svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="../svg/icons.svg#icon-running-man"></use></svg></div>
            <p class="ex-name">${a}</p>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${t}/${r}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
            </li>`}function v(e){T.innerHTML=e.map(A).join("")}const H=document.querySelector(".start-btn"),R=document.querySelector(".modal-backdrop");H.addEventListener("click",U);function U(e){e.preventDefault(),_().then(I).catch()}function _(){return fetch("https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a2").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function I(e={}){const{_id:s,bodyPart:a,equipment:t,time:i,target:r,burnedCalories:g,gifUrl:x,name:f,popularity:h,rating:b,description:y}=e,$=`<div class="exercises-modal-window">
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
                src="${x}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container">
                <p class="exercise-name">${f}</p>
                <p class="exercise-rating">${b}</p>
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
                    <p class="exercise-param-value exercise-param-equipment">${t}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${h}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${g}/${i} m</p></li>
                </ul>
                
              </div>
              <p class="exercise-descr">${y}</p>
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
        </div>`;R.innerHTML=$}
//# sourceMappingURL=commonHelpers2.js.map
