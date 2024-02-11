import"./assets/quote-f409c002.js";import{a as l,i as b}from"./assets/vendor-db25513e.js";l.defaults.baseURL="https://energyflow.b.goit.study/api";const P=document.querySelector(".exercises-nav-list"),M=document.querySelector(".exercises-container"),U=document.querySelector(".exercise-group"),v=document.querySelector(".pagination"),D="https://energyflow.b.goit.study/api";let L="Muscles";P.addEventListener("click",F);v.addEventListener("click",N);S(L).then(q);async function F(e){const{filter:s}=e.target.dataset;if(!s)return;L=s,await S(s).then(q);const t=P.querySelector(".active"),i=e.target;t.disabled=!1,i.disabled=!0,t.classList.remove("active"),i.classList.add("active")}async function S(e,s=1){return fetch(`${D}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function q({results:e,page:s,totalPages:t}){G(e),_(t,s)}function G(e){M.innerHTML=e.map(W).join("")}function W({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${s}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function _(e,s){if(e<=1){v.innerHTML="";return}v.innerHTML=Array(e).fill(1).map((i,r)=>i+r).map(K).join("");const t=v.children[s-1];t.classList.add("active"),t.firstElementChild.disabled=!0}function K(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function N(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&S(L,s).then(q)}M.addEventListener("click",V);function V(e){const t=e.target.closest(".exercise-card");if(!t)return;const i=t.querySelector(".description-category").textContent;U.textContent=i,console.log(i)}document.querySelector(".exercises-nav-list");const E=document.querySelector(".fetch-container"),z=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const Y=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const B=document.querySelector(".exercises-search"),$=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const n=document.querySelector(".pagination-exercises"),w=innerWidth<1440?8:9;document.querySelectorAll(".exercises-nav-item");let k,h,u,p;n.addEventListener("click",se);const J="https://energyflow.b.goit.study/api/",Q={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";z.addEventListener("click",X);E.classList.remove(o);$.classList.add(o);async function X(e){const s=e.target.closest(".exercise-card");if(!s)return;const{filter:t,group:i,page:r}=s.dataset;u=t,p=i,await Z(Q[t],i).then(C),E.classList.add(o),$.classList.remove(o),B.addEventListener("click",c);function c(a){console.log(a.target),a.currentTarget===B&&(E.classList.remove(o),$.classList.add(o))}}async function Z(e,s){return fetch(`${J}exercises?${e}=${s}&limit=1e6`).then(t=>t.json()).then(t=>{k=t.results})}function I({bodyPart:e,target:s,name:t,burnedCalories:i,rating:r,time:c,_id:a}){return`<li class = "list-exercises" id="${a}" data-filter="${t}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${r}</p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${t}</h4>
            </div>
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${i}/${c}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
            </li>`}function ee(e){h=Math.ceil(k.length/w),n.innerHTML=Array(h).fill(1).map((t,i)=>t+i).map(t=>`<li class="page-exercises" data-page="${t}"><button id="prevPage">${t}</button></li>`).join(""),n.children[e-1].classList.add("active"),te(e)}function te(e){var i,r;for(const c of[...n.children]){const a=+c.dataset.page;a!==1&&a!==h&&(a<e-3||a>e+3)&&c.remove()}const s=(i=n.children[1])==null?void 0:i.dataset.page,t=(r=n.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;s>2&&n.firstElementChild.after("..."),t<h-1&&n.lastElementChild.before("...")}function C(e=1){const s=(e-1)*w,t=k.slice(s,s+w);Y.innerHTML=t.map(I).join(""),ee(e)}function se(e){var t;const s=+((t=e.target.closest(".page-exercises"))==null?void 0:t.dataset.page);s&&C(s)}const T="/project-team-6/assets/icons-66c1ea1d.svg",y=document.querySelector(".modal-backdrop"),ie=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const R="is-open";ie.addEventListener("click",ae);async function ae(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest("li").id;console.dir(s);try{const t=await l.get(`/exercises/${s}`);console.log(t.data),ce(t.data),y.classList.add(R)}catch{}}y.addEventListener("click",re);window.addEventListener("keydown",O);function re(e){e.currentTarget===e.target&&j()}function j(){window.removeEventListener("keydown",O),y.classList.remove(R)}function O(e){e.code==="Escape"&&j()}function ce(e={}){const{_id:s,bodyPart:t,equipment:i,time:r,target:c,burnedCalories:a,gifUrl:m,name:g,popularity:x,rating:f,description:A}=e,H=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${T}#icon-close-btn"></use>
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
                <p class="exercise-name">${g}</p>
                <p class="exercise-rating">${f}</p>
                <div class="rating-container"></div>
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
                    <p class="exercise-param-value exercise-param-equipment">${i}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${x}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${a}/${r} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${A}</p>
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
                  <use href="${T}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${s}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;y.innerHTML=H}const ne=document.querySelector(".form-search");ne.addEventListener("submit",ue);function oe(e,s,t=1,i=9){return l.get("/exercises",{params:{bodypart:e,keyword:s,page:t,limit:i}})}function le(e,s,t=1,i=9){return l.get("/exercises",{params:{muscles:e,keyword:s,page:t,limit:i}})}function de(e,s,t=1,i=9){return l.get("/exercises",{params:{equipment:e,keyword:s,page:t,limit:i}})}let d;async function ue(e){e.preventDefault(),d=e.currentTarget.elements["input-search"].value.trim(),console.log(d),console.log(u),console.log(p);let s;try{u==="Body parts"?s=await oe(p,d):u==="Muscles"?s=await le(p,d):u==="Equipment"&&(s=await de(p,d));const{totalPages:t,perPage:i,results:[{bodyPart:r,target:c,name:a,burnedCalories:m,rating:g,time:x,_id:f}]}=s.data;console.log(s),console.log(r,c,a,m,g,x,f),s.data.results.length===0?console.log("TODO: Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs."):(console.log("TODO: малюэмо розмітку"),I({bodyPart:r,target:c,name:a,burnedCalories:m,rating:g,time:x,_id:f}),C())}catch(t){console.log(t)}finally{}}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const s=document.getElementById("emailInput").value;if(!pe(s)){b.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}l.post("https://energyflow.b.goit.study/api/subscription",{email:s},{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t.data),b.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(t){console.error("Error:",t),b.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function pe(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
