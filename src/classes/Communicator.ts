import {VendorEvents} from './VendorCommunicator';
import {ClientEvents} from './ClientCommunicator';

interface ConstructorProps {
  origin: string;
}

interface PostPayload {
  type: VendorEvents | ClientEvents | string;
  payload: any;
}

export class Communicator {
  target!: Window;
  origin!: string;

  constructor({origin}: ConstructorProps) {
    this.origin = origin;
  }

  subscribeEvent(
    eventType: VendorEvents | ClientEvents | string,
    messageCallback: (e: MessageEvent) => void
  ) {
    const msg = (e: MessageEvent) => {
      if (e.origin !== this.origin || e.data.type !== eventType) {
        return;
      }
      messageCallback(e);
      return;
    };
    window.addEventListener('message', msg);
    return msg;
  }

  unsubscribe(messageCallBack: (e: MessageEvent) => void) {
    window.removeEventListener('message', messageCallBack);
  }

  post(payload: PostPayload) {
    this.target.postMessage(payload, this.origin);
  }
}
