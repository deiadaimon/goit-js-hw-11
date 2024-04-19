import{S as f,i as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(a){return a.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:i,downloads:p})=>`
    <li class="gallery-card">
        <a class="card-link" href="${r}">
            <img class="image" src="${s}" alt="${o}"></a>
        <ul class="card-description">
            <li><p class="name">Likes</p>
            <p class="value">${e}</p></liss=>
            <li><p class="name">Views</p>
            <p class="value">${t}</p></li>
            <li><p class="name">Comments</p>
            <p class="value">${i}</p></li>
            <li><p class="name">Downloads</p>
            <p class="value">${p}</p></li>
        </ul>
    </li>
    `).join("")}function d(a){const s="https://pixabay.com/api/",r="43226276-a07a0c17e428cfffb021b9b05",o=new URLSearchParams({key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const u=document.querySelector(".form"),n=document.querySelector(".loader");n.style.display="none";const c=document.querySelector(".gallery"),g=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});u.addEventListener("submit",y);function y(a){a.preventDefault(),c.innerHTML="",n.style.display="block";const s=a.currentTarget.elements.input.value;d(s).then(r=>(n.style.display="none",r.hits.length||l.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight"}),r)).then(r=>{c.innerHTML=m(r.hits),g.refresh(),u.reset()}).catch(r=>{n.style.display="none",l.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
