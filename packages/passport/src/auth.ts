import type { PassportOptions } from "./index";
import type { App } from "vue";

import { isMVM, State } from "./index";
import { AuthData } from "./sync";

export default function (app: App, options: PassportOptions, state: State) {
  const connectFennec = async () => {
    await state.fennec.connect(options.origin);
    state.token =
      (await state.fennec.ctx?.wallet.signToken({
        payload: options.JWTPayload || {},
      })) ?? "";
  };

  const connectMVM = async (type) => {
    await state.mvm.connenct(type);
    state.token = state.mvm.getAuthToken();
  };

  const handleAuth = async (data, resolve, reject) => {
    state.channel = data.type;

    if (state.channel === "fennec") {
      await connectFennec();
      resolve({ channel: state.channel, token: state.token });
    }

    if (isMVM(state.channel)) {
      await connectMVM(state.channel);
      resolve({ channel: state.channel, token: state.token });
    }

    if (state.channel === "mixin") {
      if (data.token) {
        state.token = data.token;
      } else {
        if (!options.getTokenByCode) {
          return reject("No auth actions provided");
        }

        state.token = await options.getTokenByCode(data.code);
      }

      resolve({ channel: state.channel, token: state.token });
    }
  };

  return (): Promise<AuthData> => {
    return new Promise((resolve, reject) => {
      app.config.globalProperties.$uikit.auth.show({
        checkFennec: () => state.fennec.isAvailable(),
        checkMetamask: () => Boolean((window as any)?.ethereum?.isMetaMask),
        checkOnekey: () => Boolean((window as any).$onekey),
        handleAuth: async (data) => {
          try {
            await handleAuth(data, resolve, reject);
          } catch (error) {
            reject(error);
          }
        },
        handleError(error) {
          reject(error);
        },
      });
    });
  };
}
