import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as l,i as c}from"./assets/vendor-8cce9181.js";l.defaults.baseURL="https://energyflow.b.goit.study/api";const B=document.querySelector(".js-close-menu"),T=document.querySelector(".js-open-menu"),v=document.querySelector(".js-menu-container");B.addEventListener("click",C);T.addEventListener("click",D);function C(){v.classList.add("is-hidden")}function D(){v.classList.remove("is-hidden")}const R="https://energyflow.b.goit.study/api",x=document.querySelector(".quote__backend");async function H(){x.innerHTML='<span class="loader"></span>';try{return(await l.get(`${R}/quote`)).data}catch(e){throw c.error({title:"Wrong",message:"Try again",position:"topRight"}),e}}function I(e,t){return`<p class="quote__backend-text">${t}</p>
    <p class="quote__backend-author">${e}</p>`}async function _(){try{const{author:e,quote:t}=await H(),s={author:e,quote:t,savedDate:new Date().toLocaleDateString()};localStorage.setItem("quote",JSON.stringify(s)),localStorage.setItem("savedDate",s.savedDate),f(e,t)}catch(e){console.error(e)}}function f(e,t){x.innerHTML=I(e,t)}async function h(){const e=JSON.parse(localStorage.getItem("quote")),t=localStorage.getItem("savedDate"),s=new Date().toLocaleDateString();e&&t===s?f(e.author,e.quote):await _()}h();function y(){const e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0)-e;setTimeout(function(){h(),y()},t)}y();const b=document.querySelector(".exercises-nav-list"),j=document.querySelector(".exercises-container"),o=document.querySelector(".pagination"),U="https://energyflow.b.goit.study/api";let p="Muscles";b.addEventListener("click",A);o.addEventListener("click",N);m(p).then(g);async function A(e){const{filter:t}=e.target.dataset;if(!t)return;p=t,await m(t).then(g);const s=b.querySelector(".active"),a=e.target;s.disabled=!1,a.disabled=!0,s.classList.remove("active"),a.classList.add("active")}async function m(e,t=1){return fetch(`${U}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function g({results:e,page:t,totalPages:s}){Q(e),O(s,t)}function Q(e){j.innerHTML=e.map(P).join("")}function P({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function O(e,t){if(e<=1){o.innerHTML="";return}o.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(F).join("");const s=o.children[t-1];s.classList.add("active"),s.firstElementChild.disabled=!0}function F(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function N(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&m(p,t).then(g)}document.querySelector(".exercises-nav-list");const d=document.querySelector(".container-muscles"),G=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const W=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const J=document.querySelector(".exercises-search"),u=document.querySelector(".exercise-filters-section"),z="https://energyflow.b.goit.study/api/",K={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},n="is-hidden";G.addEventListener("click",V);d.classList.remove(n);u.classList.add(n);async function V(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:a}=t.dataset;await Y(K[s],a).then(Z),d.classList.add(n),u.classList.remove(n),J.addEventListener("click",i);function i(r){console.log(r.target),currentTarget===r.target&&(d.classList.remove(n),u.classList.add(n))}}async function Y(e,t){return fetch(`${z}exercises?${e}=${t}&page=1&limit=12`).then(s=>s.json()).then(s=>s.results)}function X({bodyPart:e,target:t,name:s,burnedCalories:a,rating:i,time:r}){return`<li class = "list-exercises" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${s}</h4>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${r}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
            </li>`}function Z(e){W.innerHTML=e.map(X).join("")}const $=document.querySelector(".modal-backdrop"),ee=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const te="is-hidden";ee.addEventListener("click",se);async function se(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("[data-filter]").dataset.filter;(await l.get("https://energyflow.b.goit.study/api/exercises").then(a=>a.data.results).catch(a=>console.log(a))).map(a=>{a.name===t&&($.classList.remove(te),ae(a))})}function ae(e={}){const{_id:t,bodyPart:s,equipment:a,time:i,target:r,burnedCalories:S,gifUrl:L,name:w,popularity:q,rating:E,description:M}=e,k=`<div class="exercises-modal-window">
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
                src="${L}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${w}</p>
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
                  <use href="./svg/icons.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;$.innerHTML=k}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!ie(t)){c.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}l.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){console.log(s.data),c.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(s){console.error("Error:",s),c.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function ie(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
