import {Communicator} from './Communicator';

export enum VendorEvent {
  AppInitialized = 'AppInitialized',
  iFrameLoaded = 'iFrameLoaded',
  iFrameRedirect = 'iFrameRedirect',
  DirtyStateChanged = 'DirtyStateChanged',
  ProjectSaved = 'ProjectSaved',
  ProjectDeleted = 'ProjectDeleted',
  ContactDesigner = 'ContactDesigner',
  AddToCart = 'AddToCart',
  ContinueToCart = 'ContinueToCart',
  TokenRefreshRequested = 'TokenRefreshRequested',
  UnauthorizedToken = 'UnauthorizedToken',
  TrackingEvent = 'TrackingEvent',
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

// TODO: (IW) This is pretty vendor-specific, should be typed to vendor apps
interface iFrameRedirectPayload extends CommonPayload {
  app: string;
  key?: string | number;
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
    this.post({type: VendorEvent.AppInitialized, payload: message});
  }

  iframeLoaded(message: string): void {
    this.post({type: VendorEvent.iFrameLoaded, payload: message});
  }

  iframeRedirect(payload: iFrameRedirectPayload): void {
    this.post({type: VendorEvent.iFrameRedirect, payload});
  }

  dirtyStateChanged(payload: DirtyStateChangedPayload): void {
    this.post({type: VendorEvent.DirtyStateChanged, payload});
  }

  projectSaved(payload: ProjectSavedPayload): void {
    this.post({type: VendorEvent.ProjectSaved, payload});
  }

  projectDeleted(payload: ProjectDeletedPayload): void {
    this.post({type: VendorEvent.ProjectDeleted, payload});
  }

  contactDesigner(payload: SnapshotPayload<CabinetsMetadata>): void {
    this.post({type: VendorEvent.ContactDesigner, payload});
  }

  addToCart(payload: SnapshotPayload<CabinetsMetadata>): void {
    this.post({type: VendorEvent.AddToCart, payload});
  }

  continueToCart(payload: SnapshotPayload<CabinetsMetadata>): void {
    this.post({type: VendorEvent.ContinueToCart, payload});
  }

<<<<<<< HEAD
  projectSaved(payload: EventPayload): void {
    this.post({type: VendorEvent.ProjectSaved, payload});
  }

  projectDeleted(): void {
    this.post({type: VendorEvent.ProjectDeleted});
  }

  trackEvent(payload: TrackingEvent): void {
    this.post({type: VendorEvent.TrackingEvent, payload});
  }

  tokenRefreshRequested(): void {
    this.post({type: VendorEvent.TokenRefreshRequested});
=======
  tokenRefreshRequested(payload: TokenRefreshRequestedPayload): void {
    this.post({type: VendorEvent.TokenRefreshRequested, payload});
>>>>>>> main
  }

  unauthorizedToken(error: string): void {
    this.post({type: VendorEvent.UnauthorizedToken, payload: error});
  }

<<<<<<< HEAD
  continueToCart(payload: EventPayload): void {
    this.post({type: VendorEvent.ContinueToCart, payload});
=======
  trackEvent(payload: TrackingEventPayload): void {
    this.post({type: VendorEvent.TrackingEvent, payload});
>>>>>>> main
  }
}
