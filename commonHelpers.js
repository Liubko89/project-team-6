import{i as e}from"./assets/quote-6c451241.js";import"./assets/vendor-db25513e.js";const u=document.getElementById("home"),v=document.getElementById("favorites"),S=document.querySelector(".back-image"),q=document.querySelector(".quote"),c=document.querySelectorAll(".mob-nav-link"),m=document.querySelector(".content-no-favorites"),d=document.querySelector(".gallery"),g=document.querySelector(".favorites-backdrop"),k=document.querySelector("body");S.classList.add("is-hidden");function B(){u.classList.remove("is-active"),u.classList.add("no-active"),v.classList.remove("no-active"),v.classList.add("is-active"),q.classList.remove("container"),c[0].classList.remove("is-active"),c[0].classList.add("no-active"),c[1].classList.remove("no-active"),c[1].classList.add("is-active")}B();const r=JSON.parse(localStorage.getItem("favorites"));h(r);function h(s){s.length!==0?m.classList.add("is-hidden"):m.classList.remove("is-hidden")}function x(s){return s.map(({bodyPart:i,name:a,_id:t,target:o,burnedCalories:n,time:l})=>`<li class = "list-exercises" id="${t}" data-filter="${a}"><div class="options">
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
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${n}/${l}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${i}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${o}</p></div>
              </div>
             </li>`).join("")}d.innerHTML=x(r);d.addEventListener("click",C);function C(s){if(s.target.closest("button").id==="trash"&&(r.find((i,a,t)=>i._id===s.target.closest("li").id?t.splice(a,1):null),localStorage.setItem("favorites",JSON.stringify(r)),d.innerHTML=x(r),h(r)),s.target.closest("button").id==="open"){g.classList.add("is-open"),k.classList.add("on-scroll");const i=r.find(L=>L._id===s.target.closest("li").id),{bodyPart:a,equipment:t,time:o,target:n,burnedCalories:l,gifUrl:f,name:b,popularity:w,rating:p,description:y}=i;g.innerHTML=`<div class="exercises-modal-window">
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
                src="${f}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-container decorate-line">
                <p class="exercise-name">${b}</p>
                <div class="rating-container">
                <p class="exercise-rating">${p}</p>
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
                    <p class="exercise-param-value exercise-param-target">${n}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${w}</p>
                  </li>
                  <li class="exercise-params-card">
                  <p class="exercise-param-name">Burned calories</p>
                  <p class="exercise-param-value exercise-param-popularuty">${l}/${o} m</p></li>
                </ul>
              </div>
              <p class="exercise-descr">${y}</p>
            </div>
          </div>
        </div>`;const $=document.querySelectorAll(".stars-wrap-svg");T($,Math.round(p))}}function T(s,i){s.forEach((a,t)=>{t<i&&a.classList.add("yellow")})}
//# sourceMappingURL=commonHelpers.js.map
