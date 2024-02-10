import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as o,i as c}from"./assets/vendor-8cce9181.js";o.defaults.baseURL="https://energyflow.b.goit.study/api";const q=document.querySelector(".js-close-menu"),B=document.querySelector(".js-open-menu"),m=document.querySelector(".js-menu-container");q.addEventListener("click",M);B.addEventListener("click",C);function M(){m.classList.add("is-hidden")}function C(){m.classList.remove("is-hidden")}const g=document.querySelector(".exercises-nav-list"),T=document.querySelector(".exercises-container"),n=document.querySelector(".pagination"),k="https://energyflow.b.goit.study/api";let l="Muscles";g.addEventListener("click",R);n.addEventListener("click",U);d(l).then(p);async function R(e){const{filter:s}=e.target.dataset;if(!s)return;l=s,await d(s).then(p);const t=g.querySelector(".active"),i=e.target;t.disabled=!1,i.disabled=!0,t.classList.remove("active"),i.classList.add("active")}async function d(e,s=1){return fetch(`${k}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function p({results:e,page:s,totalPages:t}){j(e),I(t,s)}function j(e){T.innerHTML=e.map(H).join("")}function H({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function I(e,s){n.innerHTML=Array(e).fill(1).map((i,a)=>i+a).map(P).join("");const t=n.children[s-1];t.classList.add("active"),t.firstElementChild.disabled=!0}function P(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function U(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&d(l,s).then(p)}document.querySelector(".exercises-nav-list");const u=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const A=document.querySelector(".exercises-gallery"),O="https://energyflow.b.goit.study/api/",v="is-hidden";u.addEventListener("click",F);u.classList.remove(v);x("Muscles").then(f);async function F(e){console.log(e.target);const{filter:s}=e.target.dataset;s&&(await x(s).then(f),u.classList.add(v))}async function x(e){return fetch(`${O}exercises?filter=${e}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function _({bodyPart:e,target:s,name:t,burnedCalories:i,rating:a,time:r}){return`<li class = "list-exercises" data-filter="${t}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${a}</p><svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="../svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="../svg/icons.svg#icon-running-man"></use></svg></div>
            <p class="ex-name">${t}</p>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${i}/${r}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
            </li>`}function f(e){A.innerHTML=e.map(_).join("")}const h=document.querySelector(".modal-backdrop"),N=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const W="is-hidden";N.addEventListener("click",z);async function z(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest("[data-filter]").dataset.filter;(await o.get("https://energyflow.b.goit.study/api/exercises").then(i=>i.data.results).catch(i=>console.log(i))).map(i=>{i.name===s&&(h.classList.remove(W),D(i))})}function D(e={}){const{_id:s,bodyPart:t,equipment:i,time:a,target:r,burnedCalories:y,gifUrl:b,name:$,popularity:E,rating:w,description:L}=e,S=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="./svg/icons.svg#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${b}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${$}</p>
                <p class="exercise-rating">${w}</p>
              </div>
              <div class="exercise-params-container decorate-line">
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
                    <p class="exercise-param-value exercise-param-equipment">${i}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${E}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${y}/${a} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${L}</p>
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
                  <use href="./svg/icons.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${s}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;h.innerHTML=S}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const s=document.getElementById("emailInput").value;if(!G(s)){c.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}o.post("https://energyflow.b.goit.study/api/subscription",{email:s},{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t.data),c.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(t){console.error("Error:",t),c.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function G(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
