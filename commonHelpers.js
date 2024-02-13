import{i as t}from"./assets/quote-dee398cd.js";import"./assets/vendor-db25513e.js";const i=document.getElementById("home"),o=document.getElementById("favorites"),v=document.querySelector(".back-image"),p=document.querySelector(".quote"),s=document.querySelectorAll(".mob-nav-link"),u=document.querySelector(".content-no-favorites"),m=document.querySelector(".gallery");function h(){i.classList.remove("is-active"),i.classList.add("no-active"),o.classList.remove("no-active"),o.classList.add("is-active"),p.classList.remove("container"),s[0].classList.remove("is-active"),s[0].classList.add("no-active"),s[1].classList.remove("no-active"),s[1].classList.add("is-active"),v.style.display="none"}h();const g=JSON.parse(localStorage.getItem("favorites"));function y(a){return u.style.display="none",a.map(({bodyPart:n,name:e,_id:c,target:r,burnedCalories:l,time:d})=>`<li class = "list-exercises" id="${c}" data-filter="${e}"><div class="options">
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
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${l}/${d}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${n}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${r}</p></div>
              </div>
             </li>`).join("")}m.innerHTML=y(g);
//# sourceMappingURL=commonHelpers.js.map
