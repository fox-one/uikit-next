var v=Object.defineProperty;var i=(o,n)=>v(o,"name",{value:n,configurable:!0});import{r as b,a as h}from"./vue.esm-bundler.a5c4e1bf.js";import{g as V,h as F}from"./VInput.34db0c3a.js";import{f as R}from"./forwardRefs.c003b6b8.js";import{d as y,u as D}from"./useRender.c7ecffde.js";const x=y({name:"VForm",props:{...V()},emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,n){let{slots:l,emit:f}=n;const a=F(o),s=b();function u(t){t.preventDefault(),a.reset()}i(u,"onReset");function d(t){const r=t,e=a.validate();r.then=e.then.bind(e),r.catch=e.catch.bind(e),r.finally=e.finally.bind(e),f("submit",r),r.defaultPrevented||e.then(c=>{let{valid:p}=c;if(p){var m;(m=s.value)==null||m.submit()}}),r.preventDefault()}return i(d,"onSubmit"),D(()=>{var t;return h("form",{ref:s,class:"v-form",novalidate:!0,onReset:u,onSubmit:d},[(t=l.default)==null?void 0:t.call(l,a)])}),R(a,s)}});export{x as V};
//# sourceMappingURL=VForm.b1ded583.js.map