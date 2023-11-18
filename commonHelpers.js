(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const o={select:document.querySelector(".breed-select"),cardCat:document.querySelector(".card-cat"),loder:document.querySelector(".loader"),error:document.querySelector(".error")};o.select.addEventListener("change",a);function a(n){o.loder.removeAttribute("hidden","hidden"),u(n.target.value).then(t=>{o.cardCat.innerHTML=f(t),o.loder.setAttribute("hidden","hidden")}).catch(t=>{o.loder.setAttribute("hidden","hidden"),o.error.removeAttribute("hidden","hidden"),o.cardCat.innerHTML})}function d(n){return n.map(({id:t,name:i})=>`<option value="${t}">${i}</option>`).join("")}function l(){const n="https://api.thecatapi.com/v1",t="/breeds",i="live_F1JswQHNXiab7OVBGWFCkT3vt4fZPImj8AOcBIs0fZYYk71ryO1jOZAeb8WeRARW",c=new URLSearchParams({api_key:i});return fetch(`${n}${t}?${c}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}l().then(n=>{o.select.insertAdjacentHTML("afterbegin",d(n)),o.select.style.display="block",o.loder.setAttribute("hidden","hidden")}).catch(n=>console.log(n));function u(n){const t="https://api.thecatapi.com/v1",i="/images/search",c="live_F1JswQHNXiab7OVBGWFCkT3vt4fZPImj8AOcBIs0fZYYk71ryO1jOZAeb8WeRARW",e=new URLSearchParams({api_key:c,breed_ids:n});return fetch(`${t}${i}?${e}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function f(n){return n.map(({breeds:t,url:i})=>`
    <li class="list">
        <img width="400" src="${i}" alt="${t[0].name}"/>
        <h2>${t[0].name}</h2>
        <p>${t[0].description}</p>
        <h3>Temperament: ${t[0].temperament}</h3>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
