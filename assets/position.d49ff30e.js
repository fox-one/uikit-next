var p=Object.defineProperty;var i=(t,n)=>p(t,"name",{value:n,configurable:!0});import{u as g}from"./locale.76e208ea.js";import{b as c}from"./vue.esm-bundler.a5c4e1bf.js";import{p as d}from"./anchor.e4a88562.js";import{a as u,h}from"./useRender.c7ecffde.js";const l={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},v=u({location:String},"location");function C(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:f}=g();return{locationStyles:c(()=>{if(!t.location)return{};const{side:o,align:s}=d(t.location.split(" ").length>1?t.location:`${t.location} center`,f.value);function r(m){return a?a(m):0}i(r,"getOffset");const e={};return o!=="center"&&(n?e[l[o]]=`calc(100% - ${r(o)}px)`:e[o]=0),s!=="center"?n?e[l[s]]=`calc(100% - ${r(s)}px)`:e[s]=0:(o==="center"?e.top=e.left="50%":e[{top:"left",bottom:"left",left:"top",right:"top"}[o]]="50%",e.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[o]),e})}}i(C,"useLocation");const b=["static","relative","fixed","absolute","sticky"],L=u({position:{type:String,validator:t=>b.includes(t)}},"position");function R(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h();return{positionClasses:c(()=>t.position?`${n}--${t.position}`:void 0)}}i(R,"usePosition");export{L as a,R as b,v as m,C as u};
//# sourceMappingURL=position.d49ff30e.js.map
