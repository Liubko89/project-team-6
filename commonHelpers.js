import{i}from"./assets/scroll-to-top-btn-1c0c3e65.js";import"./assets/vendor-db25513e.js";const b=document.getElementById("home"),L=document.getElementById("favorites"),B=document.querySelector(".back-image"),C=document.querySelector(".quote"),p=document.querySelectorAll(".mob-nav-link"),y=document.querySelector(".content-no-favorites"),g=document.querySelector(".gallery"),d=document.querySelector(".favorites-backdrop"),h=document.querySelector("body"),n=document.querySelector(".favorites-pagination"),r=9;let o=1;B.classList.add("is-hidden");function P(){b.classList.remove("is-active"),b.classList.add("no-active"),L.classList.remove("no-active"),L.classList.add("is-active"),C.classList.remove("container"),p[0].classList.remove("is-active"),p[0].classList.add("no-active"),p[1].classList.remove("no-active"),p[1].classList.add("is-active")}P();const c=JSON.parse(localStorage.getItem("favorites"));x(c);g.addEventListener("click",O);n.addEventListener("click",A);function M(e){e.length!==0?y.classList.add("is-hidden"):y.classList.remove("is-hidden")}function $(e){return e.map(({bodyPart:s,name:a,_id:t,target:l,burnedCalories:u,time:v})=>`<li class = "list-exercises" id="${t}" data-filter="${a}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    
    <button class="trash-btn" id="trash" type="button">
    <svg class="icon-trash" width="18" height="18"><use href="${i}#icon-trash"></use></svg>
    </button>
    
    </div>
  
    
    <button type = "button" class="btn-start-arrow" id="open">Start<svg class="icon-arrow" width="14" height="14"><use href="${i}#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${i}#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${a}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${u}/${v}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${s}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${l}</p></div>
              </div>
             </li>`).join("")}function O(e){if(e.target.nodeName==="BUTTON"&&(e.target.closest("button").id==="trash"&&(c.find((s,a,t)=>s._id===e.target.closest("li").id?t.splice(a,1):null),localStorage.setItem("favorites",JSON.stringify(c)),c.length<=(o-1)*r&&(o-=1),x(c)),e.target.closest("button").id==="open")){d.classList.add("is-open"),h.classList.add("on-scroll");const s=c.find(m=>m._id===e.target.closest("li").id),{bodyPart:a,equipment:t,time:l,target:u,burnedCalories:v,gifUrl:k,name:S,popularity:q,rating:w,description:E}=s;d.innerHTML=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${i}#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${k}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${S}</p>
                <div class="rating-container">
                <p class="exercise-rating">${w}</p>
                <div class="stars-wrap">
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${i}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${i}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${i}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${i}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${i}#icon-star"></use>
                  </svg>
               </div>
                </div>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${u}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${t}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${q}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${v}/${l} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${E}</p>
            </div>
          </div>
        </div>`;const T=document.querySelectorAll(".stars-wrap-svg");N(T,Math.round(w)),document.getElementById("modal-close-btn").addEventListener("click",()=>{d.classList.remove("is-open"),h.classList.remove("on-scroll")}),d.addEventListener("click",I),window.addEventListener("keydown",m=>{m.code==="Escape"&&f()})}}function N(e,s){e.forEach((a,t)=>{t<s&&a.classList.add("yellow")})}function f(){window.removeEventListener("keydown",H),d.classList.remove("is-open"),h.classList.remove("on-scroll")}function H(e){e.code==="Escape"&&f()}function I(e){e.currentTarget===e.target&&f()}function U(e){n.innerHTML="";for(let s=1;s<=e;s+=1)n.insertAdjacentHTML("beforeend",`<li class="page-exercises" data-page="${s}"><button id="prevPage">${s}</button></li>`)}function x(e){if(M(e),e.length<=r)g.innerHTML=$(e),n.classList.add("is-hidden");else{const a=(o-1)*r,t=a+r;n.classList.remove("is-hidden"),U(Math.ceil(e.length/r));const l=e.slice(a,t);g.innerHTML=$(l)}const s=[...n.children];e.length>r&&s[o-1].classList.add("active")}function A(e){e.target.nodeName==="BUTTON"&&(o=e.target.textContent,x(c))}
//# sourceMappingURL=commonHelpers.js.map
