import"./assets/quote-153c7bd1.js";import"./assets/vendor-db25513e.js";const t=document.getElementById("home"),i=document.getElementById("favorites"),v=document.querySelector(".back-image"),p=document.querySelector(".quote"),s=document.querySelectorAll(".mob-nav-link"),m=document.querySelector(".content-no-favorites"),u=document.querySelector(".gallery");function g(){t.classList.remove("is-active"),t.classList.add("no-active"),i.classList.remove("no-active"),i.classList.add("is-active"),p.classList.remove("container"),s[0].classList.remove("is-active"),s[0].classList.add("no-active"),s[1].classList.remove("no-active"),s[1].classList.add("is-active"),v.style.display="none"}g();const o=JSON.parse(localStorage.getItem("favorites"));console.log(o);function h(a){return m.style.display="none",a.map(({bodyPart:n,name:e,_id:c,target:l,burnedCalories:r,time:d})=>`<li class = "list-exercises" id="${c}" data-filter="${e}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    <div class="rating-stars"><p class="rating-par"></p><svg class="icon-star" width="18" height="18"><use href="./svg/icons.svg#icon-star"></use></svg></div></div>
  
    
    <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="./svg/icons.svg#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="./svg/icons.svg#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${e}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${r}/${d}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${n}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${l}</p></div>
              </div>
             </li>`).join("")}u.innerHTML=h(o);
//# sourceMappingURL=commonHelpers.js.map
