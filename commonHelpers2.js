import{i as c}from"./assets/quote-c3c3bc35.js";import{a as g,i as B}from"./assets/vendor-db25513e.js";g.defaults.baseURL="https://energyflow.b.goit.study/api";let I=document.getElementById("scrollToTopBtn");window.onscroll=function(){ce()};function ce(){document.body.scrollTop>20||document.documentElement.scrollTop>20?I.style.display="block":I.style.display="none"}I.addEventListener("click",oe);function oe(){document.body.scrollTop=0,document.documentElement.scrollTop=0}const Z=document.querySelector(".exercises-nav-list"),ee=document.querySelector(".exercises-container"),J=document.querySelector(".exercise-group"),E=document.querySelector(".pagination"),le="https://energyflow.b.goit.study/api";let j="Muscles";Z.addEventListener("click",de);E.addEventListener("click",fe);F(j).then(N);async function de(e){const{filter:t}=e.target.dataset;if(!t)return;j=t,await F(t).then(N);const s=Z.querySelector(".active"),a=e.target;s.classList.remove("active"),a.classList.add("active")}async function F(e,t=1){return fetch(`${le}/filters?filter=${e}&page=${t}&limit=12`).then(s=>s.json())}function N({results:e,page:t,totalPages:s}){ue(e),me(s,t)}function ue(e){ee.innerHTML=e.map(pe).join("")}function pe({name:e,filter:t,imgUrl:s}){return`
    <li class="exercise-card" data-filter="${t}" data-group="${e}">
      <div class="exercise-card-img">
        <img class="exercise-card-img" src="${s}" alt="${e}">
        <div class="container-text">
          <h3 class="description-category">${e}</h3>
          <p class="description-category-par">${t}</p>
        </div>      
      </div>
    </li>
  `}function me(e,t){if(e<=1){E.innerHTML="";return}E.innerHTML=Array(e).fill(1).map((a,r)=>a+r).map(ge).join(""),E.children[t-1].classList.add("active")}function ge(e){return`
    <li class="page" data-page="${e}">
      <button>${e}</button>
    </li>
  `}function fe(e){var s;const t=(s=e.target.closest(".page"))==null?void 0:s.dataset.page;t&&F(j,t).then(N)}ee.addEventListener("click",ve);function ve(e){const s=e.target.closest(".exercise-card");if(!s)return;const a=s.querySelector(".description-category").textContent;return J.textContent=a,J.textContent}document.querySelector(".exercises-nav-list");const M=document.querySelector(".fetch-container"),he=document.querySelector(".exercises-container");document.querySelector(".exercise-card");const xe=document.querySelector(".exercises-gallery");document.querySelector(".header-box");const V=document.querySelector(".exercises-search"),H=document.querySelector(".exercises-toolbar");document.getElementById("muscles-button");const u=document.querySelector(".pagination-exercises"),R=innerWidth<1440?8:9,ye=document.querySelector(".search-container"),K=document.querySelector(".form-search"),z=document.querySelector(".span-exercises "),be=document.querySelector(".exercise-group");let _,w,L,$;u.addEventListener("click",qe);const Ee="https://energyflow.b.goit.study/api/",Le={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},o="is-hidden";he.addEventListener("click",$e);M.classList.remove(o);H.classList.add(o);async function $e(e){const t=e.target.closest(".exercise-card");if(!t)return;const{filter:s,group:a,page:r}=t.dataset;L=s,$=a,await Se(Le[s],a).then(te),M.classList.add(o),H.classList.remove(o),V.addEventListener("click",n),K.classList.remove(o),z.classList.remove(o);function n(i){console.log(i.target),i.currentTarget===V&&(M.classList.remove(o),H.classList.add(o),K.classList.add(o),z.classList.add(o),ye.classList.add(o),be.textContent="")}}async function Se(e,t){return fetch(`${Ee}exercises?${e}=${t}&limit=1e6`).then(s=>s.json()).then(s=>{_=s.results})}function O({bodyPart:e,target:t,name:s,burnedCalories:a,rating:r,time:n,_id:i}){return`<li class = "list-exercises" id="${i}" data-filter="${s}"><div class="options">
  <div class="box-up">
  <div class="box-left">
  <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
  <div class="rating-stars"><p class="rating-par">${r}</p><svg class="icon-star" width="18" height="18"><use href="${c}#icon-star"></use></svg></div></div>

  
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
           
            
            </li>`}function we(e){w=Math.ceil(_.length/R),u.innerHTML=Array(w).fill(1).map((s,a)=>s+a).map(s=>`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`).join(""),u.children[e-1].classList.add("active"),Ce(e)}function Ce(e){var a,r;for(const n of[...u.children]){const i=+n.dataset.page;i!==1&&i!==w&&(i<e-3||i>e+3)&&n.remove()}const t=(a=u.children[1])==null?void 0:a.dataset.page,s=(r=u.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;t>2&&u.firstElementChild.after("..."),s<w-1&&u.lastElementChild.before("...")}function te(e=1){const t=(e-1)*R,s=_.slice(t,t+R);xe.innerHTML=s.map(O).join(""),we(e)}function qe(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&te(t)}const v=document.querySelector(".modal-backdrop"),Te=document.querySelector(".exercises-gallery"),A="is-open";Te.addEventListener("click",ke);async function ke(e){if(e.target.nodeName!=="BUTTON")return;const t=e.target.closest("li").id;try{const a=await g.get(`/exercises/${t}`);Ie(a.data),v.classList.add(A);const r=document.querySelector(".exercise-favorite-btn");(JSON.parse(localStorage.getItem("favorites"))||[]).some(y=>y._id===t)?r.innerHTML=`Remove from <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${c}#icon-heart"></use>
                  </svg>`:r.innerHTML=`Add to favorites <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${c}#icon-heart"></use>
                  </svg>`;const h=document.querySelectorAll(".stars-wrap-svg"),x=Math.round(a.data.rating);Me(h,x)}catch{}document.getElementById("modal-close-btn").addEventListener("click",()=>{v.classList.remove(A)}),window.addEventListener("keydown",a=>{a.code==="Escape"&&G()})}v.addEventListener("click",Pe);function Pe(e){e.currentTarget===e.target&&G()}function G(){window.removeEventListener("keydown",Be),v.classList.remove(A)}function Be(e){e.code==="Escape"&&G()}function Ie(e={}){const{_id:t,bodyPart:s,equipment:a,time:r,target:n,burnedCalories:i,gifUrl:h,name:x,popularity:y,rating:U,description:W}=e,ae=`<div class="exercises-modal-window">
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
                src="${h}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${x}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${y}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${i}/${r} m</p></li>
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
        </div>`;v.innerHTML=ae;const q="favorites";let p=JSON.parse(localStorage.getItem(q))||[];document.querySelector(".btn-start-arrow");const T=document.querySelector(".exercise-favorite-btn"),re="Remove from",ie="Add to favorites";T.addEventListener("click",ne);function ne(){const k=p.some(f=>f._id===t);if(console.log(t),k){D(ie,T),p.find((f,P)=>{if(f._id===t)p.splice(P,1),console.log(p),localStorage.setItem(q,JSON.stringify(p));else return});return}else D(re,T);p.push(e),localStorage.setItem(q,JSON.stringify(p))}function D(k,f){const P=f.childNodes[0];P.nodeValue=k}}function Me(e,t){e.forEach((s,a)=>{a<t&&s.classList.add("yellow")})}document.querySelector(".fetch-container");const Y=document.querySelector(".exercises-toolbar"),Q=document.querySelector(".search-container"),S=document.querySelector(".search-list"),se=document.querySelector(".form-search"),X=document.querySelector(".no-results"),l=document.querySelector(".search-pagination"),C=innerWidth<1440?8:9,d="is-hidden";let b,m;se.addEventListener("submit",je);l.addEventListener("click",Oe);function He(e,t,s=1,a=9){return g.get("/exercises",{params:{bodypart:e,keyword:t,page:s,limit:a}})}function Re(e,t,s=1,a=9){return g.get("/exercises",{params:{muscles:e,keyword:t,page:s,limit:a}})}function Ae(e,t,s=1,a=9){return g.get("/exercises",{params:{equipment:e,keyword:t,page:s,limit:a}})}async function je(e){e.preventDefault(),b=e.currentTarget.elements["input-search"].value.trim();let t;try{L==="Body parts"?t=await He($,b):L==="Muscles"?t=await Re($,b):L==="Equipment"&&(t=await Ae($,b));const{totalPages:s,perPage:a,results:r}=t.data;if(s===null)Q.classList.remove(d),X.classList.remove(d),Y.classList.add(d),S.classList.add(d);else{const{results:[{bodyPart:n,target:i,name:h,burnedCalories:x,rating:y,time:U,_id:W}]}=t.data;Q.classList.remove(d),S.classList.remove(d),X.classList.add(d),Y.classList.add(d),m=t.data.results,S.innerHTML=m.map(O).join("")}}catch(s){console.log(s)}finally{se.reset()}}function Fe(e){if(pageCount=Math.ceil(m.length/C),console.log(m),m.length<=C){l.innerHTML="";return}const t=Array(pageCount);console.log(t),l.innerHTML=Array(pageCount).fill(1).map((a,r)=>a+r).map(a=>`<li class="page-exercises" data-page="${a}"><button id="prevPage">${a}</button></li>`).join(""),l.children[e-1].classList.add("active"),Ne(e)}function Ne(e){var a,r;for(const n of[...l.children]){const i=+n.dataset.page;i!==1&&i!==pageCount&&(i<e-3||i>e+3)&&n.remove()}const t=(a=l.children[1])==null?void 0:a.dataset.page,s=(r=l.lastElementChild.previousElementSibling)==null?void 0:r.dataset.page;t>2&&l.firstElementChild.after("..."),s<pageCount-1&&l.lastElementChild.before("...")}function _e(e=1){const t=(e-1)*C,s=m.slice(t,t+C);S.innerHTML=s.map(O).join(""),Fe(e)}function Oe(e){var s;const t=+((s=e.target.closest(".page-exercises"))==null?void 0:s.dataset.page);t&&_e(t)}const Ge=document.getElementById("footerForm");Ge.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("emailInput").value;if(!Ue(t)){B.error({title:"Error",message:"Please enter a valid email address",position:"topRight"});return}g.post("https://energyflow.b.goit.study/api/subscription",{email:t},{headers:{"Content-Type":"application/json"}}).then(function(s){B.success({message:s.data.message,position:"topCenter",messageColor:"#fff",backgroundColor:"#1b1b1b"}),document.getElementById("emailInput").value=""}).catch(function(s){B.error({title:"Error",message:"Failed to create subscription",position:"topRight"})})});function Ue(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
//# sourceMappingURL=commonHelpers2.js.map
