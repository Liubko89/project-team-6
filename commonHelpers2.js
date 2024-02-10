import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as E}from"./assets/vendor-0cb09735.js";E.defaults.baseURL="https://energyflow.b.goit.study/api";const L=document.querySelector(".js-close-menu"),S=document.querySelector(".js-open-menu"),p=document.querySelector(".js-menu-container");L.addEventListener("click",q);S.addEventListener("click",M);function q(){p.classList.add("is-hidden")}function M(){p.classList.remove("is-hidden")}const u=document.querySelector(".exercises-nav-list"),k=document.querySelector(".exercises-container"),c=document.querySelector(".pagination"),B="https://energyflow.b.goit.study/api";let n="Muscles";u.addEventListener("click",C);c.addEventListener("click",A);o(n).then(l);async function C(e){const{filter:s}=e.target.dataset;if(!s)return;n=s,await o(s).then(l);const t=u.querySelector(".active"),a=e.target;t.disabled=!1,a.disabled=!0,t.classList.remove("active"),a.classList.add("active")}async function o(e,s=1){return fetch(`${B}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function l({results:e,page:s,totalPages:t}){T(e),H(t,s)}function T(e){k.innerHTML=e.map(j).join("")}function j({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function H(e,s){c.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(P).join("");const t=c.children[s-1];t.classList.add("active"),t.firstElementChild.disabled=!0}function P(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function A(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&o(n,s).then(l)}document.querySelector(".exercises-nav-list");const d=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const R=document.querySelector(".exercises-gallery"),U="https://energyflow.b.goit.study/api/",m="is-hidden";d.addEventListener("click",O);d.classList.remove(m);v("Muscles").then(g);async function O(e){console.log(e.target);const{filter:s}=e.target.dataset;s&&(await v(s).then(g),d.classList.add(m))}async function v(e){return fetch(`${U}exercises?filter=${e}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function _({bodyPart:e,target:s,name:t,burnedCalories:a,rating:i,time:r}){return`<li class = "list-exercises" data-filter="${t}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="../svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="../svg/icons.svg#icon-running-man"></use></svg></div>
            <p class="ex-name">${t}</p>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${r}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
            </li>`}function g(e){R.innerHTML=e.map(_).join("")}const I=document.querySelector(".start-btn"),W=document.querySelector(".modal-backdrop");I.addEventListener("click",D);function D(e){e.preventDefault(),F().then(G).catch()}function F(){return fetch("https://energyflow.b.goit.study/api/exercises/64f389465ae26083f39b17a2").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}function G(e={}){const{_id:s,bodyPart:t,equipment:a,time:i,target:r,burnedCalories:x,gifUrl:f,name:h,popularity:b,rating:y,description:$}=e,w=`<div class="exercises-modal-window">
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
                src="${f}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container">
                <p class="exercise-name">${h}</p>
                <p class="exercise-rating">${y}</p>
              </div>
              <div class="exercise-params-container">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${r}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${t}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${b}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${x}/${i} m</p></li>
                </ul>
                
              </div>
              <p class="exercise-descr">${$}</p>
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
        </div>`;W.innerHTML=w}
//# sourceMappingURL=commonHelpers2.js.map
