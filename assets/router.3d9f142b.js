var d=Object.defineProperty;var u=(e,n)=>d(e,"name",{value:n,configurable:!0});import{U as m,b as c,t as k,n as h,E}from"./vue.esm-bundler.a5c4e1bf.js";import{B as f}from"./helpers.cec2c044.js";import{f as g,a as p,I as B}from"./useRender.c7ecffde.js";function C(){var e,n;return(e=g("useRouter"))==null||(n=e.proxy)==null?void 0:n.$router}u(C,"useRouter");function I(e,n){const r=m("RouterLink"),a=c(()=>!!(e.href||e.to)),l=c(()=>(a==null?void 0:a.value)||f(n,"click")||f(e,"click"));if(typeof r=="string")return{isLink:a,isClickable:l,href:k(e,"href")};const t=e.to?r.useLink(e):void 0;return{isLink:a,isClickable:l,route:t==null?void 0:t.route,navigate:t==null?void 0:t.navigate,isActive:t&&c(()=>{var i,o;return e.exact?(i=t.isExactActive)==null?void 0:i.value:(o=t.isActive)==null?void 0:o.value}),href:c(()=>e.to?t==null?void 0:t.route.value.href:e.href)}}u(I,"useLink");const $=p({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let v=!1;function b(e,n){let r=!1,a,l;B&&(h(()=>{window.addEventListener("popstate",t),a=e==null?void 0:e.beforeEach((i,o,s)=>{v?r?n(s):s():setTimeout(()=>r?n(s):s()),v=!0}),l=e==null?void 0:e.afterEach(()=>{v=!1})}),E(()=>{var i,o;window.removeEventListener("popstate",t),(i=a)==null||i(),(o=l)==null||o()}));function t(i){var o;(o=i.state)!=null&&o.replaced||(r=!0,setTimeout(()=>r=!1))}u(t,"onPopstate")}u(b,"useBackButton");export{C as a,b,$ as m,I as u};
//# sourceMappingURL=router.3d9f142b.js.map