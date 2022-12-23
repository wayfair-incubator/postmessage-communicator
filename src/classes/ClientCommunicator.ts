import {Communicator} from './Communicator';

export enum ClientEvent {
  LoginWithToken = 'LoginWithToken',
  RefreshWithToken = 'RefreshWithToken',
  AddToCartStatus = 'AddToCartStatus',
}

interface InitPayload {
  token: string;
  landingExperience: string;
}

interface AddToCartStatusPayload {
  success: boolean;
  message: string;
  projectId: string;
  versionId: string;
}
export class ClientCommunicator extends Communicator {
  init(payload: InitPayload): void {
    this.post({type: ClientEvent.LoginWithToken, payload});
  }
  refreshWithToken(token: string): void {
    this.post({type: ClientEvent.RefreshWithToken, payload: token});
  }
  addToCartStatus(payload: AddToCartStatusPayload): void {
    this.post({type: ClientEvent.AddToCartStatus, payload: payload})
  }
}
