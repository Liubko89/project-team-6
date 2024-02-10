import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as n,i as r}from"./assets/vendor-8cce9181.js";n.defaults.baseURL="https://energyflow.b.goit.study/api";const T=document.querySelector(".js-close-menu"),C=document.querySelector(".js-open-menu"),g=document.querySelector(".js-menu-container");T.addEventListener("click",D);C.addEventListener("click",R);function D(){g.classList.add("is-hidden")}function R(){g.classList.remove("is-hidden")}const I="https://energyflow.b.goit.study/api",m=document.querySelector(".quote__backend");async function _(){m.innerHTML='<span class="loader"></span>';try{return(await n.get(`${I}/quote`)).data}catch(e){throw r.error({title:"Wrong",message:"Try again",position:"topRight"}),e}}function j(e,t){return`<p class="quote__backend-text">${t}</p>
    <p class="quote__backend-author">${e}</p>`}async function H(){try{const{author:e,quote:t}=await _(),s={author:e,quote:t,savedDate:new Date().toLocaleDateString()};localStorage.setItem("quote",JSON.stringify(s)),localStorage.setItem("savedDate",s.savedDate),v(e,t)}catch(e){console.error(e)}}function v(e,t){m.innerHTML=j(e,t)}async function f(){const e=JSON.parse(localStorage.getItem("quote")),t=localStorage.getItem("savedDate"),s=new Date().toLocaleDateString();e&&t===s?v(e.author,e.quote):await H()}f();function x(){const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0)-e;setTimeout(function(){f(),x()},t)}x();const h=document.querySelector(".exercises-nav-list"),U=document.querySelector(".exercises-container"),o=document.querySelector(".pagination"),A="https://energyflow.b.goit.study/api";let l="Muscles";h.addEventListener("click",Q);o.addEventListener("click",W);d(l).then(u);async function Q(e){const{filter:t}=e.target.dataset;if(!t)return;l=t,await d(t).then(u);const s=h.querySelector(".active"),a=e.target;s.disabled=!1,a.disabled=!0,s.classList.remove("active"),a.classList.add("active")}async function d(e,t=1){return fetch(`${A}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function u({results:e,page:t,totalPages:s}){P(e),F(s,t)}function P(e){U.innerHTML=e.map(O).join("")}function O({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function F(e,t){o.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(N).join("");const s=o.children[t-1];s.classList.add("active"),s.firstElementChild.disabled=!0}function N(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function W(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&d(l,t).then(u)}document.querySelector(".exercises-nav-list");const p=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const J=document.querySelector(".exercises-gallery"),z="https://energyflow.b.goit.study/api/",y="is-hidden";p.addEventListener("click",G);p.classList.remove(y);b("Muscles").then($);async function G(e){console.log(e.target);const{filter:t}=e.target.dataset;t&&(await b(t).then($),p.classList.add(y))}async function b(e){return fetch(`${z}exercises?filter=${e}&page=1&limit=12`).then(t=>t.json()).then(t=>t.results)}function K({bodyPart:e,target:t,name:s,burnedCalories:a,rating:i,time:c}){return`<li class = "list-exercises" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="../svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="../svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="../svg/icons.svg#icon-running-man"></use></svg></div>
            <p class="ex-name">${s}</p>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${c}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
            </li>`}function $(e){J.innerHTML=e.map(K).join("")}const w=document.querySelector(".modal-backdrop"),V=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const Y="is-hidden";V.addEventListener("click",X);async function X(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("[data-filter]").dataset.filter;(await n.get("https://energyflow.b.goit.study/api/exercises").then(a=>a.data.results).catch(a=>console.log(a))).map(a=>{a.name===t&&(w.classList.remove(Y),Z(a))})}function Z(e={}){const{_id:t,bodyPart:s,equipment:a,time:i,target:c,burnedCalories:S,gifUrl:E,name:L,popularity:q,rating:M,description:k}=e,B=`<div class="exercises-modal-window">
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
                src="${E}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${L}</p>
                <p class="exercise-rating">${M}</p>
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
                    <p class="exercise-param-value exercise-param-equipment">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${q}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${S}/${i} m</p></li>
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
        </div>`;w.innerHTML=B}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!ee(t)){r.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}n.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){console.log(s.data),r.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(s){console.error("Error:",s),r.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function ee(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
