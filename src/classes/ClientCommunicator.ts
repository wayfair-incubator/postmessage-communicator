import {Communicator} from './Communicator';

export enum ClientEvents {
  init,
  refreshToken,
}

interface InitPayload {
  token: string;
  landingExperience: string;
  iframeContentWindow: Window;
}

export class ClientCommunicator extends Communicator {
  init({iframeContentWindow, ...rest}: InitPayload) {
    this.target = iframeContentWindow;
    this.post({type: ClientEvents.init, payload:  rest});
  }
  refreshToken(token: string) {
    this.post({type: ClientEvents.refreshToken, payload: token});
  }
}
