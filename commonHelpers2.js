import"./assets/quote-7b19675f.js";import{a as x,i as p}from"./assets/vendor-db25513e.js";x.defaults.baseURL="https://energyflow.b.goit.study/api";const b=document.querySelector(".exercises-nav-list"),E=document.querySelector(".exercises-container"),T=document.querySelector(".exercise-group"),l=document.querySelector(".pagination"),P="https://energyflow.b.goit.study/api";let v="Muscles";b.addEventListener("click",M);l.addEventListener("click",A);f(v).then(h);async function M(e){const{filter:t}=e.target.dataset;if(!t)return;v=t,await f(t).then(h);const s=b.querySelector(".active"),i=e.target;s.disabled=!1,i.disabled=!0,s.classList.remove("active"),i.classList.add("active")}async function f(e,t=1){return fetch(`${P}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function h({results:e,page:t,totalPages:s}){R(e),j(s,t)}function R(e){E.innerHTML=e.map(I).join("")}function I({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function j(e,t){if(e<=1){l.innerHTML="";return}l.innerHTML=Array(e).fill(1).map((i,r)=>i+r).map(H).join("");const s=l.children[t-1];s.classList.add("active"),s.firstElementChild.disabled=!0}function H(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function A(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&f(v,t).then(h)}E.addEventListener("click",U);function U(e){const s=e.target.closest(".exercise-card");if(!s)return;const i=s.querySelector(".description-category").textContent;T.textContent=i,console.log(i)}document.querySelector(".exercises-nav-list");const u=document.querySelector(".exercises"),F=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const G=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const O=document.querySelector(".exercises-search"),m=document.querySelector(".exercise-filters-section");document.getElementById("muscles-button");const n=document.querySelector(".pagination-exercises"),g=innerWidth<1440?8:9;let y,d;n.addEventListener("click",J);const W="https://energyflow.b.goit.study/api/",_={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";F.addEventListener("click",D);u.classList.remove(o);m.classList.add(o);async function D(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:i,page:r}=t.dataset;await N(_[s],i).then($),u.classList.add(o),m.classList.remove(o),O.addEventListener("click",c);function c(a){console.log(a.target),currentTarget===a.target&&(u.classList.remove(o),m.classList.add(o))}}async function N(e,t){return fetch(`${W}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{y=s.results})}function z({bodyPart:e,target:t,name:s,burnedCalories:i,rating:r,time:c,_id:a}){return`<li class = "list-exercises" id="${a}" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${r}</p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${s}</h4>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${i}/${c}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
            </li>`}function K(e){d=Math.ceil(y.length/g),n.innerHTML=Array(d).fill(1).map((s,i)=>s+i).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join("");const t=n.children[e-1];t.classList.add("active"),t.firstElementChild.disabled=!0,V(e)}function V(e){var i,r;for(const c of[...n.children]){const a=+c.dataset.page;a!==1&&a!==d&&(a<e-3||a>e+3)&&c.remove()}const t=(i=n.children[1])==null?void 0:i.dataset.page,s=(r=n.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;t>2&&n.firstElementChild.after("..."),s<d-1&&n.lastElementChild.before("...")}function $(e=1){const t=(e-1)*g,s=y.slice(t,t+g);G.innerHTML=s.map(z).join(""),K(e)}function J(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&$(t)}const L=document.querySelector(".modal-backdrop"),Q=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const X="is-hidden";Q.addEventListener("click",Y);async function Y(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("[data-filter]").dataset.filter;(await x.get("https://energyflow.b.goit.study/api/exercises").then(i=>i.data.results).catch(i=>console.log(i))).map(i=>{i.name===t&&(L.classList.remove(X),Z(i))})}function Z(e={}){const{_id:t,bodyPart:s,equipment:i,time:r,target:c,burnedCalories:a,gifUrl:S,name:C,popularity:w,rating:q,description:k}=e,B=`<div class="exercises-modal-window">
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
                src="${S}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${C}</p>
                <p class="exercise-rating">${q}</p>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${c}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${w}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${a}/${r} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${k}</p>
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
        </div>`;L.innerHTML=B}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!ee(t)){p.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}x.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){console.log(s.data),p.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(s){console.error("Error:",s),p.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function ee(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
