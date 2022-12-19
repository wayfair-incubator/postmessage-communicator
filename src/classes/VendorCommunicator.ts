import {Communicator} from './Communicator';

export enum VendorEvent {
  AddToCart = 'AddToCart',
  AppInitialized = 'AppInitialized',
  ContactDesigner = 'ContactDesigner',
  DirtyStateChanged = 'DirtyStateChanged',
  iFrameLoaded = 'iFrameLoaded',
  iFrameRedirect = 'iFrameRedirect',
  ProjectDeleted = 'ProjectDeleted',
  ProjectSaved = 'ProjectSaved',
  TrackingEvent = 'TrackingEvent',
  TokenRefreshRequested = 'TokenRefreshRequested',
  UnauthorizedToken = 'UnauthorizedToken',
}

interface CommonPayload {
  message?: string;
  token: string;
  customerId: string;
}

interface CommonMetadata {
  title: string;
  brand: string;
  style: string;
  color: string;
  price: number;
  retailPrice?: number;
  thumbnailUrl?: string;
  [key: string]: string | number | undefined;
}

interface CabinetsMetadata extends CommonMetadata {
  source?: string;
  area?: number;
}

interface SnapshotPayload<M extends CommonMetadata> extends CommonPayload {
  schema: string;
  projectId: string;
  versionId: string;
  metadata: M;
  bom: string;
}

interface ProjectSavedPayload extends CommonPayload {
  projectId: string;
  versionId?: string;
}

interface ProjectDeletedPayload extends CommonPayload {
  projectId: string;
}

interface DirtyStateChangedPayload extends CommonPayload {
  projectId: string;
  isDirty: boolean;
}

interface iFrameRedirectPayload extends CommonPayload {
  app: string;
  key: string;
}

interface TokenRefreshRequestedPayload extends CommonPayload {
  requestId: string; 
}

interface TrackingEventPayload {
  actionName: string;
  actionData: Record<string, unknown>;
}

export class VendorCommunicator extends Communicator {
  constructor(origin: string) {
    super(origin);
    this.target = window.parent;
    this.origin = origin;
  }

  appInitialized(message: string): void {
    this.post({type: VendorEvent.AddToCart, payload: message});
  }

  addToCart(payload: SnapshotPayload<CabinetsMetadata>): void {
    this.post({type: VendorEvent.AddToCart, payload});
  }

  contactDesigner(payload: SnapshotPayload<CabinetsMetadata>): void {
    this.post({type: VendorEvent.ContactDesigner, payload});
  }

  projectSaved(payload: ProjectSavedPayload): void {
    this.post({type: VendorEvent.ProjectSaved, payload});
  }

  projectDeleted(payload: ProjectDeletedPayload): void {
    this.post({type: VendorEvent.ProjectDeleted, payload});
  }

  dirtyStateChanged(payload: DirtyStateChangedPayload): void {
    this.post({type: VendorEvent.DirtyStateChanged, payload});
  }

  tokenRefreshRequested(payload: TokenRefreshRequestedPayload): void {
    this.post({type: VendorEvent.TokenRefreshRequested, payload});
  }

  unauthorizedToken(error: string): void {
    this.post({type: VendorEvent.UnauthorizedToken, payload: error});
  }

  iframeLoaded(message: string): void {
    this.post({type: VendorEvent.iFrameLoaded, payload: message});
  }
  
  iframeRedirect(payload: iFrameRedirectPayload): void {
    this.post({type: VendorEvent.iFrameRedirect, payload});
  }

  trackEvent(payload: TrackingEventPayload): void {
    this.post({type: VendorEvent.TrackingEvent, payload});
  }
}
