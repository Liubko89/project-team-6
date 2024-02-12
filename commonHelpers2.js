import"./assets/quote-4faf83fe.js";import{a as l,i as b}from"./assets/vendor-db25513e.js";l.defaults.baseURL="https://energyflow.b.goit.study/api";const A=document.querySelector(".exercises-nav-list"),O=document.querySelector(".exercises-container"),P=document.querySelector(".exercise-group"),x=document.querySelector(".pagination"),G="https://energyflow.b.goit.study/api";let S="Muscles";A.addEventListener("click",F);x.addEventListener("click",V);q(S).then(k);async function F(e){const{filter:s}=e.target.dataset;if(!s)return;S=s,await q(s).then(k);const t=A.querySelector(".active"),a=e.target;t.classList.remove("active"),a.classList.add("active")}async function q(e,s=1){return fetch(`${G}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function k({results:e,page:s,totalPages:t}){W(e),K(t,s)}function W(e){O.innerHTML=e.map(_).join("")}function _({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${s}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function K(e,s){if(e<=1){x.innerHTML="";return}x.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(N).join(""),x.children[s-1].classList.add("active")}function N(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function V(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&q(S,s).then(k)}O.addEventListener("click",z);function z(e){const t=e.target.closest(".exercise-card");if(!t)return;const a=t.querySelector(".description-category").textContent;return P.textContent=a,P.textContent}document.querySelector(".exercises-nav-list");const w=document.querySelector(".fetch-container"),Y=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const J=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const M=document.querySelector(".exercises-search"),E=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const o=document.querySelector(".pagination-exercises"),$=innerWidth<1440?8:9;document.querySelectorAll(".exercises-nav-item");const I=document.querySelector(".form-search"),R=document.querySelector(".span-exercises "),Q=document.querySelector(".exercise-group");let C,y,u,p;o.addEventListener("click",ie);const X="https://energyflow.b.goit.study/api/",Z={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},n="is-hidden";Y.addEventListener("click",ee);w.classList.remove(n);E.classList.add(n);async function ee(e){const s=e.target.closest(".exercise-card");if(!s)return;const{filter:t,group:a,page:i}=s.dataset;u=t,p=a,await se(Z[t],a).then(B),w.classList.add(n),E.classList.remove(n),M.addEventListener("click",c),I.classList.remove(n),R.classList.remove(n);function c(r){console.log(r.target),r.currentTarget===M&&(w.classList.remove(n),E.classList.add(n),I.classList.add(n),R.classList.add(n),Q.textContent="")}}async function se(e,s){return fetch(`${X}exercises?${e}=${s}&limit=1e6`).then(t=>t.json()).then(t=>{C=t.results})}function H({bodyPart:e,target:s,name:t,burnedCalories:a,rating:i,time:c,_id:r}){return`<li class = "list-exercises" id="${r}" data-filter="${t}"><div class="options">
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
            <div class="options-item-wrap">
              <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${c}</p>
              <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
              <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
           
            
            </li>`}function te(e){y=Math.ceil(C.length/$),o.innerHTML=Array(y).fill(1).map((t,a)=>t+a).map(t=>`<li class="page-exercises" data-page="${t}"><button id="prevPage">${t}</button></li>`).join(""),o.children[e-1].classList.add("active"),ae(e)}function ae(e){var a,i;for(const c of[...o.children]){const r=+c.dataset.page;r!==1&&r!==y&&(r<e-3||r>e+3)&&c.remove()}const s=(a=o.children[1])==null?void 0:a.dataset.page,t=(i=o.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;s>2&&o.firstElementChild.after("..."),t<y-1&&o.lastElementChild.before("...")}function B(e=1){const s=(e-1)*$,t=C.slice(s,s+$);J.innerHTML=t.map(H).join(""),te(e)}function ie(e){var t;const s=+((t=e.target.closest(".page-exercises"))==null?void 0:t.dataset.page);s&&B(s)}const j="/project-team-6/assets/icons-66c1ea1d.svg",g=document.querySelector(".modal-backdrop"),re=document.querySelector(".exercises-gallery"),L="is-open";re.addEventListener("click",ce);async function ce(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest("li").id;try{const a=await l.get(`/exercises/${s}`);le(a.data),g.classList.add(L);const i=document.querySelectorAll(".stars-wrap-svg"),c=Math.round(a.data.rating);de(i,c)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{g.classList.remove(L)}),window.addEventListener("keydown",a=>{a.code==="Escape"&&T()})}g.addEventListener("click",ne);function ne(e){e.currentTarget===e.target&&T()}function T(){window.removeEventListener("keydown",oe),g.classList.remove(L)}function oe(e){e.code==="Escape"&&T()}function le(e={}){const{_id:s,bodyPart:t,equipment:a,time:i,target:c,burnedCalories:r,gifUrl:m,name:v,popularity:h,rating:f,description:U}=e,D=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${j}#icon-close-btn"></use>
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
              <p class="exercise-descr">${U}</p>
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
                  <use href="${j}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${s}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;g.innerHTML=D}function de(e,s){e.forEach((t,a)=>{a<s&&t.classList.add("yellow")})}const ue=document.querySelector(".form-search");ue.addEventListener("submit",ve);function pe(e,s,t=1,a=9){return l.get("/exercises",{params:{bodypart:e,keyword:s,page:t,limit:a}})}function ge(e,s,t=1,a=9){return l.get("/exercises",{params:{muscles:e,keyword:s,page:t,limit:a}})}function me(e,s,t=1,a=9){return l.get("/exercises",{params:{equipment:e,keyword:s,page:t,limit:a}})}let d;async function ve(e){e.preventDefault(),d=e.currentTarget.elements["input-search"].value.trim(),console.log(d),console.log(u),console.log(p);let s;try{u==="Body parts"?s=await pe(p,d):u==="Muscles"?s=await ge(p,d):u==="Equipment"&&(s=await me(p,d));const{totalPages:t,perPage:a,results:[{bodyPart:i,target:c,name:r,burnedCalories:m,rating:v,time:h,_id:f}]}=s.data;console.log(s),console.log(i,c,r,m,v,h,f),s.data.results.length===0?console.log("TODO: Unfortunately, no results were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs."):(console.log("TODO: малюэмо розмітку"),H({bodyPart:i,target:c,name:r,burnedCalories:m,rating:v,time:h,_id:f}),B())}catch(t){console.log(t)}finally{}}document.getElementById("footerForm").addEventListener("submit",function(e){e.preventDefault();const s=document.getElementById("emailInput").value;if(console.log(s),!he(s)){b.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}l.post("https://energyflow.b.goit.study/api/subscription",{email:s},{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t.data),b.success({title:"Success",message:"Subscription created successfully!",position:"topRight"}),document.getElementById("emailInput").value=""}).catch(function(t){console.error("Error:",t),b.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function he(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
