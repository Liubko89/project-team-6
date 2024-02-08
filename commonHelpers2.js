import"./assets/favorites-3cfb730f.js";import{a as n,i}from"./assets/vendor-edda1e25.js";n.defaults.baseURL="https://energyflow.b.goit.study/api";const r={formEl:document.querySelector(".form-search"),exercisesEl:document.querySelector(".exercises-gallery"),loaderGallery:document.querySelector(".loader-gallery")},m="is-hidden";let a="",c=1,y=0;const g="https://energyflow.b.goit.study/api/";async function f(t,s={}){try{const e=await n.get(g+t,{params:{filter:Muscles,bodypart:cardio,muscles:abs,equipment:cable,page:c,limit:10}});return console.log(data),e}catch(e){i.error({title:"Error",titleSize:"30",messageSize:"25",message:"Sorry! Try later! Server not working"}),console.error(e.message)}}r.formEl.addEventListener("submit",h);async function h(t){t.preventDefault(),r.exercisesEl.innerHTML="",c=1,console.log(t);const s=t.currentTarget;if(a=s.elements.query.value,!a){r.loaderGallery.classList.add(m),i.show({title:"❌",messageColor:"white",message:"Sorry, You have not entered any word.Please try again!",position:"topRight",color:"grey"});return}try{const{totalPages:e,data:{results:o}}=await f(a);if(e===0)return;y=Math.ceil(e/10),b(o)}catch{console.log(console.error)}finally{s.reset(),alert("wrong")}}function b(t={}){const{bodyPart:s,target:e,name:o,burnedCalories:p,rating:d,time:u}=t,l=`<li class = "list-exercises"><div class="options">
        <p class="options-item"> WORKOUT</p>
        <span class="options-item-span">${d}</span>
        <button type = "button" >START</button>
        <p class="options-item"> <span class="options-item-span">svg</span>${o}</p>
        <p class="options-item"> Burned calories:${p}/${u}</p>
        <p class="options-item">Body part:${s}</p>
        <p>Target:${e}</p></div>
        </li>`;l.join(""),r.exercisesEl.insertAdjacentHTML("beforeend",l)}
//# sourceMappingURL=commonHelpers2.js.map
