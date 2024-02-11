import"./assets/quote-604f15a1.js";import{a as v,i as u}from"./assets/vendor-db25513e.js";v.defaults.baseURL="https://energyflow.b.goit.study/api";const $=document.querySelector(".exercises-nav-list"),L=document.querySelector(".exercises-container"),j=document.querySelector(".exercise-group"),l=document.querySelector(".pagination"),I="https://energyflow.b.goit.study/api";let f="Muscles";$.addEventListener("click",H);l.addEventListener("click",W);h(f).then(y);async function H(e){const{filter:t}=e.target.dataset;if(!t)return;f=t,await h(t).then(y);const s=$.querySelector(".active"),i=e.target;s.disabled=!1,i.disabled=!0,s.classList.remove("active"),i.classList.add("active")}async function h(e,t=1){return fetch(`${I}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function y({results:e,page:t,totalPages:s}){A(e),F(s,t)}function A(e){L.innerHTML=e.map(U).join("")}function U({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function F(e,t){if(e<=1){l.innerHTML="";return}l.innerHTML=Array(e).fill(1).map((i,c)=>i+c).map(G).join("");const s=l.children[t-1];s.classList.add("active"),s.firstElementChild.disabled=!0}function G(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function W(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&h(f,t).then(y)}L.addEventListener("click",D);function D(e){const s=e.target.closest(".exercise-card");if(!s)return;const i=s.querySelector(".description-category").textContent;j.textContent=i,console.log(i)}document.querySelector(".exercises-nav-list");const m=document.querySelector(".fetch-container"),O=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const _=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const K=document.querySelector(".exercises-search"),g=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const n=document.querySelector(".pagination-exercises"),x=innerWidth<1440?8:9;let b,d;n.addEventListener("click",Z);const N="https://energyflow.b.goit.study/api/",V={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";O.addEventListener("click",z);m.classList.remove(o);g.classList.add(o);async function z(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:i,page:c}=t.dataset;await J(V[s],i).then(w),m.classList.add(o),g.classList.remove(o),K.addEventListener("click",r);function r(a){console.log(a.target),currentTarget===a.target&&(m.classList.remove(o),g.classList.add(o))}}async function J(e,t){return fetch(`${N}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{b=s.results})}function Q({bodyPart:e,target:t,name:s,burnedCalories:i,rating:c,time:r,_id:a}){return`<li class = "list-exercises" id="${a}" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${c}</p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>

  
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
            </li>`}function X(e){d=Math.ceil(b.length/x),n.innerHTML=Array(d).fill(1).map((s,i)=>s+i).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join("");const t=n.children[e-1];t.classList.add("active"),t.firstElementChild.disabled=!0,Y(e)}function Y(e){var i,c;for(const r of[...n.children]){const a=+r.dataset.page;a!==1&&a!==d&&(a<e-3||a>e+3)&&r.remove()}const t=(i=n.children[1])==null?void 0:i.dataset.page,s=(c=n.lastElementChild.previousElementSibling)==null?void 0:c.dataset.page;t>2&&n.firstElementChild.after("..."),s<d-1&&n.lastElementChild.before("...")}function w(e=1){const t=(e-1)*x,s=b.slice(t,t+x);_.innerHTML=s.map(Q).join(""),X(e)}function Z(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&w(t)}const E="/project-team-6/assets/icons-66c1ea1d.svg",p=document.querySelector(".modal-backdrop"),ee=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const S="is-open";ee.addEventListener("click",se);async function se(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("li").id;console.dir(t);try{const s=await v.get(`/exercises/${t}`);console.log(s.data),ie(s.data),p.classList.add(S)}catch{}}p.addEventListener("click",te);window.addEventListener("keydown",k);function te(e){e.currentTarget===e.target&&C()}function C(){window.removeEventListener("keydown",k),p.classList.remove(S)}function k(e){e.code==="Escape"&&C()}function ie(e={}){const{_id:t,bodyPart:s,equipment:i,time:c,target:r,burnedCalories:a,gifUrl:q,name:B,popularity:T,rating:P,description:M}=e,R=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${E}#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${q}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${B}</p>
                <p class="exercise-rating">${P}</p>
                <div class="rating-container"></div>
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
                    <p class="exercise-param-value exercise-param-popularuty">${T}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${a}/${c} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${M}</p>
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
                  <use href="${E}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;p.innerHTML=R}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!ae(t)){u.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}v.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){console.log(s.data),u.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(s){console.error("Error:",s),u.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function ae(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
