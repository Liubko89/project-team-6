import{i as t}from"./assets/quote-b52f81f8.js";import"./assets/vendor-db25513e.js";const o=document.getElementById("home"),i=document.getElementById("favorites"),p=document.querySelector(".back-image"),u=document.querySelector(".quote"),s=document.querySelectorAll(".mob-nav-link"),m=document.querySelector(".content-no-favorites"),h=document.querySelector(".gallery");function g(){o.classList.remove("is-active"),o.classList.add("no-active"),i.classList.remove("no-active"),i.classList.add("is-active"),u.classList.remove("container"),s[0].classList.remove("is-active"),s[0].classList.add("no-active"),s[1].classList.remove("no-active"),s[1].classList.add("is-active"),p.style.display="none"}g();const a=JSON.parse(localStorage.getItem("favorites"));console.log(a);function y(n){return m.style.display="none",n.map(({bodyPart:c,name:e,_id:l,target:r,burnedCalories:d,time:v})=>`<li class = "list-exercises" id="${l}" data-filter="${e}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    
    <button class="trash-btn" type="button">
    <svg class="icon-trash" width="18" height="18"><use href="${t}#icon-trash"></use></svg>
    </button>
    
    </div>
  
    
    <button type = "button" class="btn-start-arrow">Start<svg class="icon-arrow" width="14" height="14"><use href="${t}#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${t}#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${e}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${d}/${v}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${c}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${r}</p></div>
              </div>
             </li>`).join("")}h.innerHTML=y(a);
//# sourceMappingURL=commonHelpers.js.map
