import{i as o}from"./assets/quote-4d39229c.js";import{a as g,i as T}from"./assets/vendor-db25513e.js";g.defaults.baseURL="https://energyflow.b.goit.study/api";let k=document.getElementById("scrollToTopBtn");window.onscroll=function(){oe()};function oe(){document.body.scrollTop>20||document.documentElement.scrollTop>20?k.style.display="block":k.style.display="none"}k.addEventListener("click",le);function le(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const Z=document.querySelector(".exercises-nav-list"),ee=document.querySelector(".exercises-container"),V=document.querySelector(".exercise-group"),y=document.querySelector(".pagination"),de="https://energyflow.b.goit.study/api";let R="Muscles";Z.addEventListener("click",ue);y.addEventListener("click",he);A(R).then(j);async function ue(e){const{filter:t}=e.target.dataset;if(!t)return;R=t,await A(t).then(j);const s=Z.querySelector(".active"),a=e.target;s.classList.remove("active"),a.classList.add("active")}async function A(e,t=1){return fetch(`${de}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function j({results:e,page:t,totalPages:s}){pe(e),ge(s,t)}function pe(e){ee.innerHTML=e.map(me).join("")}function me({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function ge(e,t){if(e<=1){y.innerHTML="";return}y.innerHTML=Array(e).fill(1).map((a,r)=>a+r).map(fe).join(""),y.children[t-1].classList.add("active")}function fe(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function he(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&A(R,t).then(j)}ee.addEventListener("click",ve);function ve(e){const s=e.target.closest(".exercise-card");if(!s)return;const a=s.querySelector(".description-category").textContent;return V.textContent=a,V.textContent}document.querySelector(".exercises-nav-list");const P=document.querySelector(".fetch-container"),xe=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const ye=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const J=document.querySelector(".exercises-search"),B=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const u=document.querySelector(".pagination-exercises"),I=innerWidth<1440?8:9,be=document.querySelector(".search-container"),K=document.querySelector(".form-search"),z=document.querySelector(".span-exercises "),Ee=document.querySelector(".exercise-group");let F,$,b,E;u.addEventListener("click",Te);const Le="https://energyflow.b.goit.study/api/",$e={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},c="is-hidden";xe.addEventListener("click",we);P.classList.remove(c);B.classList.add(c);async function we(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:a,page:r}=t.dataset;b=s,E=a,await Se($e[s],a).then(te),P.classList.add(c),B.classList.remove(c),J.addEventListener("click",n),K.classList.remove(c),z.classList.remove(c);function n(i){console.log(i.target),i.currentTarget===J&&(P.classList.remove(c),B.classList.add(c),K.classList.add(c),z.classList.add(c),be.classList.add(c),Ee.textContent="")}}async function Se(e,t){return fetch(`${Le}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{F=s.results})}function H({bodyPart:e,target:t,name:s,burnedCalories:a,rating:r,time:n,_id:i}){return`<li class = "list-exercises" id="${i}" data-filter="${s}"><div class="options">
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
           
            
            </li>`}function Ce(e){$=Math.ceil(F.length/I),u.innerHTML=Array($).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),u.children[e-1].classList.add("active"),qe(e)}function qe(e){var a,r;for(const n of[...u.children]){const i=+n.dataset.page;i!==1&&i!==$&&(i<e-3||i>e+3)&&n.remove()}const t=(a=u.children[1])==null?void 0:a.dataset.page,s=(r=u.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;t>2&&u.firstElementChild.after("..."),s<$-1&&u.lastElementChild.before("...")}function te(e=1){const t=(e-1)*I,s=F.slice(t,t+I);ye.innerHTML=s.map(H).join(""),Ce(e)}function Te(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&te(t)}const h=document.querySelector(".modal-backdrop"),ke=document.querySelector(".exercises-gallery"),M="is-open";ke.addEventListener("click",Pe);async function Pe(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("li").id;try{const a=await g.get(`/exercises/${t}`);Me(a.data),h.classList.add(M);const r=document.querySelectorAll(".stars-wrap-svg"),n=Math.round(a.data.rating);Re(r,n)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{h.classList.remove(M)}),window.addEventListener("keydown",a=>{a.code==="Escape"&&_()})}h.addEventListener("click",Be);function Be(e){e.currentTarget===e.target&&_()}function _(){window.removeEventListener("keydown",Ie),h.classList.remove(M)}function Ie(e){e.code==="Escape"&&_()}function Me(e={}){const{_id:t,bodyPart:s,equipment:a,time:r,target:n,burnedCalories:i,gifUrl:N,name:S,popularity:G,rating:O,description:U}=e,ae=`<div class="exercises-modal-window">
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
                src="${N}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${S}</p>
                <div class="rating-container">
                <p class="exercise-rating">${O}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${G}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${i}/${r} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${U}</p>
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
        </div>`;h.innerHTML=ae;const C="favorites";let p=JSON.parse(localStorage.getItem(C))||[];document.querySelector(".btn-start-arrow");const q=document.querySelector(".exercise-favorite-btn"),re="Remove from",ie="Add to favorites";q.addEventListener("click",ne);function ne(){const v={bodyPart:s,name:S,_id:t,target:n,burnedCalories:i,time:r};if(p.some(f=>f._id===v._id)){W(ie,q),p.find((f,ce)=>{if(f._id==t)p.splice(ce,1),console.log(p),localStorage.setItem(C,JSON.stringify(p));else return});return}else W(re,q);p.push(v),localStorage.setItem(C,JSON.stringify(p))}function W(v,D){const f=D.childNodes[0];f.nodeValue=v}}function Re(e,t){e.forEach((s,a)=>{a<t&&s.classList.add("yellow")})}document.querySelector(".fetch-container");const Y=document.querySelector(".exercises-toolbar"),Q=document.querySelector(".search-container"),L=document.querySelector(".search-list"),se=document.querySelector(".form-search"),X=document.querySelector(".no-results"),l=document.querySelector(".search-pagination"),w=innerWidth<1440?8:9,d="is-hidden";let x,m;se.addEventListener("submit",He);l.addEventListener("click",Oe);function Ae(e,t,s=1,a=9){return g.get("/exercises",{params:{bodypart:e,keyword:t,page:s,limit:a}})}function je(e,t,s=1,a=9){return g.get("/exercises",{params:{muscles:e,keyword:t,page:s,limit:a}})}function Fe(e,t,s=1,a=9){return g.get("/exercises",{params:{equipment:e,keyword:t,page:s,limit:a}})}async function He(e){e.preventDefault(),x=e.currentTarget.elements["input-search"].value.trim();let t;try{b==="Body parts"?t=await Ae(E,x):b==="Muscles"?t=await je(E,x):b==="Equipment"&&(t=await Fe(E,x));const{totalPages:s,perPage:a,results:r}=t.data;if(s===null)Q.classList.remove(d),X.classList.remove(d),Y.classList.add(d),L.classList.add(d);else{const{results:[{bodyPart:n,target:i,name:N,burnedCalories:S,rating:G,time:O,_id:U}]}=t.data;Q.classList.remove(d),L.classList.remove(d),X.classList.add(d),Y.classList.add(d),m=t.data.results,L.innerHTML=m.map(H).join("")}}catch(s){console.log(s)}finally{se.reset()}}function _e(e){if(pageCount=Math.ceil(m.length/w),console.log(m),m.length<=w){l.innerHTML="";return}const t=Array(pageCount);console.log(t),l.innerHTML=Array(pageCount).fill(1).map((a,r)=>a+r).map(a=>`<li class="page-exercises" data-page="${a}"><button id="prevPage">${a}</button></li>`).join(""),l.children[e-1].classList.add("active"),Ne(e)}function Ne(e){var a,r;for(const n of[...l.children]){const i=+n.dataset.page;i!==1&&i!==pageCount&&(i<e-3||i>e+3)&&n.remove()}const t=(a=l.children[1])==null?void 0:a.dataset.page,s=(r=l.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;t>2&&l.firstElementChild.after("..."),s<pageCount-1&&l.lastElementChild.before("...")}function Ge(e=1){const t=(e-1)*w,s=m.slice(t,t+w);L.innerHTML=s.map(H).join(""),_e(e)}function Oe(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&Ge(t)}const Ue=document.getElementById("footerForm");Ue.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!We(t)){T.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}g.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){T.success({message:s.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#1b1b1b"}),document.getElementById("emailInput").value=""}).catch(function(s){T.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function We(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
