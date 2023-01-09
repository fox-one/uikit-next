var p=Object.defineProperty;var n=(t,a)=>p(t,"name",{value:a,configurable:!0});import{A as b,a as e,d as f,F as _,O as r}from"./vue.esm-bundler.a5c4e1bf.js";import{F as g}from"./FButton.f3fc7c21.js";import{V as F}from"./VSpacer.3c3f34f8.js";import{V as v}from"./VMessages.90062972.js";import{a as y}from"./locale.76e208ea.js";import{V as m}from"./VIcon.5ca83e1b.js";const B=b({name:"FAssetInputTools",props:{balance:{type:[String,Number],default:""},balanceLabel:{type:String,default:""},fiatAmount:{type:String,default:""},fillable:{type:Boolean,default:!0},messages:{type:Array,default:()=>[]},connected:Boolean,disabled:Boolean},emits:{connect:()=>!0,fill:()=>!0},setup(t,{slots:a,emit:l}){const{t:s}=y(),d=n(()=>l("connect"),"handleConnect"),o=n(()=>t.fillable&&l("fill"),"handleFill");return()=>{var i,c,u;return e("div",{class:"f-asset-input-tools"},[((i=a.left)==null?void 0:i.call(a))||e("div",{class:"f-asset-input-tools__left"},[t.connected?e(_,null,[e("div",{class:"f-asset-input-tools__balance"},[e("span",{class:"f-asset-input-tools__balance-label"},[t.balanceLabel||s("$vuetify.uikit.balance_short")]),e("span",{class:"f-asset-input-tools__balance-value",onClick:r(o,["stop"])},[t.balance]),t.fillable&&e(m,{size:"12",onClick:r(o,["stop"])},{default:()=>[f("$fill")]})]),e("span",null,[(c=a["append-left"])==null?void 0:c.call(a)])]):e(g,{variant:"text",size:"x-small",onClick:d,class:"f-asset-input-tools__connect-btn"},{default:()=>[e("span",null,[s("$vuetify.uikit.connect_wallet")]),e(m,{size:"12",class:"f-asset-input-tools__connect-icon"},{default:()=>[f("$connect")]})]})]),e(F,null,null),((u=a.right)==null?void 0:u.call(a))||t.messages.length>0?e(v,{messages:t.messages,active:!0,color:"error"},null):e("span",{class:"fiat-amount"},[t.fiatAmount])])}}});export{B as F};
//# sourceMappingURL=FAssetInputTools.884eeec7.js.map