var c=Object.defineProperty;var u=(e,l)=>c(e,"name",{value:l,configurable:!0});import{A as d,r,w as f,a as t,N as m}from"./vue.esm-bundler.a5c4e1bf.js";import{a as p}from"./locale.76e208ea.js";import{V as y}from"./VBtn.b5444450.js";import{V as v}from"./VOverlay.74b7cee1.js";function g(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!m(e)}u(g,"_isSlot");const b=d({name:"FPayingModal",props:{modelValue:{type:Boolean,default:!1},text:{type:String,default:""}},emits:{"update:modelValue":e=>!0,cancel:()=>!0},setup(e,{emit:l}){const{t:n}=p(),o=r(null),i=r(!1);return f(()=>e.modelValue,u(a=>{i.value=!1,o.value&&clearTimeout(o.value),a&&(o.value=setTimeout(()=>{i.value=!0},3e4))},"handleModalChange")),()=>{let a;return t(v,{modelValue:e.modelValue,class:"f-payment-loading d-flex align-center justify-center",persistent:!0,"onUpdate:modelValue":s=>l("update:modelValue",s)},{default:()=>[t("div",{class:"f-spinner__wrapper"},[Array.from({length:4}).map(()=>t("span",{class:"f-spinner__rect"},null))]),t("div",{class:"f-payment__hint text-center text-subtitle-2"},[i.value?n("$vuetify.uikit.lasting_tip"):e.text||n("$vuetify.uikit.checking_payment")]),t("div",{class:"f-payment__actions"},[t(y,{rounded:"pill",variant:"outlined",color:"greyscale_7",onClick:()=>l("cancel")},g(a=n("$vuetify.uikit.cancel"))?a:{default:()=>[a]})])]})}}});export{b as F};
//# sourceMappingURL=FPayingModal.c962507e.js.map