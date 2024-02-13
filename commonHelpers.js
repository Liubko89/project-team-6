import{i as n}from"./assets/quote-6c451241.js";import"./assets/vendor-db25513e.js";const r=document.getElementById("home"),l=document.getElementById("favorites"),g=document.querySelector(".back-image"),f=document.querySelector(".quote"),i=document.querySelectorAll(".mob-nav-link"),d=document.querySelector(".content-no-favorites"),c=document.querySelector(".gallery");g.classList.add("is-hidden");function b(){r.classList.remove("is-active"),r.classList.add("no-active"),l.classList.remove("no-active"),l.classList.add("is-active"),f.classList.remove("container"),i[0].classList.remove("is-active"),i[0].classList.add("no-active"),i[1].classList.remove("no-active"),i[1].classList.add("is-active")}b();const t=JSON.parse(localStorage.getItem("favorites"));v(t);function v(s){s.length!==0?d.classList.add("is-hidden"):d.classList.remove("is-hidden")}function u(s){return s.map(({bodyPart:o,name:e,_id:a,target:m,burnedCalories:p,time:h})=>`<li class = "list-exercises" id="${a}" data-filter="${e}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    
    <button class="trash-btn" id="trash" type="button">
    <svg class="icon-trash" width="18" height="18"><use href="${n}#icon-trash"></use></svg>
    </button>
    
    </div>
  
    
    <button type = "button" class="btn-start-arrow" id="open">Start<svg class="icon-arrow" width="14" height="14"><use href="${n}#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${n}#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${e}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${p}/${h}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${o}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${m}</p></div>
              </div>
             </li>`).join("")}c.innerHTML=u(t);c.addEventListener("click",L);function L(s){console.log(s.target.closest("li").id),console.dir(s.target.closest("button").id),s.target.closest("button").id==="trash"&&(t.find((o,e,a)=>o._id===s.target.closest("li").id?a.splice(e,1):null),localStorage.setItem("favorites",JSON.stringify(t)),c.innerHTML=u(t),v(t))}
//# sourceMappingURL=commonHelpers.js.map
