import"./assets/quote-9990b4d0.js";import{a as m,i as $}from"./assets/vendor-db25513e.js";m.defaults.baseURL="https://energyflow.b.goit.study/api";let L=document.getElementById("scrollToTopBtn");window.onscroll=function(){X()};function X(){document.body.scrollTop>20||document.documentElement.scrollTop>20?L.style.display="block":L.style.display="none"}L.addEventListener("click",Y);function Y(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const N=document.querySelector(".exercises-nav-list"),V=document.querySelector(".exercises-container"),G=document.querySelector(".exercise-group"),f=document.querySelector(".pagination"),Z="https://energyflow.b.goit.study/api";let T="Muscles";N.addEventListener("click",ee);f.addEventListener("click",ie);k(T).then(P);async function ee(e){const{filter:t}=e.target.dataset;if(!t)return;T=t,await k(t).then(P);const s=N.querySelector(".active"),a=e.target;s.classList.remove("active"),a.classList.add("active")}async function k(e,t=1){return fetch(`${Z}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function P({results:e,page:t,totalPages:s}){te(e),ae(s,t)}function te(e){V.innerHTML=e.map(se).join("")}function se({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function ae(e,t){if(e<=1){f.innerHTML="";return}f.innerHTML=Array(e).fill(1).map((a,r)=>a+r).map(re).join(""),f.children[t-1].classList.add("active")}function re(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function ie(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&k(T,t).then(P)}V.addEventListener("click",ne);function ne(e){const s=e.target.closest(".exercise-card");if(!s)return;const a=s.querySelector(".description-category").textContent;return G.textContent=a,G.textContent}const o="/project-team-6/assets/icons-66c1ea1d.svg";document.querySelector(".exercises-nav-list");const w=document.querySelector(".fetch-container"),ce=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const oe=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const U=document.querySelector(".exercises-search"),S=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const u=document.querySelector(".pagination-exercises"),C=innerWidth<1440?8:9,le=document.querySelector(".search-container"),W=document.querySelector(".form-search"),D=document.querySelector(".span-exercises "),de=document.querySelector(".exercise-group");let B,b,v,x;u.addEventListener("click",ve);const ue="https://energyflow.b.goit.study/api/",pe={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},c="is-hidden";ce.addEventListener("click",me);w.classList.remove(c);S.classList.add(c);async function me(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:a,page:r}=t.dataset;v=s,x=a,await ge(pe[s],a).then(z),w.classList.add(c),S.classList.remove(c),U.addEventListener("click",n),W.classList.remove(c),D.classList.remove(c);function n(i){console.log(i.target),i.currentTarget===U&&(w.classList.remove(c),S.classList.add(c),W.classList.add(c),D.classList.add(c),le.classList.add(c),de.textContent="")}}async function ge(e,t){return fetch(`${ue}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{B=s.results})}function M({bodyPart:e,target:t,name:s,burnedCalories:a,rating:r,time:n,_id:i}){return`<li class = "list-exercises" id="${i}" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${r}</p><svg class="icon-star" width="18" height="18"><use href="${o}#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="${o}#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${o}#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${s}</h4>
            </div>
            <div class="options-item-wrap">
              <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${n}</p>
              <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
              <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
           
            
            </li>`}function he(e){b=Math.ceil(B.length/C),u.innerHTML=Array(b).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),u.children[e-1].classList.add("active"),fe(e)}function fe(e){var a,r;for(const n of[...u.children]){const i=+n.dataset.page;i!==1&&i!==b&&(i<e-3||i>e+3)&&n.remove()}const t=(a=u.children[1])==null?void 0:a.dataset.page,s=(r=u.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;t>2&&u.firstElementChild.after("..."),s<b-1&&u.lastElementChild.before("...")}function z(e=1){const t=(e-1)*C,s=B.slice(t,t+C);oe.innerHTML=s.map(M).join(""),he(e)}function ve(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&z(t)}const g=document.querySelector(".modal-backdrop"),xe=document.querySelector(".exercises-gallery"),q="is-open";xe.addEventListener("click",ye);async function ye(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("li").id;try{const a=await m.get(`/exercises/${t}`);$e(a.data),g.classList.add(q);const r=document.querySelectorAll(".stars-wrap-svg"),n=Math.round(a.data.rating);Le(r,n)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{g.classList.remove(q)}),window.addEventListener("keydown",a=>{a.code==="Escape"&&I()})}g.addEventListener("click",be);function be(e){e.currentTarget===e.target&&I()}function I(){window.removeEventListener("keydown",Ee),g.classList.remove(q)}function Ee(e){e.code==="Escape"&&I()}function $e(e={}){const{_id:t,bodyPart:s,equipment:a,time:r,target:n,burnedCalories:i,gifUrl:j,name:H,popularity:R,rating:A,description:F}=e,Q=`<div class="exercises-modal-window">
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
                src="${j}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${H}</p>
                <div class="rating-container">
                <p class="exercise-rating">${A}</p>
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
                    <p class="exercise-param-value exercise-param-target">${n}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${R}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${i}/${r} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${F}</p>
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
                  <use href="${o}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;g.innerHTML=Q}function Le(e,t){e.forEach((s,a)=>{a<t&&s.classList.add("yellow")})}document.querySelector(".fetch-container");const _=document.querySelector(".exercises-toolbar"),O=document.querySelector(".search-container"),y=document.querySelector(".search-list"),J=document.querySelector(".form-search"),K=document.querySelector(".no-results"),l=document.querySelector(".search-pagination"),E=innerWidth<1440?8:9,d="is-hidden";let h,p;J.addEventListener("submit",qe);l.addEventListener("click",Be);function we(e,t,s=1,a=9){return m.get("/exercises",{params:{bodypart:e,keyword:t,page:s,limit:a}})}function Se(e,t,s=1,a=9){return m.get("/exercises",{params:{muscles:e,keyword:t,page:s,limit:a}})}function Ce(e,t,s=1,a=9){return m.get("/exercises",{params:{equipment:e,keyword:t,page:s,limit:a}})}async function qe(e){e.preventDefault(),h=e.currentTarget.elements["input-search"].value.trim();let t;try{v==="Body parts"?t=await we(x,h):v==="Muscles"?t=await Se(x,h):v==="Equipment"&&(t=await Ce(x,h));const{totalPages:s,perPage:a,results:r}=t.data;if(s===null)O.classList.remove(d),K.classList.remove(d),_.classList.add(d),y.classList.add(d);else{const{results:[{bodyPart:n,target:i,name:j,burnedCalories:H,rating:R,time:A,_id:F}]}=t.data;O.classList.remove(d),y.classList.remove(d),K.classList.add(d),_.classList.add(d),p=t.data.results,y.innerHTML=p.map(M).join("")}}catch(s){console.log(s)}finally{J.reset()}}function Te(e){if(pageCount=Math.ceil(p.length/E),console.log(p),p.length<=E){l.innerHTML="";return}const t=Array(pageCount);console.log(t),l.innerHTML=Array(pageCount).fill(1).map((a,r)=>a+r).map(a=>`<li class="page-exercises" data-page="${a}"><button id="prevPage">${a}</button></li>`).join(""),l.children[e-1].classList.add("active"),ke(e)}function ke(e){var a,r;for(const n of[...l.children]){const i=+n.dataset.page;i!==1&&i!==pageCount&&(i<e-3||i>e+3)&&n.remove()}const t=(a=l.children[1])==null?void 0:a.dataset.page,s=(r=l.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;t>2&&l.firstElementChild.after("..."),s<pageCount-1&&l.lastElementChild.before("...")}function Pe(e=1){const t=(e-1)*E,s=p.slice(t,t+E);y.innerHTML=s.map(M).join(""),Te(e)}function Be(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&Pe(t)}const Me=document.getElementById("footerForm");Me.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!Ie(t)){$.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}m.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){$.success({message:s.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#1b1b1b"}),document.getElementById("emailInput").value=""}).catch(function(s){$.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function Ie(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
