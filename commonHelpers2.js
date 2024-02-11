import"./assets/quote-dca74ff1.js";import{a as p,i as l}from"./assets/vendor-db25513e.js";p.defaults.baseURL="https://energyflow.b.goit.study/api";const v=document.querySelector(".exercises-nav-list"),f=document.querySelector(".exercises-container"),w=document.querySelector(".exercise-group"),n=document.querySelector(".pagination"),q="https://energyflow.b.goit.study/api";let m="Muscles";v.addEventListener("click",C);n.addEventListener("click",R);g(m).then(x);async function C(e){const{filter:t}=e.target.dataset;if(!t)return;m=t,await g(t).then(x);const s=v.querySelector(".active"),i=e.target;s.disabled=!1,i.disabled=!0,s.classList.remove("active"),i.classList.add("active")}async function g(e,t=1){return fetch(`${q}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function x({results:e,page:t,totalPages:s}){B(e),T(s,t)}function B(e){f.innerHTML=e.map(k).join("")}function k({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function T(e,t){if(e<=1){n.innerHTML="";return}n.innerHTML=Array(e).fill(1).map((i,a)=>i+a).map(M).join("");const s=n.children[t-1];s.classList.add("active"),s.firstElementChild.disabled=!0}function M(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function R(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&g(m,t).then(x)}f.addEventListener("click",I);function I(e){const s=e.target.closest(".exercise-card");if(!s)return;const i=s.querySelector(".description-category").textContent;w.textContent=i,console.log(i)}document.querySelector(".exercises-nav-list");const d=document.querySelector(".exercises"),P=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const j=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const H=document.querySelector(".exercises-search"),u=document.querySelector(".exercise-filters-section");document.getElementById("muscles-button");const U="https://energyflow.b.goit.study/api/",A={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},c="is-hidden";P.addEventListener("click",F);d.classList.remove(c);u.classList.add(c);async function F(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:i}=t.dataset;await G(A[s],i).then(_),d.classList.add(c),u.classList.remove(c),H.addEventListener("click",a);function a(r){console.log(r.target),currentTarget===r.target&&(d.classList.remove(c),u.classList.add(c))}}async function G(e,t){return fetch(`${U}exercises?${e}=${t}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function O({bodyPart:e,target:t,name:s,burnedCalories:i,rating:a,time:r,_id:o}){return`<li class = "list-exercises" id="${o}" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${a}</p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${s}</h4>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${i}/${r}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
            </li>`}function _(e){j.innerHTML=e.map(O).join("")}const h=document.querySelector(".modal-backdrop"),D=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const N="is-hidden";D.addEventListener("click",W);async function W(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("[data-filter]").dataset.filter;(await p.get("https://energyflow.b.goit.study/api/exercises").then(i=>i.data.results).catch(i=>console.log(i))).map(i=>{i.name===t&&(h.classList.remove(N),z(i))})}function z(e={}){const{_id:t,bodyPart:s,equipment:i,time:a,target:r,burnedCalories:o,gifUrl:y,name:b,popularity:$,rating:E,description:L}=e,S=`<div class="exercises-modal-window">
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
                src="${y}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${b}</p>
                <p class="exercise-rating">${E}</p>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${r}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${s}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${i}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${$}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${o}/${a} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${L}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="${t}"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="./svg/icons.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;h.innerHTML=S}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!K(t)){l.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}p.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){console.log(s.data),l.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(s){console.error("Error:",s),l.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function K(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
