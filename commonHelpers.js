import{i as v}from"./assets/quote-4d39229c.js";import"./assets/vendor-db25513e.js";const t=document.getElementById("home"),i=document.getElementById("favorites"),p=document.querySelector(".back-image"),m=document.querySelector(".quote"),s=document.querySelectorAll(".mob-nav-link"),u=document.querySelector(".content-no-favorites"),g=document.querySelector(".gallery");function h(){t.classList.remove("is-active"),t.classList.add("no-active"),i.classList.remove("no-active"),i.classList.add("is-active"),m.classList.remove("container"),s[0].classList.remove("is-active"),s[0].classList.add("no-active"),s[1].classList.remove("no-active"),s[1].classList.add("is-active"),p.style.display="none"}h();const o=JSON.parse(localStorage.getItem("favorites"));console.log(o);function y(a){return u.style.display="none",a.map(({bodyPart:n,name:e,_id:c,target:r,burnedCalories:l,time:d})=>`<li class = "list-exercises" id="${c}" data-filter="${e}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    <div class="rating-stars"><p class="rating-par"></p><svg class="icon-star" width="18" height="18"><use href="${v}#icon-star"></use></svg></div></div>
  
    
    <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${e}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${l}/${d}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${n}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${r}</p></div>
              </div>
             </li>`).join("")}g.innerHTML=y(o);
//# sourceMappingURL=commonHelpers.js.map
