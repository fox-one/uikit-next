import { defineComponent } from "vue";
import { useDisplay, useLocale } from "vuetify";
import { isDesktop } from "@foxone/utils/helper";

import { FButton } from "../FButton";

import "./FAuthMethodModal.scss";

export const FAuthMetamaskInstall = defineComponent({
  name: "FAuthMetamaskInstall",

  setup() {
    const { smAndDown } = useDisplay();
    const { t } = useLocale();

    const handleInstall = () => {
      const url = "https://metamask.io/download/";

      window.open(url);
    };

    return () => (
      <div
        class={`f-auth-metamask f-auth-step2 ${
          smAndDown.value && "f-auth-step2--small"
        } ${!isDesktop() && "f-auth-metamask--mobile"}`}
      >
        <div class="f-auth-step2__left"></div>

        <div class="f-auth-step2__right">
          <div
            class="f-auth-step2__title"
            innerHTML={
              isDesktop()
                ? t("$vuetify.uikit.metamask_not_installed")
                : t("$vuetify.uikit.metamask_not_installed_2")
            }
          />
          <div
            class="f-auth-step2__subtitle"
            innerHTML={
              isDesktop()
                ? t("$vuetify.uikit.metamask_introduction")
                : t("$vuetify.uikit.metamask_introduction_2")
            }
          />
          <FButton
            color="greyscale_1"
            onClick={handleInstall}
            innerHTML={
              isDesktop()
                ? t("$vuetify.uikit.install")
                : t("$vuetify.uikit.open_in_mixin")
            }
          />
        </div>
      </div>
    );
  },
});
