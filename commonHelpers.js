import{a as m,i as p,S as f}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(n){return n.map(({webformatURL:s,largeImageURL:o,tags:r,likes:e,views:t,comments:a,downloads:u})=>`<li class="item-imagesList js-item-imagesList">
        <a href="${o}">
            <img src="${s}" alt="${r}" width = "360"/>
             </a>
            <div>
                <span>
                  <p><b>Likes</b></p>
                  <p>${e}</p>
                </span>
        
                <span>
                  <p><b>Views</b></p>
                  <p>${t}</p>
                </span>
                <span>
                  <p><b>Comments</b></p>
                  <p>${a}</p>
                </span>
                <span>
                  <p><b>Downloads</b></p>
                  <p>${u}</p>
                </span>
            </div>
       
      </li>`).join("")}m.defaults.baseURL="https://pixabay.com";const g="api",h="44929551-fd3f3fb9d8ead760ff0c5783d";async function l({q:n="",page:s=1,per_page:o=15}={}){return m.get(`${g}`,{params:{key:h,q:n,page:s,per_page:o}}).then(({data:r})=>r)}const c={form:document.querySelector(".js-searchForm"),serchInput:document.querySelector(".js-searchInput"),searchBtn:document.querySelector(".js-searchBtn"),imagesList:document.querySelector(".js-imagesList"),loader:document.querySelector(".loader")},i={q:"",page:1,per_page:15,maxPage:0};c.form.addEventListener("submit",y);async function y(n){if(n.preventDefault(),c.imagesList.innerHTML="",i.page=1,i.q=c.serchInput.value.trim(),!i.q){p.warning({title:"Поле запиту - пусте",message:"Заповніть поле",position:"topRight"}),c.form.reset();return}try{const{total:s,hits:o}=await l(i),r=d(o),e=await l(i);console.log(e),i.maxPage=Math.ceil(s/i.per_page),c.imagesList.insertAdjacentHTML("afterbegin",r);const t=new f(".js-imagesList a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});t.on("show.simplelightbox",a=>{a.preventDefault()}),t.refresh()}catch(s){p.error({title:"Сталася помилка",message:`${s}`})}finally{c.form.reset()}}
//# sourceMappingURL=commonHelpers.js.map
