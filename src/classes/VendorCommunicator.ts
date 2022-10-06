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
  bom?: any;
}

export class VendorCommunicator extends Communicator {
  constructor(origin: string) {
    super(origin);
    this.target = window.parent;
    this.origin = origin;
  }

  addToCart(payload: EventPayload): void {
    this.post({type: VendorEvent.AddToCart, payload});
  }

  appInitialized(): void {
    this.post({type: VendorEvent.AddToCart});
  }

  contactDesigner(payload: EventPayload): void {
    this.post({type: VendorEvent.ContactDesigner, payload});
  }

  dirtyStateChanged(): void {
    this.post({type: VendorEvent.DirtyStateChanged});
  }

  iframeLoaded(): void {
    this.post({type: VendorEvent.IframeLoaded});
  }

  projectSaved(): void {
    this.post({type: VendorEvent.ProjectSaved});
  }

  projectDeleted(): void {
    this.post({type: VendorEvent.ProjectDeleted});
  }

  tokenRefreshRequested(): void {
    this.post({type: VendorEvent.TokenRefreshRequested});
  }

  unauthorizedToken(error: string): void {
    this.post({type: VendorEvent.UnauthorizedToken, payload: error});
  }
}
