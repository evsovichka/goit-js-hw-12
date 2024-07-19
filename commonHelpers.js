import{a as y,i as c,S as g}from"./assets/vendor-ee72e1a4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(a){const o=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:l,comments:m,downloads:f})=>`<li class="item-imagesList js-item-imagesList">
        <a href="${i}">
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
                  <p>${m}</p>
                </span>
                <span>
                  <p><b>Downloads</b></p>
                  <p>${f}</p>
                </span>
            </div>
       
      </li>`).join("");t.imagesList.insertAdjacentHTML("beforeend",o)}const h="api",b="44929551-fd3f3fb9d8ead760ff0c5783d",L="https://pixabay.com";async function d({q:a="",page:o=1,per_page:s=15}={}){return t.loader.style.display="inline-block",y.get(`${L}/${h}`,{params:{key:b,q:a,page:o,per_page:s}}).then(({data:i})=>i)}const t={form:document.querySelector(".js-searchForm"),serchInput:document.querySelector(".js-searchInput"),searchBtn:document.querySelector(".js-searchBtn"),imagesList:document.querySelector(".js-imagesList"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-loadMore-btn")},n={q:"",page:1,per_page:15,maxPage:0};t.form.addEventListener("submit",q);async function q(a){if(a.preventDefault(),t.imagesList.innerHTML="",n.page=1,n.q=t.serchInput.value.trim(),!n.q){c.warning({title:"The query field is empty",message:"Fill in the field",position:"topRight"}),t.form.reset();return}try{const{total:o,hits:s}=await d(n);t.loader.style.display="none",n.maxPage=Math.ceil(o/n.per_page),p(s);const i=new g(".js-imagesList a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});i.on("show.simplelightbox",e=>{e.preventDefault()}),i.refresh(),s.length>0&&s.length!==o?(t.loadMoreBtn.style.display="block",t.loadMoreBtn.addEventListener("click",u)):t.loadMoreBtn.style.display="none",s.length||c.warning({message:"Nothing was found for your request",position:"topRight"})}catch(o){c.error({title:"An error occurred",message:`${o}`,position:"topRight"})}finally{t.form.reset()}}async function u(a){n.page+=1,t.loadMoreBtn.style.display="none",t.loader.style.display="inline-block";try{const{hits:o}=await d(n);t.loader.style.display="none",p(o);const i=document.querySelector(".js-item-imagesList").getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}catch(o){c.error({title:"An error occurred",message:`${o}`,position:"topRight"})}finally{t.loadMoreBtn.style.display="block",n.page===n.maxPage&&(t.loadMoreBtn.style.display="none",t.loadMoreBtn.removeEventListener(u),c.warning({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}}
//# sourceMappingURL=commonHelpers.js.map
