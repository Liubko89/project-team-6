import{a as f,i as p}from"./vendor-db25513e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const M="/project-team-6/assets/icons-66c1ea1d.svg",g=document.querySelector(".js-close-menu"),m=document.querySelector(".js-open-menu"),c=document.querySelector(".js-menu-container");g.addEventListener("click",y);m.addEventListener("click",h);function y(){c.classList.add("is-hidden")}function h(){c.classList.remove("is-hidden")}const S="https://energyflow.b.goit.study/api",i=document.querySelector(".quote__backend");async function D(){i.innerHTML='<span class="loader"></span>';try{return(await f.get(`${S}/quote`)).data}catch(e){throw p.error({title:"Wrong",message:"Try again",position:"topRight"}),e}}function L(e,o){return`<p class="quote__backend-text">${o}</p>
    <p class="quote__backend-author">${e}</p>`}async function q(){try{const{author:e,quote:o}=await D(),r={author:e,quote:o,savedDate:new Date().toLocaleDateString()};localStorage.setItem("quote",JSON.stringify(r)),localStorage.setItem("savedDate",r.savedDate),u(e,o)}catch(e){console.error(e)}}function u(e,o){i.innerHTML=L(e,o)}async function l(){const e=JSON.parse(localStorage.getItem("quote")),o=localStorage.getItem("savedDate"),r=new Date().toLocaleDateString();e&&o===r?u(e.author,e.quote):await q()}l();function d(){const e=new Date,o=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0)-e;setTimeout(function(){l(),d()},o)}d();export{M as i};
//# sourceMappingURL=quote-dee398cd.js.map