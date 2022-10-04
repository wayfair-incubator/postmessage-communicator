import {VendorEvent} from './VendorCommunicator';
import {ClientEvent} from './ClientCommunicator';

type EventType = VendorEvent | ClientEvent | string;

interface CommunicatorEvent {
  type: EventType;
  payload: any;
}

export class Communicator {
  target!: Window;
  origin!: string;

  constructor(origin: string) {
    this.origin = origin;
  }

  subscribe(
    eventType: EventType,
    cb: (e: MessageEvent) => void
  ) {
    const msg = (e: MessageEvent) => {
      if (e.origin !== this.origin || e.data.type !== eventType) {
        return;
      }
      cb(e);
    };
    window.addEventListener('message', msg);
    return msg;
  }

  unsubscribe(cb: (e: MessageEvent) => void) {
    window.removeEventListener('message', cb);
  }

  post(payload: CommunicatorEvent) {
    this.target.postMessage(payload, this.origin);
  }
}
