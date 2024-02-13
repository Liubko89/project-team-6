import{i as e}from"./assets/quote-51037797.js";import"./assets/vendor-db25513e.js";const i=document.getElementById("home"),o=document.getElementById("favorites"),p=document.querySelector(".back-image"),m=document.querySelector(".quote"),s=document.querySelectorAll(".mob-nav-link"),u=document.querySelector(".content-no-favorites"),g=document.querySelector(".gallery");function h(){i.classList.remove("is-active"),i.classList.add("no-active"),o.classList.remove("no-active"),o.classList.add("is-active"),m.classList.remove("container"),s[0].classList.remove("is-active"),s[0].classList.add("no-active"),s[1].classList.remove("no-active"),s[1].classList.add("is-active"),p.style.display="none"}h();const a=JSON.parse(localStorage.getItem("favorites"));console.log(a);function y(n){return u.style.display="none",n.map(({bodyPart:c,name:t,_id:r,target:l,burnedCalories:d,time:v})=>`<li class = "list-exercises" id="${r}" data-filter="${t}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    <div class="rating-stars"><p class="rating-par"></p>
    <svg class="icon-star" width="18" height="18"><use href="${e}#icon-star"></use></svg></div></div>
  
    
    <button type = "button" class="btn-start-arrow">START<svg class="icon-arrow" width="14" height="14"><use href="${e}#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${e}#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${t}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${d}/${v}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${c}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${l}</p></div>
              </div>
             </li>`).join("")}g.innerHTML=y(a);
//# sourceMappingURL=commonHelpers.js.map
