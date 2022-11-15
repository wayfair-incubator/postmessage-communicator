import {Communicator} from './Communicator';

export enum ClientEvent {
  LoginWithToken = 'LoginWithToken',
  RefreshWithToken = 'RefreshWithToken',
}

interface InitPayload {
  token: string;
  landingExperience: string;
}

export class ClientCommunicator extends Communicator {
  init(payload: InitPayload): void {
    this.post({type: ClientEvent.LoginWithToken, payload});
  }
  refreshWithToken(token: string): void {
    this.post({type: ClientEvent.RefreshWithToken, payload: token});
  }
}
