import{i as l,S as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,views:t,comments:n,downloads:p})=>`
    <li class="gallery-card">
        <a href="${r}"><img class="image" src="${o}" alt="${s}"></a>
        <ul class="description">
            <li><p>Likes</p>
            <p>${e}</p></li>
            <li><p>Views</p>
            <p>${t}</p></li>
            <li><p>Comments</p>
            <p>${n}</p></li>
            <li><p>Downloads</p>
            <p>${p}</p></li>
        </ul>
    </li>
    `).join("")}function m(i){const o="https://pixabay.com/api/",r="43226276-a07a0c17e428cfffb021b9b05",s=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const u=document.querySelector(".form"),a=document.querySelector(".loader");a.style.display="none";const c=document.querySelector(".gallery");u.addEventListener("submit",d);function d(i){i.preventDefault(),c.innerHTML="",a.style.display="block";const o=i.currentTarget.elements.input.value;m(o).then(r=>(a.style.display="none",r.hits.length||l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r)).then(r=>{c.innerHTML=y(r.hits),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),u.reset()}).catch(r=>{a.style.display="none",l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",close:!1})})}
//# sourceMappingURL=commonHelpers.js.map
