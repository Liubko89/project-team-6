import"./assets/quote-77467b0e.js";import{a as u,i as x}from"./assets/vendor-db25513e.js";u.defaults.baseURL="https://energyflow.b.goit.study/api";let b=document.getElementById("scrollToTopBtn");window.onscroll=function(){J()};function J(){document.body.scrollTop>20||document.documentElement.scrollTop>20?b.style.display="block":b.style.display="none"}b.addEventListener("click",Q);function Q(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const _=document.querySelector(".exercises-nav-list"),O=document.querySelector(".exercises-container"),j=document.querySelector(".exercise-group"),g=document.querySelector(".pagination"),X="https://energyflow.b.goit.study/api";let S="Muscles";_.addEventListener("click",Y);g.addEventListener("click",ae);q(S).then(C);async function Y(e){const{filter:s}=e.target.dataset;if(!s)return;S=s,await q(s).then(C);const t=_.querySelector(".active"),a=e.target;t.classList.remove("active"),a.classList.add("active")}async function q(e,s=1){return fetch(`${X}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function C({results:e,page:s,totalPages:t}){Z(e),se(t,s)}function Z(e){O.innerHTML=e.map(ee).join("")}function ee({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${s}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function se(e,s){if(e<=1){g.innerHTML="";return}g.innerHTML=Array(e).fill(1).map((a,r)=>a+r).map(te).join(""),g.children[s-1].classList.add("active")}function te(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function ae(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&q(S,s).then(C)}O.addEventListener("click",re);function re(e){const t=e.target.closest(".exercise-card");if(!t)return;const a=t.querySelector(".description-category").textContent;return j.textContent=a,j.textContent}const o="/project-team-6/assets/icons-66c1ea1d.svg";document.querySelector(".exercises-nav-list");const E=document.querySelector(".fetch-container"),ce=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const ie=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const A=document.querySelector(".exercises-search"),$=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const d=document.querySelector(".pagination-exercises"),L=innerWidth<1440?8:9,ne=document.querySelector(".search-container"),H=document.querySelector(".form-search"),F=document.querySelector(".span-exercises "),oe=document.querySelector(".exercise-group");let k,f,v,h;d.addEventListener("click",ve);const le="https://energyflow.b.goit.study/api/",de={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},n="is-hidden";ce.addEventListener("click",ue);E.classList.remove(n);$.classList.add(n);async function ue(e){const s=e.target.closest(".exercise-card");if(!s)return;const{filter:t,group:a,page:r}=s.dataset;v=t,h=a,await pe(de[t],a).then(N),E.classList.add(n),$.classList.remove(n),A.addEventListener("click",i),H.classList.remove(n),F.classList.remove(n);function i(c){console.log(c.target),c.currentTarget===A&&(E.classList.remove(n),$.classList.add(n),H.classList.add(n),F.classList.add(n),ne.classList.add(n),oe.textContent="")}}async function pe(e,s){return fetch(`${le}exercises?${e}=${s}&limit=1e6`).then(t=>t.json()).then(t=>{k=t.results})}function K({bodyPart:e,target:s,name:t,burnedCalories:a,rating:r,time:i,_id:c}){return`<li class = "list-exercises" id="${c}" data-filter="${t}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${r}</p><svg class="icon-star" width="18" height="18"><use href="${o}#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="${o}#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${o}#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${t}</h4>
            </div>
            <div class="options-item-wrap">
              <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${i}</p>
              <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
              <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
           
            
            </li>`}function me(e){f=Math.ceil(k.length/L),d.innerHTML=Array(f).fill(1).map((t,a)=>t+a).map(t=>`<li class="page-exercises" data-page="${t}"><button id="prevPage">${t}</button></li>`).join(""),d.children[e-1].classList.add("active"),ge(e)}function ge(e){var a,r;for(const i of[...d.children]){const c=+i.dataset.page;c!==1&&c!==f&&(c<e-3||c>e+3)&&i.remove()}const s=(a=d.children[1])==null?void 0:a.dataset.page,t=(r=d.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;s>2&&d.firstElementChild.after("..."),t<f-1&&d.lastElementChild.before("...")}function N(e=1){const s=(e-1)*L,t=k.slice(s,s+L);ie.innerHTML=t.map(K).join(""),me(e)}function ve(e){var t;const s=+((t=e.target.closest(".page-exercises"))==null?void 0:t.dataset.page);s&&N(s)}const p=document.querySelector(".modal-backdrop"),he=document.querySelector(".exercises-gallery"),w="is-open";he.addEventListener("click",fe);async function fe(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest("li").id;try{const a=await u.get(`/exercises/${s}`);be(a.data),p.classList.add(w);const r=document.querySelectorAll(".stars-wrap-svg"),i=Math.round(a.data.rating);Ee(r,i)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{p.classList.remove(w)}),window.addEventListener("keydown",a=>{a.code==="Escape"&&T()})}p.addEventListener("click",xe);function xe(e){e.currentTarget===e.target&&T()}function T(){window.removeEventListener("keydown",ye),p.classList.remove(w)}function ye(e){e.code==="Escape"&&T()}function be(e={}){const{_id:s,bodyPart:t,equipment:a,time:r,target:i,burnedCalories:c,gifUrl:B,name:P,popularity:M,rating:I,description:R}=e,z=`<div class="exercises-modal-window">
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
                src="${B}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${P}</p>
                <div class="rating-container">
                <p class="exercise-rating">${I}</p>
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
                    <p class="exercise-param-value exercise-param-target">${i}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${M}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${c}/${r} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${R}</p>
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
        </div>`;p.innerHTML=z}function Ee(e,s){e.forEach((t,a)=>{a<s&&t.classList.add("yellow")})}document.querySelector(".fetch-container");const G=document.querySelector(".exercises-toolbar"),U=document.querySelector(".search-container"),y=document.querySelector(".search-list"),V=document.querySelector(".form-search"),D=document.querySelector(".no-results"),l="is-hidden";let m,W;V.addEventListener("submit",Se);function $e(e,s,t=1,a=9){return u.get("/exercises",{params:{bodypart:e,keyword:s,page:t,limit:a}})}function Le(e,s,t=1,a=9){return u.get("/exercises",{params:{muscles:e,keyword:s,page:t,limit:a}})}function we(e,s,t=1,a=9){return u.get("/exercises",{params:{equipment:e,keyword:s,page:t,limit:a}})}async function Se(e){e.preventDefault(),m=e.currentTarget.elements["input-search"].value.trim();let s;try{v==="Body parts"?s=await $e(h,m):v==="Muscles"?s=await Le(h,m):v==="Equipment"&&(s=await we(h,m));const{totalPages:t,perPage:a,results:r}=s.data;if(t===null)U.classList.remove(l),D.classList.remove(l),G.classList.add(l),y.classList.add(l);else{const{results:[{bodyPart:i,target:c,name:B,burnedCalories:P,rating:M,time:I,_id:R}]}=s.data;U.classList.remove(l),y.classList.remove(l),D.classList.add(l),G.classList.add(l),W=s.data.results,y.innerHTML=W.map(K).join("")}}catch(t){console.log(t)}finally{V.reset()}}const qe=document.getElementById("footerForm");qe.addEventListener("submit",function(e){e.preventDefault();const s=document.getElementById("emailInput").value;if(!Ce(s)){x.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}u.post("https://energyflow.b.goit.study/api/subscription",{email:s},{headers:{"Content-Type":"application/json"}}).then(function(t){x.success({message:t.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#1b1b1b"}),document.getElementById("emailInput").value=""}).catch(function(t){x.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function Ce(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
