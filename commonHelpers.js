import{i as e}from"./assets/quote-6c451241.js";import"./assets/vendor-db25513e.js";const a=document.getElementById("home"),n=document.getElementById("favorites"),m=document.querySelector(".back-image"),p=document.querySelector(".quote"),s=document.querySelectorAll(".mob-nav-link"),c=document.querySelector(".content-no-favorites"),h=document.querySelector(".gallery");m.classList.add("is-hidden");function g(){a.classList.remove("is-active"),a.classList.add("no-active"),n.classList.remove("no-active"),n.classList.add("is-active"),p.classList.remove("container"),s[0].classList.remove("is-active"),s[0].classList.add("no-active"),s[1].classList.remove("no-active"),s[1].classList.add("is-active")}g();const i=JSON.parse(localStorage.getItem("favorites"));b(i);function b(t){t.length!==0?c.classList.add("is-hidden"):c.classList.remove("is-hidden")}function f(t){return t.map(({bodyPart:r,name:o,_id:l,target:d,burnedCalories:v,time:u})=>`<li class = "list-exercises" id="${l}" data-filter="${o}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    
    <button class="trash-btn" type="button">
    <svg class="icon-trash" width="18" height="18"><use href="${e}#icon-trash"></use></svg>
    </button>
    
    </div>
  
    
    <button type = "button" class="btn-start-arrow">Start<svg class="icon-arrow" width="14" height="14"><use href="${e}#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${e}#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${o}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${v}/${u}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${r}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${d}</p></div>
              </div>
             </li>`).join("")}h.innerHTML=f(i);console.log(i);
//# sourceMappingURL=commonHelpers.js.map
