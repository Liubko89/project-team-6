import"./assets/quote-29c201ef.js";import{a as l,i as b}from"./assets/vendor-db25513e.js";l.defaults.baseURL="https://energyflow.b.goit.study/api";const I=document.querySelector(".exercises-nav-list"),R=document.querySelector(".exercises-container"),H=document.querySelector(".exercise-group"),x=document.querySelector(".pagination"),U="https://energyflow.b.goit.study/api";let S="Muscles";I.addEventListener("click",D);x.addEventListener("click",K);k(S).then(q);async function D(e){const{filter:s}=e.target.dataset;if(!s)return;S=s,await k(s).then(q);const t=I.querySelector(".active"),a=e.target;t.classList.remove("active"),a.classList.add("active")}async function k(e,s=1){return fetch(`${U}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function q({results:e,page:s,totalPages:t}){F(e),W(t,s)}function F(e){R.innerHTML=e.map(G).join("")}function G({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${s}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function W(e,s){if(e<=1){x.innerHTML="";return}x.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(_).join(""),x.children[s-1].classList.add("active")}function _(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function K(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&k(S,s).then(q)}R.addEventListener("click",N);function N(e){const t=e.target.closest(".exercise-card");if(!t)return;const a=t.querySelector(".description-category").textContent;H.textContent=a,console.log(a)}const P=document.querySelector(".exercises-nav-list"),w=document.querySelector(".fetch-container"),V=document.querySelector(".exercises-container"),z=document.querySelector(".exercises-gallery"),E=document.querySelector(".exercises-toolbar"),n=document.querySelector(".pagination-exercises"),$=innerWidth<1440?8:9;let C,y,u,p;n.addEventListener("click",se);const Y="https://energyflow.b.goit.study/api/",J={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";V.addEventListener("click",Q);w.classList.remove(o);E.classList.add(o);async function Q(e){const s=e.target.closest(".exercise-card");if(!s)return;const{filter:t,group:a,page:i}=s.dataset;u=t,p=a,await X(J[t],a).then(B),w.classList.add(o),E.classList.remove(o),P.addEventListener("click",c);function c(r){console.log(r.target),r.currentTarget===P&&(w.classList.remove(o),E.classList.add(o))}}async function X(e,s){return fetch(`${Y}exercises?${e}=${s}&limit=1e6`).then(t=>t.json()).then(t=>{C=t.results})}function j({bodyPart:e,target:s,name:t,burnedCalories:a,rating:i,time:c,_id:r}){return`<li class = "list-exercises" id="${r}" data-filter="${t}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${t}</h4>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${c}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
            </li>`}function Z(e){y=Math.ceil(C.length/$),n.innerHTML=Array(y).fill(1).map((t,a)=>t+a).map(t=>`<li class="page-exercises" data-page="${t}"><button id="prevPage">${t}</button></li>`).join(""),n.children[e-1].classList.add("active"),ee(e)}function ee(e){var a,i;for(const c of[...n.children]){const r=+c.dataset.page;r!==1&&r!==y&&(r<e-3||r>e+3)&&c.remove()}const s=(a=n.children[1])==null?void 0:a.dataset.page,t=(i=n.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;s>2&&n.firstElementChild.after("..."),t<y-1&&n.lastElementChild.before("...")}function B(e=1){const s=(e-1)*$,t=C.slice(s,s+$);z.innerHTML=t.map(j).join(""),Z(e)}function se(e){var t;const s=+((t=e.target.closest(".page-exercises"))==null?void 0:t.dataset.page);s&&B(s)}const M="/project-team-6/assets/icons-66c1ea1d.svg",g=document.querySelector(".modal-backdrop"),te=document.querySelector(".exercises-gallery"),L="is-open";te.addEventListener("click",ae);async function ae(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest("li").id;try{const a=await l.get(`/exercises/${s}`);ce(a.data),g.classList.add(L);const i=document.querySelectorAll(".stars-wrap-svg"),c=Math.round(a.data.rating);ne(i,c)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{g.classList.remove(L)}),window.addEventListener("keydown",a=>{a.code==="Escape"&&T()})}g.addEventListener("click",ie);function ie(e){e.currentTarget===e.target&&T()}function T(){window.removeEventListener("keydown",re),g.classList.remove(L)}function re(e){e.code==="Escape"&&T()}function ce(e={}){const{_id:s,bodyPart:t,equipment:a,time:i,target:c,burnedCalories:r,gifUrl:m,name:v,popularity:h,rating:f,description:O}=e,A=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${M}#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${m}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${v}</p>
                <div class="rating-container">
                <p class="exercise-rating">${f}</p>
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
                    <p class="exercise-param-value exercise-param-equipment">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${h}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${r}/${i} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${O}</p>
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
                  <use href="${M}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${s}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;g.innerHTML=A}function ne(e,s){e.forEach((t,a)=>{a<s&&t.classList.add("yellow")})}const oe=document.querySelector(".form-search");oe.addEventListener("submit",pe);function le(e,s,t=1,a=9){return l.get("/exercises",{params:{bodypart:e,keyword:s,page:t,limit:a}})}function de(e,s,t=1,a=9){return l.get("/exercises",{params:{muscles:e,keyword:s,page:t,limit:a}})}function ue(e,s,t=1,a=9){return l.get("/exercises",{params:{equipment:e,keyword:s,page:t,limit:a}})}let d;async function pe(e){e.preventDefault(),d=e.currentTarget.elements["input-search"].value.trim(),console.log(d),console.log(u),console.log(p);let s;try{u==="Body parts"?s=await le(p,d):u==="Muscles"?s=await de(p,d):u==="Equipment"&&(s=await ue(p,d));const{totalPages:t,perPage:a,results:[{bodyPart:i,target:c,name:r,burnedCalories:m,rating:v,time:h,_id:f}]}=s.data;console.log(s),console.log(i,c,r,m,v,h,f),s.data.results.length===0?console.log("TODO: Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs."):(console.log("TODO: малюэмо розмітку"),j({bodyPart:i,target:c,name:r,burnedCalories:m,rating:v,time:h,_id:f}),B())}catch(t){console.log(t)}finally{}}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const s=document.getElementById("emailInput").value;if(!ge(s)){b.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}l.post("https://energyflow.b.goit.study/api/subscription",{email:s},{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t.data),b.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(t){console.error("Error:",t),b.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function ge(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
