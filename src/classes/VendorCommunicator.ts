import {Communicator} from './Communicator';

export enum VendorEvent {
  AddToCart = 'AddToCart',
  AppInitialized = 'AppInitialized',
  ContactDesigner = 'ContactDesigner',
  DirtyStateChanged = 'DirtyStateChanged',
  IframeLoaded = 'IframeLoaded',
  ProjectSaved = 'ProjectSaved',
  ProjectDeleted = 'ProjectDeleted',
  TokenRefreshRequested = 'TokenRefreshRequested',
  UnauthorizedToken = 'UnauthorizedToken',
}

interface MetaData {
  title: string;
  brand: string;
  style: string;
  color: string;
  thumbnailUri: string;
  area?: number;
}

interface EventPayload {
  schema: string;
  token: string;
  customerId: string;
  projectId: string;
  versionId: number;
  metadata: MetaData;
  bom?: {};
}

export class VendorCommunicator extends Communicator {
  constructor(origin: string) {
    super(origin);
    this.target = window.parent;
    this.origin = origin;
  }

  addToCart(payload: EventPayload) {
    this.post({type: VendorEvent.AddToCart, payload});
  }

  appInitialized() {
    this.post({type: VendorEvent.AddToCart});
  }

  contactDesigner(payload: EventPayload) {
    this.post({type: VendorEvent.ContactDesigner, payload});
  }

  dirtyStateChanged() {
    this.post({type: VendorEvent.DirtyStateChanged});
  }

  iframeLoaded() {
    this.post({type: VendorEvent.IframeLoaded});
  }

  projectSaved() {
    this.post({type: VendorEvent.ProjectSaved});
  }

  projectDeleted() {
    this.post({type: VendorEvent.ProjectDeleted});
  }

  tokenRefreshRequested() {
    this.post({type: VendorEvent.TokenRefreshRequested});
  }

  unauthorizedToken(error: string) {
    this.post({type: VendorEvent.UnauthorizedToken, payload: error});
  }
}
