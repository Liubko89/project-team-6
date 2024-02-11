import"./assets/quote-1d251903.js";import{a as l,i as b}from"./assets/vendor-db25513e.js";l.defaults.baseURL="https://energyflow.b.goit.study/api";const T=document.querySelector(".exercises-nav-list"),P=document.querySelector(".exercises-container"),U=document.querySelector(".exercise-group"),v=document.querySelector(".pagination"),A="https://energyflow.b.goit.study/api";let L="Muscles";T.addEventListener("click",D);v.addEventListener("click",K);S(L).then(k);async function D(e){const{filter:t}=e.target.dataset;if(!t)return;L=t,await S(t).then(k);const s=T.querySelector(".active"),i=e.target;s.disabled=!1,i.disabled=!0,s.classList.remove("active"),i.classList.add("active")}async function S(e,t=1){return fetch(`${A}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function k({results:e,page:t,totalPages:s}){F(e),W(s,t)}function F(e){P.innerHTML=e.map(G).join("")}function G({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function W(e,t){if(e<=1){v.innerHTML="";return}v.innerHTML=Array(e).fill(1).map((i,r)=>i+r).map(_).join("");const s=v.children[t-1];s.classList.add("active"),s.firstElementChild.disabled=!0}function _(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function K(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&S(L,t).then(k)}P.addEventListener("click",N);function N(e){const s=e.target.closest(".exercise-card");if(!s)return;const i=s.querySelector(".description-category").textContent;U.textContent=i,console.log(i)}document.querySelector(".exercises-nav-list");const E=document.querySelector(".fetch-container"),V=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const z=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const Y=document.querySelector(".exercises-search"),$=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const c=document.querySelector(".pagination-exercises"),w=innerWidth<1440?8:9;let q,h,u,p;c.addEventListener("click",se);const J="https://energyflow.b.goit.study/api/",Q={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";V.addEventListener("click",X);E.classList.remove(o);$.classList.add(o);async function X(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:i,page:r}=t.dataset;u=s,p=i,await Z(Q[s],i).then(C),E.classList.add(o),$.classList.remove(o),Y.addEventListener("click",n);function n(a){console.log(a.target),currentTarget===a.target&&(E.classList.remove(o),$.classList.add(o))}}async function Z(e,t){return fetch(`${J}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{q=s.results})}function M({bodyPart:e,target:t,name:s,burnedCalories:i,rating:r,time:n,_id:a}){return`<li class = "list-exercises" id="${a}" data-filter="${s}"><div class="options">
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
           
            <p class="options-item"><span class="hid-txt">Burned calories:</span>${i}/${n}</p>
            <div class="info-ex">
            <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
            <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
            </li>`}function ee(e){h=Math.ceil(q.length/w),c.innerHTML=Array(h).fill(1).map((s,i)=>s+i).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join("");const t=c.children[e-1];t.classList.add("active"),t.firstElementChild.disabled=!0,te(e)}function te(e){var i,r;for(const n of[...c.children]){const a=+n.dataset.page;a!==1&&a!==h&&(a<e-3||a>e+3)&&n.remove()}const t=(i=c.children[1])==null?void 0:i.dataset.page,s=(r=c.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;t>2&&c.firstElementChild.after("..."),s<h-1&&c.lastElementChild.before("...")}function C(e=1){const t=(e-1)*w,s=q.slice(t,t+w);z.innerHTML=s.map(M).join(""),ee(e)}function se(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&C(t)}const B="/project-team-6/assets/icons-66c1ea1d.svg",y=document.querySelector(".modal-backdrop"),ie=document.querySelector(".exercises-gallery");document.querySelector(".exercise-close-btn");const R="is-open";ie.addEventListener("click",ae);async function ae(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("li").id;console.dir(t);try{const s=await l.get(`/exercises/${t}`);console.log(s.data),ne(s.data),y.classList.add(R)}catch{}}y.addEventListener("click",re);window.addEventListener("keydown",I);function re(e){e.currentTarget===e.target&&j()}function j(){window.removeEventListener("keydown",I),y.classList.remove(R)}function I(e){e.code==="Escape"&&j()}function ne(e={}){const{_id:t,bodyPart:s,equipment:i,time:r,target:n,burnedCalories:a,gifUrl:m,name:g,popularity:f,rating:x,description:O}=e,H=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${B}#icon-close-btn"></use>
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
                <p class="exercise-rating">${x}</p>
                <div class="rating-container"></div>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${n}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${f}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${a}/${r} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${O}</p>
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
                  <use href="${B}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;y.innerHTML=H}const ce=document.querySelector(".form-search");ce.addEventListener("submit",ue);function oe(e,t,s=1,i=9){return l.get("/exercises",{params:{bodypart:e,keyword:t,page:s,limit:i}})}function le(e,t,s=1,i=9){return l.get("/exercises",{params:{muscles:e,keyword:t,page:s,limit:i}})}function de(e,t,s=1,i=9){return l.get("/exercises",{params:{equipment:e,keyword:t,page:s,limit:i}})}let d;async function ue(e){e.preventDefault(),d=e.currentTarget.elements["input-search"].value.trim(),console.log(d),console.log(u),console.log(p);let t;try{u==="Body parts"?t=await oe(p,d):u==="Muscles"?t=await le(p,d):u==="Equipment"&&(t=await de(p,d));const{totalPages:s,perPage:i,results:[{bodyPart:r,target:n,name:a,burnedCalories:m,rating:g,time:f,_id:x}]}=t.data;console.log(t),console.log(r,n,a,m,g,f,x),t.data.results.length===0?console.log("TODO: Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs."):(console.log("TODO: малюэмо розмітку"),M({bodyPart:r,target:n,name:a,burnedCalories:m,rating:g,time:f,_id:x}),C())}catch(s){console.log(s)}finally{}}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!pe(t)){b.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}l.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){console.log(s.data),b.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(s){console.error("Error:",s),b.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function pe(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
