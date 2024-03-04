import{i as n}from"./assets/scroll-to-top-btn-1c0c3e65.js";import{a as m,i as I}from"./assets/vendor-db25513e.js";m.defaults.baseURL="https://energyflow.b.goit.study/api";const Z=document.querySelector(".exercises-nav-list"),ee=document.querySelector(".exercises-container"),J=document.querySelector(".exercise-group"),b=document.querySelector(".pagination"),de="https://energyflow.b.goit.study/api";let F="Muscles";Z.addEventListener("click",ue);b.addEventListener("click",ve);N(F).then(O);async function ue(e){const{filter:s}=e.target.dataset;if(!s)return;F=s,await N(s).then(O);const t=Z.querySelector(".active"),a=e.target;t.classList.remove("active"),a.classList.add("active")}async function N(e,s=1){return fetch(`${de}/filters?filter=${e}&page=${s}&limit=12`).then(t=>t.json())}function O({results:e,page:s,totalPages:t}){pe(e),ge(t,s)}function pe(e){ee.innerHTML=e.map(me).join("")}function me({name:e,filter:s,imgUrl:t}){return`
    <li class="exercise-card" data-filter="${s}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${t}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${s}</p>
        </div>      
      </div>
    </li>
  `}function ge(e,s){if(e<=1){b.innerHTML="";return}b.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(fe).join(""),b.children[s-1].classList.add("active")}function fe(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function ve(e){var t;const s=(t=e.target.closest(".page"))==null?void 0:t.dataset.page;s&&N(F,s).then(O)}ee.addEventListener("click",he);function he(e){const t=e.target.closest(".exercise-card");if(!t)return;const a=t.querySelector(".description-category").textContent;return J.textContent=a,J.textContent}document.querySelector(".exercises-nav-list");const M=document.querySelector(".fetch-container"),xe=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const ye=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const V=document.querySelector(".exercises-search"),H=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const d=document.querySelector(".pagination-exercises"),L=innerWidth<1440?8:9,be=document.querySelector(".search-container"),K=document.querySelector(".form-search"),z=document.querySelector(".span-exercises "),Le=document.querySelector(".exercise-group");let $,w,E,S;d.addEventListener("click",ke);const Ee="https://energyflow.b.goit.study/api/",Se={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";xe.addEventListener("click",$e);M.classList.remove(o);H.classList.add(o);async function $e(e){const s=e.target.closest(".exercise-card");if(!s)return;const{filter:t,group:a,page:i}=s.dataset;E=t,S=a,await we(Se[t],a).then(te),M.classList.add(o),H.classList.remove(o),V.addEventListener("click",c),K.classList.remove(o),z.classList.remove(o);function c(r){r.currentTarget===V&&(M.classList.remove(o),H.classList.add(o),K.classList.add(o),z.classList.add(o),be.classList.add(o),Le.textContent="")}}async function we(e,s){return fetch(`${Ee}exercises?${e}=${s}&limit=1e6`).then(t=>t.json()).then(t=>{$=t.results})}function se({bodyPart:e,target:s,name:t,burnedCalories:a,rating:i,time:c,_id:r}){return`<li class = "list-exercises" id="${r}" data-filter="${t}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="${n}#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">Start<svg class="icon-arrow" width="14" height="14"><use href="${n}#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${n}#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${t}</h4>
            </div>
            <div class="options-item-wrap">
              <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${c}</p>
              <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
              <p class="options-item"><span class="hid-txt">Target:</span>${s}</p></div>
            </div>
           
            
            </li>`}function qe(e){w=Math.ceil($.length/L),d.innerHTML=Array(w).fill(1).map((t,a)=>t+a).map(t=>`<li class="page-exercises" data-page="${t}"><button id="prevPage">${t}</button></li>`).join(""),d.children[e-1].classList.add("active"),Ce(e)}function Ce(e){var a,i;for(const c of[...d.children]){const r=+c.dataset.page;r!==1&&r!==w&&(r<e-3||r>e+3)&&c.remove()}const s=(a=d.children[1])==null?void 0:a.dataset.page,t=(i=d.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;s>2&&d.firstElementChild.after("..."),t<w-1&&d.lastElementChild.before("...")}function te(e=1){const s=(e-1)*L,t=$.slice(s,s+L);if(ye.innerHTML=t.map(se).join(""),qe(e),$.length<=L){d.innerHTML="";return}}function ke(e){var t;const s=+((t=e.target.closest(".page-exercises"))==null?void 0:t.dataset.page);s&&te(s)}const f=document.querySelector(".modal-backdrop"),Pe=document.querySelector(".exercises-gallery"),Te=document.querySelector(".search-list"),R=document.querySelector("body"),j="is-open";Pe.addEventListener("click",ae);Te.addEventListener("click",ae);async function ae(e){if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest("li").id;try{R.classList.add("on-scroll");const a=await m.get(`/exercises/${s}`);Me(a.data),f.classList.add(j);const i=document.querySelector(".exercise-favorite-btn");(JSON.parse(localStorage.getItem("favorites"))||[]).some(x=>x._id===s)?i.innerHTML=`Remove from <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${n}#icon-heart"></use>
                  </svg>`:i.innerHTML=`Add to favorites <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${n}#icon-heart"></use>
                  </svg>`;const v=document.querySelectorAll(".stars-wrap-svg"),h=Math.round(a.data.rating);He(v,h)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{f.classList.remove(j),R.classList.remove("on-scroll")}),window.addEventListener("keydown",a=>{a.code==="Escape"&&_()})}f.addEventListener("click",Be);function Be(e){e.currentTarget===e.target&&_()}function _(){window.removeEventListener("keydown",Ie),f.classList.remove(j),R.classList.remove("on-scroll")}function Ie(e){e.code==="Escape"&&_()}function Me(e={}){const{_id:s,bodyPart:t,equipment:a,time:i,target:c,burnedCalories:r,gifUrl:v,name:h,popularity:x,rating:G,description:U}=e,ce=`<div class="exercises-modal-window">
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
                src="${v}"
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
                    <p class="exercise-param-value exercise-param-bodypart">${t}</p>
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
                  data="${s}"
                >
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${n}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn is-hidden" type="submit" data="${s}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;f.innerHTML=ce;const P="favorites";let p=JSON.parse(localStorage.getItem(P))||[];document.querySelector(".btn-start-arrow");const T=document.querySelector(".exercise-favorite-btn"),ne="Remove from",oe="Add to favorites";T.addEventListener("click",le);function le(){if(p.some(g=>g._id===s)){W(oe,T),p.find((g,B)=>{if(g._id===s)p.splice(B,1),localStorage.setItem(P,JSON.stringify(p));else return});return}else W(ne,T);p.push(e),localStorage.setItem(P,JSON.stringify(p))}function W(D,g){const B=g.childNodes[0];B.nodeValue=D}}function He(e,s){e.forEach((t,a)=>{a<s&&t.classList.add("yellow")})}document.querySelector(".fetch-container");const Y=document.querySelector(".exercises-toolbar"),Q=document.querySelector(".search-container"),A=document.querySelector(".search-list"),re=document.querySelector(".form-search"),X=document.querySelector(".no-results"),l=document.querySelector(".search-pagination"),q=innerWidth<1440?8:9,u="is-hidden";let y,C,k;re.addEventListener("submit",Fe);l.addEventListener("click",_e);function Re(e,s,t=1,a){return m.get("/exercises",{params:{bodypart:e,keyword:s,page:t,limit:a}})}function je(e,s,t=1,a){return m.get("/exercises",{params:{muscles:e,keyword:s,page:t,limit:a}})}function Ae(e,s,t=1,a){return m.get("/exercises",{params:{equipment:e,keyword:s,page:t,limit:a}})}async function Fe(e){e.preventDefault(),y=e.currentTarget.elements["input-search"].value.trim();let s;try{E==="Body parts"?s=await Re(S,y):E==="Muscles"?s=await je(S,y):E==="Equipment"&&(s=await Ae(S,y));const{totalPages:t,perPage:a,results:i}=s.data;if(t===null)Q.classList.remove(u),X.classList.remove(u),Y.classList.add(u),A.classList.add(u),l.innerHTML="";else{const{results:[{bodyPart:c,target:r,name:v,burnedCalories:h,rating:x,time:G,_id:U}]}=s.data;Q.classList.remove(u),A.classList.remove(u),X.classList.add(u),Y.classList.add(u),C=s.data.results,ie()}}catch(t){console.log(t)}finally{re.reset()}}function Ne(e){if(k=Math.ceil(C.length/q),C.length<=q){l.innerHTML="";return}l.innerHTML=Array(k).fill(1).map((t,a)=>t+a).map(t=>`<li class="page-exercises" data-page="${t}"><button id="prevPage">${t}</button></li>`).join(""),l.children[e-1].classList.add("active"),Oe(e)}function Oe(e){var a,i;for(const c of[...l.children]){const r=+c.dataset.page;r!==1&&r!==k&&(r<e-3||r>e+3)&&c.remove()}const s=(a=l.children[1])==null?void 0:a.dataset.page,t=(i=l.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;s>2&&l.firstElementChild.after("..."),t<k-1&&l.lastElementChild.before("...")}function ie(e=1){const s=(e-1)*q,t=C.slice(s,s+q);A.innerHTML=t.map(se).join(""),Ne(e)}function _e(e){var t;const s=+((t=e.target.closest(".page-exercises"))==null?void 0:t.dataset.page);s&&ie(s)}const Ge=document.getElementById("footerForm");Ge.addEventListener("submit",function(e){e.preventDefault();const s=document.getElementById("emailInput").value;if(!Ue(s)){I.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}m.post("/subscription",{email:s},{headers:{"Content-Type":"application/json"}}).then(function(t){I.success({message:t.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#eea10c"}),document.getElementById("emailInput").value=""}).catch(function(t){I.success({message:"This email address has already subscribed",position:"topRight",messageColor:"#fff",backgroundColor:"#eea10c"})})});function Ue(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
