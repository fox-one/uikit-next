import { defineComponent } from "vue";
import { VIcon } from "vuetify/components";

export const FHintActivator = defineComponent({
  name: "FHintActivator",

  setup() {
    return () => (
      <VIcon
        size="12"
        color="red"
        class="f-hint__activator"
      >
        $info
      </VIcon>
    );
  },
});
