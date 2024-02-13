import{i as c}from"./assets/quote-51037797.js";import{a as m,i as M}from"./assets/vendor-db25513e.js";m.defaults.baseURL="https://energyflow.b.goit.study/api";let H=document.getElementById("scrollToTopBtn");window.onscroll=function(){le()};function le(){document.body.scrollTop>20||document.documentElement.scrollTop>20?H.style.display="block":H.style.display="none"}H.addEventListener("click",de);function de(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const Z=document.querySelector(".exercises-nav-list"),ee=document.querySelector(".exercises-container"),J=document.querySelector(".exercise-group"),b=document.querySelector(".pagination"),ue="https://energyflow.b.goit.study/api";let N="Muscles";Z.addEventListener("click",pe);b.addEventListener("click",he);_(N).then(O);async function pe(e){const{filter:t}=e.target.dataset;if(!t)return;N=t,await _(t).then(O);const s=Z.querySelector(".active"),a=e.target;s.classList.remove("active"),a.classList.add("active")}async function _(e,t=1){return fetch(`${ue}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function O({results:e,page:t,totalPages:s}){me(e),fe(s,t)}function me(e){ee.innerHTML=e.map(ge).join("")}function ge({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function fe(e,t){if(e<=1){b.innerHTML="";return}b.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(ve).join(""),b.children[t-1].classList.add("active")}function ve(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function he(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&_(N,t).then(O)}ee.addEventListener("click",xe);function xe(e){const s=e.target.closest(".exercise-card");if(!s)return;const a=s.querySelector(".description-category").textContent;return J.textContent=a,J.textContent}document.querySelector(".exercises-nav-list");const R=document.querySelector(".fetch-container"),ye=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const be=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const V=document.querySelector(".exercises-search"),A=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const d=document.querySelector(".pagination-exercises"),E=innerWidth<1440?8:9,Ee=document.querySelector(".search-container"),K=document.querySelector(".form-search"),z=document.querySelector(".span-exercises "),Le=document.querySelector(".exercise-group");let S,w,L,$;d.addEventListener("click",ke);const $e="https://energyflow.b.goit.study/api/",Se={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";ye.addEventListener("click",we);R.classList.remove(o);A.classList.add(o);async function we(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:a,page:i}=t.dataset;L=s,$=a,await qe(Se[s],a).then(se),R.classList.add(o),A.classList.remove(o),V.addEventListener("click",n),K.classList.remove(o),z.classList.remove(o);function n(r){console.log(r.target),r.currentTarget===V&&(R.classList.remove(o),A.classList.add(o),K.classList.add(o),z.classList.add(o),Ee.classList.add(o),Le.textContent="")}}async function qe(e,t){return fetch(`${$e}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{S=s.results})}function te({bodyPart:e,target:t,name:s,burnedCalories:a,rating:i,time:n,_id:r}){return`<li class = "list-exercises" id="${r}" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="${c}#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="${c}#icon-arrow"></use></svg></button>
  </div>
           
            <div class="exercises-par"> 
            <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${c}#icon-running-man"></use></svg></div>
            <h4 class="ex-name">${s}</h4>
            </div>
            <div class="options-item-wrap">
              <p class="options-item"><span class="hid-txt">Burned calories:</span>${a}/${n}</p>
              <p class="options-item"><span class="hid-txt">Body part:</span>${e}</p>
              <p class="options-item"><span class="hid-txt">Target:</span>${t}</p></div>
            </div>
           
            
            </li>`}function Ce(e){w=Math.ceil(S.length/E),d.innerHTML=Array(w).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),d.children[e-1].classList.add("active"),Te(e)}function Te(e){var a,i;for(const n of[...d.children]){const r=+n.dataset.page;r!==1&&r!==w&&(r<e-3||r>e+3)&&n.remove()}const t=(a=d.children[1])==null?void 0:a.dataset.page,s=(i=d.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;t>2&&d.firstElementChild.after("..."),s<w-1&&d.lastElementChild.before("...")}function se(e=1){const t=(e-1)*E,s=S.slice(t,t+E);if(be.innerHTML=s.map(te).join(""),Ce(e),S.length<=E){d.innerHTML="";return}}function ke(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&se(t)}const f=document.querySelector(".modal-backdrop"),Pe=document.querySelector(".exercises-gallery"),F="is-open";Pe.addEventListener("click",Be);async function Be(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("li").id;try{const a=await m.get(`/exercises/${t}`);He(a.data),f.classList.add(F);const i=document.querySelector(".exercise-favorite-btn");(JSON.parse(localStorage.getItem("favorites"))||[]).some(x=>x._id===t)?i.innerHTML=`Remove from <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${c}#icon-heart"></use>
                  </svg>`:i.innerHTML=`Add to favorites <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${c}#icon-heart"></use>
                  </svg>`;const v=document.querySelectorAll(".stars-wrap-svg"),h=Math.round(a.data.rating);Re(v,h)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{f.classList.remove(F)}),window.addEventListener("keydown",a=>{a.code==="Escape"&&G()})}f.addEventListener("click",Ie);function Ie(e){e.currentTarget===e.target&&G()}function G(){window.removeEventListener("keydown",Me),f.classList.remove(F)}function Me(e){e.code==="Escape"&&G()}function He(e={}){const{_id:t,bodyPart:s,equipment:a,time:i,target:n,burnedCalories:r,gifUrl:v,name:h,popularity:x,rating:U,description:W}=e,ie=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${c}#icon-close-btn"></use>
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
                <p class="exercise-rating">${U}</p>
                <div class="stars-wrap">
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${c}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${c}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${c}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${c}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${c}#icon-star"></use>
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
                    <p class="exercise-param-value exercise-param-popularuty">${x}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${r}/${i} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${W}</p>
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
                  <use href="${c}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;f.innerHTML=ie;const k="favorites";let p=JSON.parse(localStorage.getItem(k))||[];document.querySelector(".btn-start-arrow");const P=document.querySelector(".exercise-favorite-btn"),ne="Remove from",ce="Add to favorites";P.addEventListener("click",oe);function oe(){const B=p.some(g=>g._id===t);if(console.log(t),B){D(ce,P),p.find((g,I)=>{if(g._id===t)p.splice(I,1),console.log(p),localStorage.setItem(k,JSON.stringify(p));else return});return}else D(ne,P);p.push(e),localStorage.setItem(k,JSON.stringify(p))}function D(B,g){const I=g.childNodes[0];I.nodeValue=B}}function Re(e,t){e.forEach((s,a)=>{a<t&&s.classList.add("yellow")})}document.querySelector(".fetch-container");const Y=document.querySelector(".exercises-toolbar"),Q=document.querySelector(".search-container"),j=document.querySelector(".search-list"),ae=document.querySelector(".form-search"),X=document.querySelector(".no-results"),l=document.querySelector(".search-pagination"),q=innerWidth<1440?8:9,u="is-hidden";let y,C,T;ae.addEventListener("submit",Ne);l.addEventListener("click",Ge);function Ae(e,t,s=1,a){return m.get("/exercises",{params:{bodypart:e,keyword:t,page:s,limit:a}})}function Fe(e,t,s=1,a){return m.get("/exercises",{params:{muscles:e,keyword:t,page:s,limit:a}})}function je(e,t,s=1,a){return m.get("/exercises",{params:{equipment:e,keyword:t,page:s,limit:a}})}async function Ne(e){e.preventDefault(),y=e.currentTarget.elements["input-search"].value.trim();let t;try{L==="Body parts"?t=await Ae($,y):L==="Muscles"?t=await Fe($,y):L==="Equipment"&&(t=await je($,y));const{totalPages:s,perPage:a,results:i}=t.data;if(s===null)Q.classList.remove(u),X.classList.remove(u),Y.classList.add(u),j.classList.add(u),l.innerHTML="";else{const{results:[{bodyPart:n,target:r,name:v,burnedCalories:h,rating:x,time:U,_id:W}]}=t.data;Q.classList.remove(u),j.classList.remove(u),X.classList.add(u),Y.classList.add(u),C=t.data.results,re()}}catch(s){console.log(s)}finally{ae.reset()}}function _e(e){if(T=Math.ceil(C.length/q),C.length<=q){l.innerHTML="";return}l.innerHTML=Array(T).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),l.children[e-1].classList.add("active"),Oe(e)}function Oe(e){var a,i;for(const n of[...l.children]){const r=+n.dataset.page;r!==1&&r!==T&&(r<e-3||r>e+3)&&n.remove()}const t=(a=l.children[1])==null?void 0:a.dataset.page,s=(i=l.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;t>2&&l.firstElementChild.after("..."),s<T-1&&l.lastElementChild.before("...")}function re(e=1){const t=(e-1)*q,s=C.slice(t,t+q);j.innerHTML=s.map(te).join(""),_e(e)}function Ge(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&re(t)}const Ue=document.getElementById("footerForm");Ue.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!We(t)){M.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}m.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){M.success({message:s.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#1b1b1b"}),document.getElementById("emailInput").value=""}).catch(function(s){M.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function We(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
