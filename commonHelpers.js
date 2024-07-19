import{a as g,S as h,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(n){const o=n.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:l,comments:f,downloads:y})=>`<li class="item-imagesList js-item-imagesList">
        <a href="${a}">
            <img src="${s}" alt="${e}" width = "360"/>
             </a>
            <div>
                <span>
                  <p><b>Likes</b></p>
                  <p>${r}</p>
                </span>
        
                <span>
                  <p><b>Views</b></p>
                  <p>${l}</p>
                </span>
                <span>
                  <p><b>Comments</b></p>
                  <p>${f}</p>
                </span>
                <span>
                  <p><b>Downloads</b></p>
                  <p>${y}</p>
                </span>
            </div>
       
      </li>`).join("");t.imagesList.insertAdjacentHTML("beforeend",o)}const b="api/",L="44929551-fd3f3fb9d8ead760ff0c5783d",q="https://pixabay.com";async function u({q:n="",page:o=1,per_page:s=15}={}){return t.loader.style.display="inline-block",g.get(`${q}/${b}`,{params:{key:L,q:n,page:o,per_page:s}}).then(({data:a})=>a)}const t={form:document.querySelector(".js-searchForm"),serchInput:document.querySelector(".js-searchInput"),searchBtn:document.querySelector(".js-searchBtn"),imagesList:document.querySelector(".js-imagesList"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-loadMore-btn")},i={q:"",page:1,per_page:15,maxPage:0},p=new h(".js-imagesList a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});p.on("show.simplelightbox",n=>{n.preventDefault()});t.form.addEventListener("submit",v);async function v(n){if(n.preventDefault(),t.imagesList.innerHTML="",i.page=1,i.q=t.serchInput.value.trim(),!i.q){c.warning({title:"The query field is empty",message:"Fill in the field",position:"topRight"}),t.form.reset();return}try{const{total:o,hits:s}=await u(i);t.loader.style.display="none",i.maxPage=Math.ceil(o/i.per_page),d(s),p.refresh(),s.length>0&&s.length!==o?(t.loadMoreBtn.style.display="block",t.loadMoreBtn.addEventListener("click",m)):t.loadMoreBtn.style.display="none",s.length||c.warning({message:"Nothing was found for your request",position:"topRight"})}catch(o){c.error({title:"An error occurred",message:`${o}`,position:"topRight"})}finally{t.form.reset()}}async function m(n){i.page+=1,t.loadMoreBtn.style.display="none",t.loader.style.display="inline-block";try{const{hits:o}=await u(i);t.loader.style.display="none",d(o),p.refresh();const a=document.querySelector(".js-item-imagesList").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}catch(o){c.error({title:"An error occurred",message:`${o}`,position:"topRight"})}finally{t.loadMoreBtn.style.display="block",i.page===i.maxPage&&(t.loadMoreBtn.style.display="none",t.loadMoreBtn.removeEventListener(m),c.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}
//# sourceMappingURL=commonHelpers.js.map
