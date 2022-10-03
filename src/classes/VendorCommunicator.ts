import {Communicator} from './Communicator';

export enum VendorEvents {
  addToCart,
  designerHandOff,
  requestToken,
  projectDirty,
  projectSaved,
  projectDeleted,
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

interface ConstructorProps {
  origin: string;
}

interface DesignerHandOffPayload extends ProjectDetails {
  area: number;
}

export class VendorCommunicator extends Communicator {
  constructor({origin}: ConstructorProps) {
    super({origin});
    this.target = window.parent;
    this.origin = origin;
  }

  addToCart(payload: AtcPayload) {
    this.post({type: VendorEvents.addToCart, payload});
  }

  designerHandOff(payload: DesignerHandOffPayload) {
    this.post({type: VendorEvents.designerHandOff, payload});
  }

  requestToken() {
    this.post({type: VendorEvents.requestToken, payload: ''});
  }

  projectDirty() {
    this.post({type: VendorEvents.projectDirty, payload: ''});
  }

  projectSaved() {
    this.post({type: VendorEvents.projectSaved, payload: ''});
  }

  projectDeleted() {
    this.post({type: VendorEvents.projectDeleted, payload: ''});
  }
}
