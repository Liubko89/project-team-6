import"./assets/quote-0cf7446d.js";import{a as d,i as h}from"./assets/vendor-db25513e.js";d.defaults.baseURL="https://energyflow.b.goit.study/api";let x=document.getElementById("scrollToTopBtn");window.onscroll=function(){K()};function K(){document.body.scrollTop>20||document.documentElement.scrollTop>20?x.style.display="block":x.style.display="none"}x.addEventListener("click",N);function N(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const U=document.querySelector(".exercises-nav-list"),G=document.querySelector(".exercises-container"),I=document.querySelector(".exercise-group"),m=document.querySelector(".pagination"),V="https://energyflow.b.goit.study/api";let $="Muscles";U.addEventListener("click",z);m.addEventListener("click",Z);L($).then(S);async function z(e){const{filter:s}=e.target.dataset;if(!s)return;$=s,await L(s).then(S);const t=U.querySelector(".active"),r=e.target;t.classList.remove("active"),r.classList.add("active")}async function L(e,s=1){return fetch(`${V}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function S({results:e,page:s,totalPages:t}){Y(e),Q(t,s)}function Y(e){G.innerHTML=e.map(J).join("")}function J({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${s}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function Q(e,s){if(e<=1){m.innerHTML="";return}m.innerHTML=Array(e).fill(1).map((r,a)=>r+a).map(X).join(""),m.children[s-1].classList.add("active")}function X(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function Z(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&L($,s).then(S)}G.addEventListener("click",ee);function ee(e){const t=e.target.closest(".exercise-card");if(!t)return;const r=t.querySelector(".description-category").textContent;return I.textContent=r,I.textContent}const o="/project-team-6/assets/icons-66c1ea1d.svg";document.querySelector(".exercises-nav-list");const y=document.querySelector(".fetch-container"),se=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const te=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const j=document.querySelector(".exercises-search"),b=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const l=document.querySelector(".pagination-exercises"),E=innerWidth<1440?8:9;document.querySelectorAll(".exercises-nav-item");const R=document.querySelector(".form-search"),A=document.querySelector(".span-exercises "),re=document.querySelector(".exercise-group");let q,f,g,v;l.addEventListener("click",de);const ae="https://energyflow.b.goit.study/api/",ie={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},n="is-hidden";se.addEventListener("click",ce);y.classList.remove(n);b.classList.add(n);async function ce(e){const s=e.target.closest(".exercise-card");if(!s)return;const{filter:t,group:r,page:a}=s.dataset;g=t,v=r,await ne(ie[t],r).then(O),y.classList.add(n),b.classList.remove(n),j.addEventListener("click",c),R.classList.remove(n),A.classList.remove(n);function c(i){console.log(i.target),i.currentTarget===j&&(y.classList.remove(n),b.classList.add(n),R.classList.add(n),A.classList.add(n),re.textContent="")}}async function ne(e,s){return fetch(`${ae}exercises?${e}=${s}&limit=1e6`).then(t=>t.json()).then(t=>{q=t.results})}function D({bodyPart:e,target:s,name:t,burnedCalories:r,rating:a,time:c,_id:i}){return`<li class = "list-exercises" id="${i}" data-filter="${t}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${a}</p><svg class="icon-star" width="18" height="18"><use href="${o}#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="${o}#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${o}#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${t}</h4>
            </div>
            <div class="options-item-wrap">
              <p class="options-item"><span class="hid-txt">Burned calories:</span>${r}/${c}</p>
              <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
              <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
           
            
            </li>`}function oe(e){f=Math.ceil(q.length/E),l.innerHTML=Array(f).fill(1).map((t,r)=>t+r).map(t=>`<li class="page-exercises" data-page="${t}"><button id="prevPage">${t}</button></li>`).join(""),l.children[e-1].classList.add("active"),le(e)}function le(e){var r,a;for(const c of[...l.children]){const i=+c.dataset.page;i!==1&&i!==f&&(i<e-3||i>e+3)&&c.remove()}const s=(r=l.children[1])==null?void 0:r.dataset.page,t=(a=l.lastElementChild.previousElementSibling)==null?void 0:a.dataset.page;s>2&&l.firstElementChild.after("..."),t<f-1&&l.lastElementChild.before("...")}function O(e=1){const s=(e-1)*E,t=q.slice(s,s+E);te.innerHTML=t.map(D).join(""),oe(e)}function de(e){var t;const s=+((t=e.target.closest(".page-exercises"))==null?void 0:t.dataset.page);s&&O(s)}const u=document.querySelector(".modal-backdrop"),ue=document.querySelector(".exercises-gallery"),w="is-open";ue.addEventListener("click",pe);async function pe(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest("li").id;try{const r=await d.get(`/exercises/${s}`);ve(r.data),u.classList.add(w);const a=document.querySelectorAll(".stars-wrap-svg"),c=Math.round(r.data.rating);fe(a,c)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{u.classList.remove(w)}),window.addEventListener("keydown",r=>{r.code==="Escape"&&k()})}u.addEventListener("click",me);function me(e){e.currentTarget===e.target&&k()}function k(){window.removeEventListener("keydown",ge),u.classList.remove(w)}function ge(e){e.code==="Escape"&&k()}function ve(e={}){const{_id:s,bodyPart:t,equipment:r,time:a,target:c,burnedCalories:i,gifUrl:C,name:T,popularity:B,rating:P,description:M}=e,_=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${o}#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${C}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${T}</p>
                <div class="rating-container">
                <p class="exercise-rating">${P}</p>
                <div class="stars-wrap">
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${o}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${o}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${o}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${o}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${o}#icon-star"></use>
                  </svg>
               </div>
                </div>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${c}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${t}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${r}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${B}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${i}/${a} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${M}</p>
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
                  <use href="${o}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${s}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;u.innerHTML=_}function fe(e,s){e.forEach((t,r)=>{r<s&&t.classList.add("yellow")})}const he=document.querySelector(".fetch-container"),xe=document.querySelector(".exercises-toolbar"),H=document.querySelector(".exercises-gallery"),W=document.querySelector(".form-search");document.querySelector(".no-results");let p,F;W.addEventListener("submit",we);function ye(e,s,t=1,r=9){return d.get("/exercises",{params:{bodypart:e,keyword:s,page:t,limit:r}})}function be(e,s,t=1,r=9){return d.get("/exercises",{params:{muscles:e,keyword:s,page:t,limit:r}})}function Ee(e,s,t=1,r=9){return d.get("/exercises",{params:{equipment:e,keyword:s,page:t,limit:r}})}async function we(e){e.preventDefault(),p=e.currentTarget.elements["input-search"].value.trim();let s;try{g==="Body parts"?s=await ye(v,p):g==="Muscles"?s=await be(v,p):g==="Equipment"&&(s=await Ee(v,p));const{totalPages:t,perPage:r,results:a}=s.data;if(t===null)H.innerHTML='<li class="no-results"> Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs. </li>';else{const{results:[{bodyPart:c,target:i,name:C,burnedCalories:T,rating:B,time:P,_id:M}]}=s.data;he.classList.add("is-hidden"),xe.classList.remove("is-hidden"),F=s.data.results,H.innerHTML=F.map(D).join("")}}catch(t){console.log(t)}finally{W.reset()}}const $e=document.getElementById("footerForm");$e.addEventListener("submit",function(e){e.preventDefault();const s=document.getElementById("emailInput").value;if(!Le(s)){h.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}d.post("https://energyflow.b.goit.study/api/subscription",{email:s},{headers:{"Content-Type":"application/json"}}).then(function(t){h.success({message:t.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#1b1b1b"}),document.getElementById("emailInput").value=""}).catch(function(t){h.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function Le(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
