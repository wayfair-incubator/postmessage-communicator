import {VendorEvent} from './VendorCommunicator';
import {ClientEvent} from './ClientCommunicator';

type EventType = VendorEvent | ClientEvent | string;

type CallBack = (e: MessageEvent) => void;

interface CommunicatorEvent {
  type: EventType;
  payload?: any;
}

export class Communicator {
  target!: Window;
  origin!: string;

  constructor(origin: string) {
    this.origin = origin;
  }

  updateConfig(target: Window): void {
    this.target = target;
  }

  subscribe(eventType: EventType, cb: CallBack): CallBack {
    const msg = (e: MessageEvent) => {
      if (e.origin !== this.origin || e.data.type !== eventType) {
        return;
      }
      cb(e);
    };
    window.addEventListener('message', msg);
    return msg;
  }

  unsubscribe(cb: CallBack): void {
    window.removeEventListener('message', cb);
  }

  post({type, payload = ''}: CommunicatorEvent): void {
    this.target.postMessage({type, payload}, this.origin);
  }
}
