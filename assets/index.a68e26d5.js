(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const n=document.querySelector("#colors"),a=document.querySelector("#table_rows"),i=document.querySelectorAll(".item");for(let e=0;e<i.length;e++)e%2===0&&i[e].classList.add("bg-[#d9d9d9]");function u(){const e=document.querySelectorAll(".color");let t=null;return e.forEach(s=>{s.classList.contains("select_color")&&(t=s)}),t||!1}function d(){const e=document.querySelectorAll(".color");let t=null;return e.forEach(s=>{s.classList.contains("select_color")&&(t=s)}),t}n.addEventListener("click",e=>{if(e.target.closest(".color"))if(e.target.classList.contains("select_color"))e.target.classList.remove("select_color");else{let t=u();t&&t.classList.remove("select_color"),e.target.classList.add("select_color")}});a.addEventListener("click",e=>{if(e.target.closest(".item")){const t=d();let s=null;t.classList.forEach(l=>{l.indexOf("bg-")||(s=l)}),e.target.classList.forEach(l=>{l.indexOf("bg-")||e.target.classList.remove(l)}),e.target.classList.remove("bg-[#d9d9d9]"),e.target.classList.add(s)}});