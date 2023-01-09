var i=Object.defineProperty;var r=(e,o)=>i(e,"name",{value:o,configurable:!0});import{A as l,b as a,a as c,m}from"./vue.esm-bundler.a5c4e1bf.js";import{V as p}from"./VSlider.7ff33036.js";import"./VInput.34db0c3a.js";import"./color.43314d1d.js";import"./helpers.cec2c044.js";import"./useRender.c7ecffde.js";import"./VIcon.5ca83e1b.js";import"./density.b3e2de9a.js";import"./proxiedModel.9639363f.js";import"./locale.76e208ea.js";import"./VMessages.90062972.js";import"./index.628b3df7.js";import"./transition.c93b8895.js";import"./elevation.52b4704c.js";import"./rounded.a0c73c18.js";import"./index.1b40d9d7.js";const t=l({name:"FSlider",props:{isProcess:Boolean},setup(e){const o=a(()=>({"f-slider--hide-thumb":e.isProcess})),n=e.isProcess?{trackSize:4,tickSize:4,color:"success",trackColor:"greyscale_6",rounded:0,showTicks:"always",readonly:!0}:{trackSize:8,thumbSize:24,elevation:0,color:"greyscale_1",trackColor:"greyscale_5"};return()=>c(p,m({class:["f-slider",o.value]},n),null)}}),D={parameters:{storySource:{source:`import { FSlider } from "./FSlider";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FSlider",
  component: { FSlider },
} as Meta<typeof FSlider>;

const Template: StoryFn<typeof FSlider> = (args) => ({
  components: {
    FSlider,
  },
  setup() {
    return { args };
  },
  template: \`<FSlider v-bind="args" />\`,
});

export const Default = Template.bind({});
Default.args = {};

export const Process = Template.bind({});
Process.args = {
  isProcess: true,
  min: 0,
  max: 3,
  ticks: { 0: "0%", 1: "33.3%", 2: "66.6%", 3: "100%" },
  modelValue: 1.5,
};
`,locationsMap:{default:{startLoc:{col:42,line:9},endLoc:{col:2,line:17},startBody:{col:42,line:9},endBody:{col:2,line:17}},process:{startLoc:{col:42,line:9},endLoc:{col:2,line:17},startBody:{col:42,line:9},endBody:{col:2,line:17}}}}},title:"Components/FSlider",component:{FSlider:t}},s=r(e=>({components:{FSlider:t},setup(){return{args:e}},template:'<FSlider v-bind="args" />'}),"Template"),d=s.bind({});d.args={};const u=s.bind({});u.args={isProcess:!0,min:0,max:3,ticks:{0:"0%",1:"33.3%",2:"66.6%",3:"100%"},modelValue:1.5};const L=["Default","Process"];export{d as Default,u as Process,L as __namedExportsOrder,D as default};
//# sourceMappingURL=FSlider.stories.13df7226.js.map
