import "./styles/index.scss";
import * as allcomponents from "./components";
import { Toast, Auth, Modal, Payment } from "./plugins";

import type { App } from "vue";
import type { ToastGlobalOptions } from "./plugins/toast";
import type { AuthMethodGlobalOptions } from "./plugins/auth";
import type { MessageModalProps } from "./plugins/modal";
import type { PaymentOptions } from "./plugins/payment";

export interface UIKitOptions {
  components?: Record<string, any>;
  toast?: ToastGlobalOptions;
  auth?: AuthMethodGlobalOptions;
  modal?: MessageModalProps;
  payment?: PaymentOptions;
}

export default function install(app: App, options: UIKitOptions = {}) {
  const components = options.components || allcomponents;

  for (const key in components) {
    app.component(key, components[key]);
  }

  app.use(Toast, options.toast);
  app.use(Auth, options.auth);
  app.use(Modal, options.modal);
  app.use(Payment, options.payment);
}

export * from "./presets";
export * from "./plugins";
