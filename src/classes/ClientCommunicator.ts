import {Communicator} from './Communicator';

export enum ClientEvent {
  Init = 'Init',
  RefreshToken = 'RefreshToken',
}

interface InitPayload {
  token: string;
  landingExperience: string;
}

export class ClientCommunicator extends Communicator {
  init(payload: InitPayload) {
    this.post({type: ClientEvent.Init, payload});
  }
  refreshToken(token: string) {
    this.post({type: ClientEvent.RefreshToken, payload: token});
  }
}
