import {Communicator} from './Communicator';

export enum VendorEvent {
  AddToCart = 'AddToCart',
  DesignerHandoff = 'DesignerHandoff',
  RequestToken = 'RequestToken',
  ProjectDirty = 'ProjectDirty',
  ProjectSaved = 'ProjectSaved',
  ProjectDeleted = 'ProjectDeleted',
}

interface ProjectDetails {
  customerUid: number;
  projectId: number;
  projectVersion?: number;
  brand: string;
  style: string;
  color: string;
  url: string;
}

interface AtcPayload extends ProjectDetails {
  //TODO: match this with correct formatting
  bom: {};
}

interface DesignerHandoffPayload extends ProjectDetails {
  area: number;
}

export class VendorCommunicator extends Communicator {
  constructor(origin: string) {
    super(origin);
    this.target = window.parent;
    this.origin = origin;
  }

  addToCart(payload: AtcPayload) {
    this.post({type: VendorEvent.AddToCart, payload});
  }

  designerHandoff(payload: DesignerHandoffPayload) {
    this.post({type: VendorEvent.DesignerHandoff, payload});
  }

  requestToken() {
    this.post({type: VendorEvent.RequestToken, payload: ''});
  }

  projectDirty() {
    this.post({type: VendorEvent.ProjectDirty, payload: ''});
  }

  projectSaved() {
    this.post({type: VendorEvent.ProjectSaved, payload: ''});
  }

  projectDeleted() {
    this.post({type: VendorEvent.ProjectDeleted, payload: ''});
  }
}
