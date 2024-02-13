import{i as e}from"./assets/quote-6c451241.js";import"./assets/vendor-db25513e.js";const h=document.getElementById("home"),x=document.getElementById("favorites"),q=document.querySelector(".back-image"),E=document.querySelector(".quote"),o=document.querySelectorAll(".mob-nav-link"),f=document.querySelector(".content-no-favorites"),u=document.querySelector(".gallery"),r=document.querySelector(".favorites-backdrop"),v=document.querySelector("body");q.classList.add("is-hidden");function B(){h.classList.remove("is-active"),h.classList.add("no-active"),x.classList.remove("no-active"),x.classList.add("is-active"),E.classList.remove("container"),o[0].classList.remove("is-active"),o[0].classList.add("no-active"),o[1].classList.remove("no-active"),o[1].classList.add("is-active")}B();const c=JSON.parse(localStorage.getItem("favorites"));w(c);function w(s){s.length!==0?f.classList.add("is-hidden"):f.classList.remove("is-hidden")}function b(s){return s.map(({bodyPart:i,name:a,_id:t,target:n,burnedCalories:l,time:d})=>`<li class = "list-exercises" id="${t}" data-filter="${a}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    
    <button class="trash-btn" id="trash" type="button">
    <svg class="icon-trash" width="18" height="18"><use href="${e}#icon-trash"></use></svg>
    </button>
    
    </div>
  
    
    <button type = "button" class="btn-start-arrow" id="open">Start<svg class="icon-arrow" width="14" height="14"><use href="${e}#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${e}#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${a}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${l}/${d}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${i}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${n}</p></div>
              </div>
             </li>`).join("")}u.innerHTML=b(c);u.addEventListener("click",C);function C(s){if(s.target.closest("button").id==="trash"&&(c.find((i,a,t)=>i._id===s.target.closest("li").id?t.splice(a,1):null),localStorage.setItem("favorites",JSON.stringify(c)),u.innerHTML=b(c),w(c)),s.target.closest("button").id==="open"){r.classList.add("is-open"),v.classList.add("on-scroll");const i=c.find(p=>p._id===s.target.closest("li").id),{bodyPart:a,equipment:t,time:n,target:l,burnedCalories:d,gifUrl:y,name:L,popularity:$,rating:g,description:k}=i;r.innerHTML=`<div class="exercises-modal-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" id="modal-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="10"
                height="10"
                aria-label="Close icon"
              >
                <use href="${e}#icon-close-btn"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${y}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${L}</p>
                <div class="rating-container">
                <p class="exercise-rating">${g}</p>
                <div class="stars-wrap">
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${e}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${e}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${e}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${e}#icon-star"></use>
                  </svg>
                  <svg class="stars-wrap-svg" width="18" height="18">
                    <use href="${e}#icon-star"></use>
                  </svg>
               </div>
                </div>
              </div>
              <div class="exercise-params-container decorate-line">
                <ul class="exercise-params-list">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${l}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${$}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${d}/${n} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${k}</p>
            </div>
          </div>
        </div>`;const S=document.querySelectorAll(".stars-wrap-svg");T(S,Math.round(g)),document.getElementById("modal-close-btn").addEventListener("click",()=>{r.classList.remove("is-open"),v.classList.remove("on-scroll")}),r.addEventListener("click",O),window.addEventListener("keydown",p=>{p.code==="Escape"&&m()})}}function T(s,i){s.forEach((a,t)=>{t<i&&a.classList.add("yellow")})}function m(){window.removeEventListener("keydown",I),r.classList.remove("is-open"),v.classList.remove("on-scroll")}function I(s){s.code==="Escape"&&m()}function O(s){s.currentTarget===s.target&&m()}
//# sourceMappingURL=commonHelpers.js.map
