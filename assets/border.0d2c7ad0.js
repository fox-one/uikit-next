var a=Object.defineProperty;var t=(r,s)=>a(r,"name",{value:s,configurable:!0});import{b as u,B as d}from"./vue.esm-bundler.a5c4e1bf.js";import{a as m,h as i}from"./useRender.c7ecffde.js";const g=m({border:[Boolean,Number,String]},"border");function p(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i();return{borderClasses:u(()=>{const e=d(r)?r.value:r.border,o=[];if(e===!0||e==="")o.push(`${s}--border`);else if(typeof e=="string"||e===0)for(const n of String(e).split(" "))o.push(`border-${n}`);return o})}}t(p,"useBorder");export{g as m,p as u};
//# sourceMappingURL=border.0d2c7ad0.js.map