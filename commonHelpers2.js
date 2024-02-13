import{i as c}from"./assets/quote-dee398cd.js";import{a as m,i as I}from"./assets/vendor-db25513e.js";m.defaults.baseURL="https://energyflow.b.goit.study/api";let M=document.getElementById("scrollToTopBtn");window.onscroll=function(){de()};function de(){document.body.scrollTop>20||document.documentElement.scrollTop>20?M.style.display="block":M.style.display="none"}M.addEventListener("click",ue);function ue(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const ee=document.querySelector(".exercises-nav-list"),te=document.querySelector(".exercises-container"),V=document.querySelector(".exercise-group"),b=document.querySelector(".pagination"),pe="https://energyflow.b.goit.study/api";let N="Muscles";ee.addEventListener("click",me);b.addEventListener("click",xe);O(N).then(_);async function me(e){const{filter:t}=e.target.dataset;if(!t)return;N=t,await O(t).then(_);const s=ee.querySelector(".active"),a=e.target;s.classList.remove("active"),a.classList.add("active")}async function O(e,t=1){return fetch(`${pe}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function _({results:e,page:t,totalPages:s}){ge(e),ve(s,t)}function ge(e){te.innerHTML=e.map(fe).join("")}function fe({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function ve(e,t){if(e<=1){b.innerHTML="";return}b.innerHTML=Array(e).fill(1).map((a,i)=>a+i).map(he).join(""),b.children[t-1].classList.add("active")}function he(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function xe(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&O(N,t).then(_)}te.addEventListener("click",ye);function ye(e){const s=e.target.closest(".exercise-card");if(!s)return;const a=s.querySelector(".description-category").textContent;return V.textContent=a,V.textContent}document.querySelector(".exercises-nav-list");const H=document.querySelector(".fetch-container"),be=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const Ee=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const K=document.querySelector(".exercises-search"),R=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const d=document.querySelector(".pagination-exercises"),E=innerWidth<1440?8:9,Le=document.querySelector(".search-container"),z=document.querySelector(".form-search"),Y=document.querySelector(".span-exercises "),$e=document.querySelector(".exercise-group");let S,w,L,$;d.addEventListener("click",Pe);const Se="https://energyflow.b.goit.study/api/",we={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";be.addEventListener("click",qe);H.classList.remove(o);R.classList.add(o);async function qe(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:a,page:i}=t.dataset;L=s,$=a,await Ce(we[s],a).then(ae),H.classList.add(o),R.classList.remove(o),K.addEventListener("click",n),z.classList.remove(o),Y.classList.remove(o);function n(r){console.log(r.target),r.currentTarget===K&&(H.classList.remove(o),R.classList.add(o),z.classList.add(o),Y.classList.add(o),Le.classList.add(o),$e.textContent="")}}async function Ce(e,t){return fetch(`${Se}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{S=s.results})}function se({bodyPart:e,target:t,name:s,burnedCalories:a,rating:i,time:n,_id:r}){return`<li class = "list-exercises" id="${r}" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${i}</p><svg class="icon-star" width="18" height="18"><use href="${c}#icon-star"></use></svg></div></div>

  
  <button type = "button" class="btn-start-arrow">Start<svg class="icon-arrow" width="14" height="14"><use href="${c}#icon-arrow"></use></svg></button>
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
           
            
            </li>`}function Te(e){w=Math.ceil(S.length/E),d.innerHTML=Array(w).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),d.children[e-1].classList.add("active"),ke(e)}function ke(e){var a,i;for(const n of[...d.children]){const r=+n.dataset.page;r!==1&&r!==w&&(r<e-3||r>e+3)&&n.remove()}const t=(a=d.children[1])==null?void 0:a.dataset.page,s=(i=d.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;t>2&&d.firstElementChild.after("..."),s<w-1&&d.lastElementChild.before("...")}function ae(e=1){const t=(e-1)*E,s=S.slice(t,t+E);if(Ee.innerHTML=s.map(se).join(""),Te(e),S.length<=E){d.innerHTML="";return}}function Pe(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&ae(t)}const f=document.querySelector(".modal-backdrop"),Be=document.querySelector(".exercises-gallery"),F=document.querySelector("body"),j="is-open";Be.addEventListener("click",Ie);async function Ie(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("li").id;try{F.classList.add("on-scroll");const a=await m.get(`/exercises/${t}`);Re(a.data),f.classList.add(j);const i=document.querySelector(".exercise-favorite-btn");(JSON.parse(localStorage.getItem("favorites"))||[]).some(x=>x._id===t)?i.innerHTML=`Remove from <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${c}#icon-heart"></use>
                  </svg>`:i.innerHTML=`Add to favorites <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${c}#icon-heart"></use>
                  </svg>`;const v=document.querySelectorAll(".stars-wrap-svg"),h=Math.round(a.data.rating);Fe(v,h)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{f.classList.remove(j),F.classList.remove("on-scroll")}),window.addEventListener("keydown",a=>{a.code==="Escape"&&G()})}f.addEventListener("click",Me);function Me(e){e.currentTarget===e.target&&G()}function G(){window.removeEventListener("keydown",He),f.classList.remove(j),F.classList.remove("on-scroll")}function He(e){e.code==="Escape"&&G()}function Re(e={}){const{_id:t,bodyPart:s,equipment:a,time:i,target:n,burnedCalories:r,gifUrl:v,name:h,popularity:x,rating:U,description:W}=e,ne=`<div class="exercises-modal-window">
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
                <button class="exercise-raiting-btn is-hidden" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>`;f.innerHTML=ne;const k="favorites";let p=JSON.parse(localStorage.getItem(k))||[];document.querySelector(".btn-start-arrow");const P=document.querySelector(".exercise-favorite-btn"),ce="Remove from",oe="Add to favorites";P.addEventListener("click",le);function le(){if(p.some(g=>g._id===t)){D(oe,P),p.find((g,B)=>{if(g._id===t)p.splice(B,1),localStorage.setItem(k,JSON.stringify(p));else return});return}else D(ce,P);p.push(e),localStorage.setItem(k,JSON.stringify(p))}function D(J,g){const B=g.childNodes[0];B.nodeValue=J}}function Fe(e,t){e.forEach((s,a)=>{a<t&&s.classList.add("yellow")})}document.querySelector(".fetch-container");const Q=document.querySelector(".exercises-toolbar"),X=document.querySelector(".search-container"),A=document.querySelector(".search-list"),re=document.querySelector(".form-search"),Z=document.querySelector(".no-results"),l=document.querySelector(".search-pagination"),q=innerWidth<1440?8:9,u="is-hidden";let y,C,T;re.addEventListener("submit",Oe);l.addEventListener("click",Ue);function je(e,t,s=1,a){return m.get("/exercises",{params:{bodypart:e,keyword:t,page:s,limit:a}})}function Ae(e,t,s=1,a){return m.get("/exercises",{params:{muscles:e,keyword:t,page:s,limit:a}})}function Ne(e,t,s=1,a){return m.get("/exercises",{params:{equipment:e,keyword:t,page:s,limit:a}})}async function Oe(e){e.preventDefault(),y=e.currentTarget.elements["input-search"].value.trim();let t;try{L==="Body parts"?t=await je($,y):L==="Muscles"?t=await Ae($,y):L==="Equipment"&&(t=await Ne($,y));const{totalPages:s,perPage:a,results:i}=t.data;if(s===null)X.classList.remove(u),Z.classList.remove(u),Q.classList.add(u),A.classList.add(u),l.innerHTML="";else{const{results:[{bodyPart:n,target:r,name:v,burnedCalories:h,rating:x,time:U,_id:W}]}=t.data;X.classList.remove(u),A.classList.remove(u),Z.classList.add(u),Q.classList.add(u),C=t.data.results,ie()}}catch(s){console.log(s)}finally{re.reset()}}function _e(e){if(T=Math.ceil(C.length/q),C.length<=q){l.innerHTML="";return}l.innerHTML=Array(T).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),l.children[e-1].classList.add("active"),Ge(e)}function Ge(e){var a,i;for(const n of[...l.children]){const r=+n.dataset.page;r!==1&&r!==T&&(r<e-3||r>e+3)&&n.remove()}const t=(a=l.children[1])==null?void 0:a.dataset.page,s=(i=l.lastElementChild.previousElementSibling)==null?void 0:i.dataset.page;t>2&&l.firstElementChild.after("..."),s<T-1&&l.lastElementChild.before("...")}function ie(e=1){const t=(e-1)*q,s=C.slice(t,t+q);A.innerHTML=s.map(se).join(""),_e(e)}function Ue(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&ie(t)}const We=document.getElementById("footerForm");We.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!De(t)){I.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}m.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){I.success({message:s.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#1b1b1b"}),document.getElementById("emailInput").value=""}).catch(function(s){I.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function De(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
