var r=Object.defineProperty;var o=(e,n)=>r(e,"name",{value:n,configurable:!0});import{F as t}from"./FQRCode.8f456d01.js";import"./vue.esm-bundler.a5c4e1bf.js";import"./helpers.cec2c044.js";import"./qrious.20baccc9.js";import"./iframe.44f7c4d0.js";const F={parameters:{storySource:{source:`import { FQRCode } from "./FQRCode";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FQRCode",
  component: FQRCode,
} as Meta<typeof FQRCode>;

const Template: StoryFn<typeof FQRCode> = (args) => ({
  components: { FQRCode },
  setup() {
    return { args };
  },
  template: \`<FQRCode v-bind="args" />\`,
});

export const Default = Template.bind({});
Default.args = { text: "Hello", size: 128 };
`,locationsMap:{default:{startLoc:{col:42,line:9},endLoc:{col:2,line:15},startBody:{col:42,line:9},endBody:{col:2,line:15}}}}},title:"Components/FQRCode",component:t},s=o(e=>({components:{FQRCode:t},setup(){return{args:e}},template:'<FQRCode v-bind="args" />'}),"Template"),a=s.bind({});a.args={text:"Hello",size:128};const u=["Default"];export{a as Default,u as __namedExportsOrder,F as default};
//# sourceMappingURL=FQRCode.stories.0077653f.js.map
