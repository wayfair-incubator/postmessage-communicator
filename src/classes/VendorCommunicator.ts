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

interface AddToCartMetadata {
  source?: string;
  title: string;
  brand: string;
  style: string;
  color: string;
  thumbnailUrl: string;
  area?: number;
  price?: number;
  retailPrice?: number;
}

interface AddToCartPayload {
  schema: string;
  token: string;
  customerId: string;
  projectId: string;
  versionId: string;
  metadata: AddToCartMetadata;
  bom?: any;
}

interface DesignerMetadata {
  source?: string;
  title: string;
  brand: string;
  style: string;
  color: string;
  thumbnailUrl: string;
  area?: number;
}

interface ConsultDesignerPayload {
  schema: string;
  token: string;
  customerId: string;
  projectId: string;
  versionId: string;
  metadata: ConsultDesignerMetadata;
  bom?: any;
}

interface TrackingEvent {
  actionName: string;
  actionData: Record<string, unknown>;
}

interface ProjectSavedPayload {
  message: string;
  customerId: string;
  projectId: string;
  versionId: string;
}

interface ProjectDeletedPayload {
  message: string;
  customerId: string;
  projectId: string;
}

interface DirtyStateChangedPayload {
  message: string;
  isDirty: boolean;
}

interface iFrameRedirectPayload {
  message: string;
  app: string;
  key: string;
}

interface TokenRefreshRequestedPayload {
  message: string;
  requestId: string; 
}

export class VendorCommunicator extends Communicator {
  constructor(origin: string) {
    super(origin);
    this.target = window.parent;
    this.origin = origin;
  }

  addToCart(payload: AddToCartPayload): void {
    this.post({type: VendorEvent.AddToCart, payload});
  }

  appInitialized(message: string): void {
    this.post({type: VendorEvent.AddToCart, payload: message});
  }

  contactDesigner(payload: ConsultDesignerPayload): void {
    this.post({type: VendorEvent.ContactDesigner, payload});
  }

  dirtyStateChanged(payload: DirtyStateChangedPayload): void {
    this.post({type: VendorEvent.DirtyStateChanged, payload});
  }

  iframeLoaded(message: string): void {
    this.post({type: VendorEvent.iFrameLoaded, payload: message});
  }
  
  iframeRedirect(payload: iFrameRedirectPayload): void {
    this.post({type: VendorEvent.iFrameRedirect, payload});
  }

  projectSaved(payload: ProjectSavedPayload): void {
    this.post({type: VendorEvent.ProjectSaved, payload});
  }

  projectDeleted(payload: ProjectDeletedPayload): void {
    this.post({type: VendorEvent.ProjectDeleted, payload});
  }

  trackEvent(payload: TrackingEvent): void {
    this.post({type: VendorEvent.TrackingEvent, payload});
  }

  tokenRefreshRequested(payload: TokenRefreshRequestedPayload): void {
    this.post({type: VendorEvent.TokenRefreshRequested, payload});
  }

  unauthorizedToken(error: string): void {
    this.post({type: VendorEvent.UnauthorizedToken, payload: error});
  }
}
