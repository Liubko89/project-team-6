import"./assets/header-hero-6378bcc3.js";import{a as l,i as n}from"./assets/vendor-8cce9181.js";l.defaults.baseURL="https://energyflow.b.goit.study/api";const B="https://energyflow.b.goit.study/api",x=document.querySelector(".quote__backend");async function T(){x.innerHTML='<span class="loader"></span>';try{return(await l.get(`${B}/quote`)).data}catch(e){throw n.error({title:"Wrong",message:"Try again",position:"topRight"}),e}}function D(e,t){return`<p class="quote__backend-text">${t}</p>
    <p class="quote__backend-author">${e}</p>`}async function M(){try{const{author:e,quote:t}=await T(),s={author:e,quote:t,savedDate:new Date().toLocaleDateString()};localStorage.setItem("quote",JSON.stringify(s)),localStorage.setItem("savedDate",s.savedDate),f(e,t)}catch(e){console.error(e)}}function f(e,t){x.innerHTML=D(e,t)}async function h(){const e=JSON.parse(localStorage.getItem("quote")),t=localStorage.getItem("savedDate"),s=new Date().toLocaleDateString();e&&t===s?f(e.author,e.quote):await M()}h();function y(){const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0)-e;setTimeout(function(){h(),y()},t)}y();const b=document.querySelector(".exercises-nav-list"),$=document.querySelector(".exercises-container"),R=document.querySelector(".exercise-group"),o=document.querySelector(".pagination"),I="https://energyflow.b.goit.study/api";let g="Muscles";b.addEventListener("click",_);o.addEventListener("click",P);m(g).then(v);async function _(e){const{filter:t}=e.target.dataset;if(!t)return;g=t,await m(t).then(v);const s=b.querySelector(".active"),a=e.target;s.disabled=!1,a.disabled=!0,s.classList.remove("active"),a.classList.add("active")}async function m(e,t=1){return fetch(`${I}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function v({results:e,page:t,totalPages:s}){U(e),H(s,t)}function U(e){$.innerHTML=e.map(A).join("")}function A({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function H(e,t){if(e<=1){o.innerHTML="";return}o.innerHTML=Array(e).fill(1).map((a,r)=>a+r).map(Q).join("");const s=o.children[t-1];s.classList.add("active"),s.firstElementChild.disabled=!0}function Q(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function P(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&m(g,t).then(v)}$.addEventListener("click",j);function j(e){const s=e.target.closest(".exercise-card");if(!s)return;const a=s.querySelector(".description-category").textContent;R.textContent=a,console.log(a)}document.querySelector(".exercises-nav-list");const u=document.querySelector(".exercises"),F=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const O=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const G=document.querySelector(".exercises-search"),p=document.querySelector(".exercise-filters-section");document.getElementById("muscles-button");const N="https://energyflow.b.goit.study/api/",W={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},c="is-hidden";F.addEventListener("click",J);u.classList.remove(c);p.classList.add(c);async function J(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:a}=t.dataset;await z(W[s],a).then(V),u.classList.add(c),p.classList.remove(c),G.addEventListener("click",r);function r(i){console.log(i.target),currentTarget===i.target&&(u.classList.remove(c),p.classList.add(c))}}async function z(e,t){return fetch(`${N}exercises?${e}=${t}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function K({bodyPart:e,target:t,name:s,burnedCalories:a,rating:r,time:i,_id:d}){return`<li class = "list-exercises" id="${d}" data-filter="${s}"><div class="options">
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
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${i}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
            </li>`}function V(e){O.innerHTML=e.map(K).join("")}const S=document.querySelector(".modal-backdrop"),Y=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const X="is-hidden";Y.addEventListener("click",Z);async function Z(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("[data-filter]").dataset.filter;(await l.get("https://energyflow.b.goit.study/api/exercises").then(a=>a.data.results).catch(a=>console.log(a))).map(a=>{a.name===t&&(S.classList.remove(X),ee(a))})}function ee(e={}){const{_id:t,bodyPart:s,equipment:a,time:r,target:i,burnedCalories:d,gifUrl:w,name:E,popularity:q,rating:L,description:k}=e,C=`<div class="exercises-modal-window">
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
                src="${w}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${E}</p>
                <p class="exercise-rating">${L}</p>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${i}</p>
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
                  <p class="exercise-param-value exercise-param-popularuty">${d}/${r} m</p></li>
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
        </div>`;S.innerHTML=C}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!te(t)){n.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}l.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){console.log(s.data),n.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(s){console.error("Error:",s),n.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function te(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
