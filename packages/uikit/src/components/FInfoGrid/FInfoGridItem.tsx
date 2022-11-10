import { defineComponent } from "vue";

import "./FInfoGridItem.scss";

// TODO: Finish Hint
export const FInfoGridItem = defineComponent({
  name: "FInfoGridItem",

  props: {
    title: String,
    value: String,
    hint: String,
    unit: String,
  },

  setup(props, { slots }) {
    return () => (
      <div class="f-info-grid-item">
        <div class="f-info-grid-item__title">
          {slots.title?.() ?? props.title}
          {/* <FToolTip hint={props.hint} /> */}
        </div>
        <div class="f-info-grid-item__value">
          <span>{slots.value?.() ?? props.value}</span>
          <span>{props.unit}</span>
        </div>
      </div>
    );
  },
});
