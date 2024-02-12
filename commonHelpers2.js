import"./assets/quote-4faf83fe.js";import{a as l,i as h}from"./assets/vendor-db25513e.js";l.defaults.baseURL="https://energyflow.b.goit.study/api";const U=document.querySelector(".exercises-nav-list"),F=document.querySelector(".exercises-container"),P=document.querySelector(".exercise-group"),p=document.querySelector(".pagination"),_="https://energyflow.b.goit.study/api";let w="Muscles";U.addEventListener("click",K);p.addEventListener("click",J);E(w).then($);async function K(e){const{filter:s}=e.target.dataset;if(!s)return;w=s,await E(s).then($);const t=U.querySelector(".active"),r=e.target;t.classList.remove("active"),r.classList.add("active")}async function E(e,s=1){return fetch(`${_}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function $({results:e,page:s,totalPages:t}){N(e),z(t,s)}function N(e){F.innerHTML=e.map(V).join("")}function V({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${s}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function z(e,s){if(e<=1){p.innerHTML="";return}p.innerHTML=Array(e).fill(1).map((r,a)=>r+a).map(Y).join(""),p.children[s-1].classList.add("active")}function Y(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function J(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&E(w,s).then($)}F.addEventListener("click",Q);function Q(e){const t=e.target.closest(".exercise-card");if(!t)return;const r=t.querySelector(".description-category").textContent;return P.textContent=r,P.textContent}document.querySelector(".exercises-nav-list");const f=document.querySelector(".fetch-container"),X=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const Z=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const M=document.querySelector(".exercises-search"),x=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const o=document.querySelector(".pagination-exercises"),y=innerWidth<1440?8:9;document.querySelectorAll(".exercises-nav-item");const I=document.querySelector(".form-search"),j=document.querySelector(".span-exercises "),ee=document.querySelector(".exercise-group");let L,v,g,m;o.addEventListener("click",ne);const se="https://energyflow.b.goit.study/api/",te={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},n="is-hidden";X.addEventListener("click",re);f.classList.remove(n);x.classList.add(n);async function re(e){const s=e.target.closest(".exercise-card");if(!s)return;const{filter:t,group:r,page:a}=s.dataset;g=t,m=r,await ae(te[t],r).then(D),f.classList.add(n),x.classList.remove(n),M.addEventListener("click",c),I.classList.remove(n),j.classList.remove(n);function c(i){console.log(i.target),i.currentTarget===M&&(f.classList.remove(n),x.classList.add(n),I.classList.add(n),j.classList.add(n),ee.textContent="")}}async function ae(e,s){return fetch(`${se}exercises?${e}=${s}&limit=1e6`).then(t=>t.json()).then(t=>{L=t.results})}function G({bodyPart:e,target:s,name:t,burnedCalories:r,rating:a,time:c,_id:i}){return`<li class = "list-exercises" id="${i}" data-filter="${t}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${a}</p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${t}</h4>
            </div>
            <div class="options-item-wrap">
              <p class="options-item"><span class="hid-txt">Burned calories:</span>${r}/${c}</p>
              <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
              <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
           
            
            </li>`}function ie(e){v=Math.ceil(L.length/y),o.innerHTML=Array(v).fill(1).map((t,r)=>t+r).map(t=>`<li class="page-exercises" data-page="${t}"><button id="prevPage">${t}</button></li>`).join(""),o.children[e-1].classList.add("active"),ce(e)}function ce(e){var r,a;for(const c of[...o.children]){const i=+c.dataset.page;i!==1&&i!==v&&(i<e-3||i>e+3)&&c.remove()}const s=(r=o.children[1])==null?void 0:r.dataset.page,t=(a=o.lastElementChild.previousElementSibling)==null?void 0:a.dataset.page;s>2&&o.firstElementChild.after("..."),t<v-1&&o.lastElementChild.before("...")}function D(e=1){const s=(e-1)*y,t=L.slice(s,s+y);Z.innerHTML=t.map(G).join(""),ie(e)}function ne(e){var t;const s=+((t=e.target.closest(".page-exercises"))==null?void 0:t.dataset.page);s&&D(s)}const R="/project-team-6/assets/icons-66c1ea1d.svg",d=document.querySelector(".modal-backdrop"),oe=document.querySelector(".exercises-gallery"),b="is-open";oe.addEventListener("click",le);async function le(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest("li").id;try{const r=await l.get(`/exercises/${s}`);pe(r.data),d.classList.add(b);const a=document.querySelectorAll(".stars-wrap-svg"),c=Math.round(r.data.rating);ge(a,c)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{d.classList.remove(b)}),window.addEventListener("keydown",r=>{r.code==="Escape"&&S()})}d.addEventListener("click",de);function de(e){e.currentTarget===e.target&&S()}function S(){window.removeEventListener("keydown",ue),d.classList.remove(b)}function ue(e){e.code==="Escape"&&S()}function pe(e={}){const{_id:s,bodyPart:t,equipment:r,time:a,target:c,burnedCalories:i,gifUrl:q,name:C,popularity:k,rating:B,description:T}=e,W=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${R}#icon-close-btn"></use>
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
                <p class="exercise-name">${C}</p>
                <div class="rating-container">
                <p class="exercise-rating">${B}</p>
                <div class="stars-wrap">
                  <svg class="stars-wrap-svg" width="18" height="18">
        <use href="./svg/icons.svg#icon-star"></use>
      </svg>
      <svg class="stars-wrap-svg" width="18" height="18">
        <use href="./svg/icons.svg#icon-star"></use>
      </svg>
      <svg class="stars-wrap-svg" width="18" height="18">
        <use href="./svg/icons.svg#icon-star"></use>
      </svg>
      <svg class="stars-wrap-svg" width="18" height="18">
        <use href="./svg/icons.svg#icon-star"></use>
      </svg>
      <svg class="stars-wrap-svg" width="18" height="18">
        <use href="./svg/icons.svg#icon-star"></use>
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
                    <p class="exercise-param-value exercise-param-popularuty">${k}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${i}/${a} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${T}</p>
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
                  <use href="${R}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${s}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;d.innerHTML=W}function ge(e,s){e.forEach((t,r)=>{r<s&&t.classList.add("yellow")})}const me=document.querySelector(".fetch-container"),ve=document.querySelector(".exercises-toolbar"),A=document.querySelector(".exercises-gallery"),O=document.querySelector(".form-search");document.querySelector(".no-results");let u,H;O.addEventListener("submit",ye);function he(e,s,t=1,r=9){return l.get("/exercises",{params:{bodypart:e,keyword:s,page:t,limit:r}})}function fe(e,s,t=1,r=9){return l.get("/exercises",{params:{muscles:e,keyword:s,page:t,limit:r}})}function xe(e,s,t=1,r=9){return l.get("/exercises",{params:{equipment:e,keyword:s,page:t,limit:r}})}async function ye(e){e.preventDefault(),u=e.currentTarget.elements["input-search"].value.trim();let s;try{g==="Body parts"?s=await he(m,u):g==="Muscles"?s=await fe(m,u):g==="Equipment"&&(s=await xe(m,u));const{totalPages:t,perPage:r,results:a}=s.data;if(t===null)A.innerHTML='<li class="no-results"> Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs. </li>';else{const{results:[{bodyPart:c,target:i,name:q,burnedCalories:C,rating:k,time:B,_id:T}]}=s.data;me.classList.add("is-hidden"),ve.classList.remove("is-hidden"),H=s.data.results,A.innerHTML=H.map(G).join("")}}catch(t){console.log(t)}finally{O.reset()}}const be=document.getElementById("footerForm");be.addEventListener("submit",function(e){e.preventDefault();const s=document.getElementById("emailInput").value;if(!we(s)){h.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}l.post("https://energyflow.b.goit.study/api/subscription",{email:s},{headers:{"Content-Type":"application/json"}}).then(function(t){h.success({message:t.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#1b1b1b"}),document.getElementById("emailInput").value=""}).catch(function(t){h.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function we(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
