import{a as w,S as L,i as E}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function m(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}})();async function f(e,t){return(await w.get("https://pixabay.com/api/",{params:{key:"44332544-4246296cfd54d81c9e369dca1",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:30}})).data}function b(e){return`<li class="gallery-item">
      <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" class="gallery-item-image"></a>
        <ul class="image-info-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes-js">${e.likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views-js">${e.views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments-js">${e.comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads-js">${e.downloads}</p>
          </li>
        </ul>
    </li>`}function h(e){return e.map(t=>b(t)).join("")}function c(e){e.classList.remove("visually-hidden")}function s(e){e.classList.add("visually-hidden")}const p=new L(".gallery a",{captionsData:"alt",captionDelay:250}),o={formElem:document.querySelector(".form"),galleryElem:document.querySelector(".gallery"),galleryItem:document.querySelector("li"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let a,n,y;o.formElem.addEventListener("submit",v);async function v(e){if(e.preventDefault(),s(o.loadBtn),o.galleryElem.innerHTML="",n=o.formElem.elements.search.value.trim(),!!n){a=1,c(o.loader);try{const t=await f(n,a);if(!t.hits.length){u("Sorry, there are no images matching your search query. Please, try again!"),s(o.loader);return}const i=h(t.hits);o.galleryElem.innerHTML=i,y=Math.ceil(t.totalHits/15)}catch(t){u(t)}p.refresh(),s(o.loader),c(o.loadBtn),g()}}o.loadBtn.addEventListener("click",B);async function B(){s(o.loadBtn),c(o.loader),a+=1;try{const e=await f(n,a),t=h(e.hits);o.galleryElem.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}p.refresh(),s(o.loader),c(o.loadBtn),S(),g()}function u(e){E.show({message:e,messageColor:"#050505",backgroundColor:"#18DDFF",maxWidth:"360px",position:"topRight",theme:"dark"})}function S(){const t=document.querySelector("li").getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}function g(){a>=y&&(s(o.loadBtn),s(o.loader),u("We're sorry, but you've reached the end of search results."))}
//# sourceMappingURL=commonHelpers.js.map
