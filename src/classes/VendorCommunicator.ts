import {Communicator} from './Communicator';

export enum VendorEvent {
  AddToCart = 'AddToCart',
  AppInitialized = 'AppInitialized',
  ContactDesigner = 'ContactDesigner',
  DirtyStateChanged = 'DirtyStateChanged',
  iFrameLoaded = 'iFrameLoaded',
  ProjectDeleted = 'ProjectDeleted',
  ProjectSaved = 'ProjectSaved',
  TrackingEvent = 'TrackingEvent',
  TokenRefreshRequested = 'TokenRefreshRequested',
  UnauthorizedToken = 'UnauthorizedToken',
}

interface Metadata {
  source?: string;
  title: string;
  brand: string;
  style: string;
  color: string;
  thumbnailUrl: string;
  area?: number;
  price?: number;
}

interface EventPayload {
  schema: string;
  token: string;
  customerId: string;
  projectId: string;
  versionId: string;
  metadata: Metadata;
  bom?: any;
}

interface TrackingEvent {
  actionName: string;
  actionData: Record<string, unknown>;
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
    this.post({type: VendorEvent.iFrameLoaded});
  }

  projectSaved(): void {
    this.post({type: VendorEvent.ProjectSaved});
  }

  projectDeleted(): void {
    this.post({type: VendorEvent.ProjectDeleted});
  }

  trackEvent(payload: TrackingEvent): void {
    this.post({type: VendorEvent.TrackingEvent, payload});
  }

  tokenRefreshRequested(): void {
    this.post({type: VendorEvent.TokenRefreshRequested});
  }

  unauthorizedToken(error: string): void {
    this.post({type: VendorEvent.UnauthorizedToken, payload: error});
  }
}
