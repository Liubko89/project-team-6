import{i as n}from"./assets/scroll-to-top-btn-a64405a6.js";import{a as m,i as I}from"./assets/vendor-db25513e.js";m.defaults.baseURL="https://energyflow.b.goit.study/api";const Z=document.querySelector(".exercises-nav-list"),ee=document.querySelector(".exercises-container"),J=document.querySelector(".exercise-group"),b=document.querySelector(".pagination"),de="https://energyflow.b.goit.study/api";let F="Muscles";Z.addEventListener("click",ue);b.addEventListener("click",fe);N(F).then(O);async function ue(e){const{filter:t}=e.target.dataset;if(!t)return;F=t,await N(t).then(O);const s=Z.querySelector(".active"),a=e.target;s.classList.remove("active"),a.classList.add("active")}async function N(e,t=1){return fetch(`${de}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function O({results:e,page:t,totalPages:s}){pe(e),ge(s,t)}function pe(e){ee.innerHTML=e.map(me).join("")}function me({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function ge(e,t){if(e<=1){b.innerHTML="";return}b.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(ve).join(""),b.children[t-1].classList.add("active")}function ve(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function fe(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&N(F,t).then(O)}ee.addEventListener("click",he);function he(e){const s=e.target.closest(".exercise-card");if(!s)return;const a=s.querySelector(".description-category").textContent;return J.textContent=a,J.textContent}document.querySelector(".exercises-nav-list");const M=document.querySelector(".fetch-container"),xe=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const ye=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const V=document.querySelector(".exercises-search"),H=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const d=document.querySelector(".pagination-exercises"),L=innerWidth<1440?8:9,be=document.querySelector(".search-container"),K=document.querySelector(".form-search"),z=document.querySelector(".span-exercises "),Le=document.querySelector(".exercise-group");let $,w,E,S;d.addEventListener("click",ke);const Ee="https://energyflow.b.goit.study/api/",Se={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";xe.addEventListener("click",$e);M.classList.remove(o);H.classList.add(o);async function $e(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:a,page:i}=t.dataset;E=s,S=a,await we(Se[s],a).then(se),M.classList.add(o),H.classList.remove(o),V.addEventListener("click",c),K.classList.remove(o),z.classList.remove(o);function c(r){r.currentTarget===V&&(M.classList.remove(o),H.classList.add(o),K.classList.add(o),z.classList.add(o),be.classList.add(o),Le.textContent="")}}async function we(e,t){return fetch(`${Ee}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{$=s.results})}function te({bodyPart:e,target:t,name:s,burnedCalories:a,rating:i,time:c,_id:r}){return`<li class = "list-exercises" id="${r}" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="${n}#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">Start<svg class="icon-arrow" width="14" height="14"><use href="${n}#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${n}#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${s}</h4>
            </div>
            <div class="options-item-wrap">
              <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${c}</p>
              <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
              <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
           
            
            </li>`}function qe(e){w=Math.ceil($.length/L),d.innerHTML=Array(w).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),d.children[e-1].classList.add("active"),Ce(e)}function Ce(e){var a,i;for(const c of[...d.children]){const r=+c.dataset.page;r!==1&&r!==w&&(r<e-3||r>e+3)&&c.remove()}const t=(a=d.children[1])==null?void 0:a.dataset.page,s=(i=d.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;t>2&&d.firstElementChild.after("..."),s<w-1&&d.lastElementChild.before("...")}function se(e=1){const t=(e-1)*L,s=$.slice(t,t+L);if(ye.innerHTML=s.map(te).join(""),qe(e),$.length<=L){d.innerHTML="";return}}function ke(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&se(t)}const v=document.querySelector(".modal-backdrop"),Pe=document.querySelector(".exercises-gallery"),Be=document.querySelector(".search-list"),R=document.querySelector("body"),j="is-open";Pe.addEventListener("click",ae);Be.addEventListener("click",ae);async function ae(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("li").id;try{R.classList.add("on-scroll");const a=await m.get(`/exercises/${t}`);Me(a.data),v.classList.add(j);const i=document.querySelector(".exercise-favorite-btn");(JSON.parse(localStorage.getItem("favorites"))||[]).some(x=>x._id===t)?i.innerHTML=`Remove from <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${n}#icon-heart"></use>
                  </svg>`:i.innerHTML=`Add to favorites <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${n}#icon-heart"></use>
                  </svg>`;const f=document.querySelectorAll(".stars-wrap-svg"),h=Math.round(a.data.rating);He(f,h)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{v.classList.remove(j),R.classList.remove("on-scroll")}),window.addEventListener("keydown",a=>{a.code==="Escape"&&_()})}v.addEventListener("click",Te);function Te(e){e.currentTarget===e.target&&_()}function _(){window.removeEventListener("keydown",Ie),v.classList.remove(j),R.classList.remove("on-scroll")}function Ie(e){e.code==="Escape"&&_()}function Me(e={}){const{_id:t,bodyPart:s,equipment:a,time:i,target:c,burnedCalories:r,gifUrl:f,name:h,popularity:x,rating:G,description:U}=e,ce=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${n}#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${f}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${h}</p>
                <div class="rating-container">
                <p class="exercise-rating">${G}</p>
                <div class="stars-wrap">
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${n}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${n}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${n}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${n}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${n}#icon-star"></use>
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
                    <p class="exercise-param-value exercise-param-bodypart">${s}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${x}</p>
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
                  data="${t}"
                >
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${n}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn is-hidden" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;v.innerHTML=ce;const P="favorites";let p=JSON.parse(localStorage.getItem(P))||[];document.querySelector(".btn-start-arrow");const B=document.querySelector(".exercise-favorite-btn"),ne="Remove from",oe="Add to favorites";B.addEventListener("click",le);function le(){if(p.some(g=>g._id===t)){W(oe,B),p.find((g,T)=>{if(g._id===t)p.splice(T,1),localStorage.setItem(P,JSON.stringify(p));else return});return}else W(ne,B);p.push(e),localStorage.setItem(P,JSON.stringify(p))}function W(D,g){const T=g.childNodes[0];T.nodeValue=D}}function He(e,t){e.forEach((s,a)=>{a<t&&s.classList.add("yellow")})}document.querySelector(".fetch-container");const Y=document.querySelector(".exercises-toolbar"),Q=document.querySelector(".search-container"),A=document.querySelector(".search-list"),re=document.querySelector(".form-search"),X=document.querySelector(".no-results"),l=document.querySelector(".search-pagination"),q=innerWidth<1440?8:9,u="is-hidden";let y,C,k;re.addEventListener("submit",Fe);l.addEventListener("click",_e);function Re(e,t,s=1,a){return m.get("/exercises",{params:{bodypart:e,keyword:t,page:s,limit:a}})}function je(e,t,s=1,a){return m.get("/exercises",{params:{muscles:e,keyword:t,page:s,limit:a}})}function Ae(e,t,s=1,a){return m.get("/exercises",{params:{equipment:e,keyword:t,page:s,limit:a}})}async function Fe(e){e.preventDefault(),y=e.currentTarget.elements["input-search"].value.trim();let t;try{E==="Body parts"?t=await Re(S,y):E==="Muscles"?t=await je(S,y):E==="Equipment"&&(t=await Ae(S,y));const{totalPages:s,perPage:a,results:i}=t.data;if(s===null)Q.classList.remove(u),X.classList.remove(u),Y.classList.add(u),A.classList.add(u),l.innerHTML="";else{const{results:[{bodyPart:c,target:r,name:f,burnedCalories:h,rating:x,time:G,_id:U}]}=t.data;Q.classList.remove(u),A.classList.remove(u),X.classList.add(u),Y.classList.add(u),C=t.data.results,ie()}}catch(s){console.log(s)}finally{re.reset()}}function Ne(e){if(k=Math.ceil(C.length/q),C.length<=q){l.innerHTML="";return}l.innerHTML=Array(k).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),l.children[e-1].classList.add("active"),Oe(e)}function Oe(e){var a,i;for(const c of[...l.children]){const r=+c.dataset.page;r!==1&&r!==k&&(r<e-3||r>e+3)&&c.remove()}const t=(a=l.children[1])==null?void 0:a.dataset.page,s=(i=l.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;t>2&&l.firstElementChild.after("..."),s<k-1&&l.lastElementChild.before("...")}function ie(e=1){const t=(e-1)*q,s=C.slice(t,t+q);A.innerHTML=s.map(te).join(""),Ne(e)}function _e(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&ie(t)}const Ge=document.getElementById("footerForm");Ge.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!Ue(t)){I.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}m.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){I.success({message:s.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#eea10c"}),document.getElementById("emailInput").value=""}).catch(function(s){I.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function Ue(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
