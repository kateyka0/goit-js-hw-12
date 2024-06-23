import{a as w,S as L,i as E}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function m(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}})();async function h(e,o){return(await w.get("https://pixabay.com/api/",{params:{key:"44332544-4246296cfd54d81c9e369dca1",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:30}})).data}function b(e){return`<li class="gallery-item">
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
    </li>`}function f(e){return e.map(o=>b(o)).join("")}function c(e){e.classList.remove("visually-hidden")}function s(e){e.classList.add("visually-hidden")}const p=new L(".gallery a",{captionsData:"alt",captionDelay:250}),t={formElem:document.querySelector(".form"),galleryElem:document.querySelector(".gallery"),galleryItem:document.querySelector("li"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")};let a,n,y;t.formElem.addEventListener("submit",v);async function v(e){if(e.preventDefault(),s(t.loadBtn),t.galleryElem.innerHTML="",n=t.formElem.elements.search.value.trim(),!!n){a=1,c(t.loader);try{const o=await h(n,a);if(!o.hits.length){u("Sorry, there are no images matching your search query. Please, try again!"),s(t.loader);return}const i=f(o.hits);t.galleryElem.innerHTML=i,y=Math.ceil(o.totalHits/15)}catch(o){u(o)}p.refresh(),s(t.loader),c(t.loadBtn),g()}}t.loadBtn.addEventListener("click",B);async function B(){s(t.loadBtn),c(t.loader),a+=1;try{const e=await h(n,a),o=f(e.hits);t.galleryElem.insertAdjacentHTML("beforeend",o)}catch(e){console.log(e)}p.refresh(),s(t.loader),c(t.loadBtn),S(),g()}function u(e){E.show({message:e,messageColor:"white",backgroundColor:"#EF4040",iconUrl:imageUrl,maxWidth:"360px",position:"topRight",theme:"dark"})}function S(){const o=document.querySelector("li").getBoundingClientRect().height;window.scrollBy({top:o*3,behavior:"smooth"})}function g(){a>=y&&(s(t.loadBtn),s(t.loader),u("We're sorry, but you've reached the end of search results."))}
//# sourceMappingURL=commonHelpers.js.map
