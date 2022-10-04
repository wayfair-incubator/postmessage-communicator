import {Communicator} from './Communicator';

export enum ClientEvent {
  Init,
  RefreshToken,
}

interface InitPayload {
  token: string;
  landingExperience: string;
  iframeContentWindow: Window;
}

export class ClientCommunicator extends Communicator {
  init({iframeContentWindow, ...rest}: InitPayload) {
    this.target = iframeContentWindow;
    this.post({type: ClientEvent.Init, payload: rest});
  }
  refreshToken(token: string) {
    this.post({type: ClientEvent.RefreshToken, payload: token});
  }
}
