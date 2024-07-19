import{a as g,S as h,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function d(i){const o=i.map(({webformatURL:s,largeImageURL:a,tags:t,likes:r,views:l,comments:f,downloads:y})=>`<li class="item-imagesList js-item-imagesList">
        <a href="${a}">
            <img src="${s}" alt="${t}" width = "360"/>
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
       
      </li>`).join("");e.imagesList.insertAdjacentHTML("beforeend",o)}const b="api/",L="44929551-fd3f3fb9d8ead760ff0c5783d",M="https://pixabay.com";async function u({q:i="",page:o=1,per_page:s=15}={}){return e.loader.style.display="inline-block",e.loadMoreBtn.style.display="none",g.get(`${M}/${b}`,{params:{key:L,q:i,page:o,per_page:s}}).then(({data:a})=>a)}const e={form:document.querySelector(".js-searchForm"),serchInput:document.querySelector(".js-searchInput"),searchBtn:document.querySelector(".js-searchBtn"),imagesList:document.querySelector(".js-imagesList"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-loadMore-btn")},n={q:"",page:1,per_page:15,maxPage:0},p=new h(".js-imagesList a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});p.on("show.simplelightbox",i=>{i.preventDefault()});e.form.addEventListener("submit",q);async function q(i){if(i.preventDefault(),e.imagesList.innerHTML="",n.page=1,n.q=e.serchInput.value.trim(),!n.q){c.warning({title:"The query field is empty",message:"Fill in the field",position:"topRight"}),e.form.reset();return}try{const{total:o,hits:s}=await u(n);e.loader.style.display="none",n.maxPage=Math.ceil(o/n.per_page),d(s),p.refresh(),s.length>0&&s.length!==o?(e.loadMoreBtn.style.display="block",e.loadMoreBtn.addEventListener("click",m)):e.loadMoreBtn.style.display="none",s.length||c.warning({message:"Nothing was found for your request",position:"topRight"})}catch(o){c.error({title:"An error occurred",message:`${o}`,position:"topRight"})}finally{e.form.reset()}}async function m(i){n.page+=1,e.loadMoreBtn.style.display="none",e.loader.style.display="inline-block";try{const{hits:o}=await u(n);e.loader.style.display="none",d(o),p.refresh();const a=document.querySelector(".js-item-imagesList").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}catch(o){c.error({title:"An error occurred",message:`${o}`,position:"topRight"})}finally{e.loadMoreBtn.style.display="block",n.page===n.maxPage&&(e.loadMoreBtn.style.display="none",e.loadMoreBtn.removeEventListener(m),c.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}
//# sourceMappingURL=commonHelpers.js.map
