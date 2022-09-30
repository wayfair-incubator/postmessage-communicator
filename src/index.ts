interface InitializePostProps {
  target?: Window;
  origin: string;
}

// event payload interfaces
interface InitPayload {
  token: string;
  landingExperience: string;
}

interface ProjectDetails {
  customerUid: string;
  projectId: number;
  projectVersion?: number;
  brand: string;
  style: string;
  color: string;
  url: string;
}

interface SendPayload {
  type: string;
  payload: any;
}

interface AtcPayload extends ProjectDetails {
  //TODO: match this with correct formatting
  bom: {};
}

interface DesignerHandoffPayload extends ProjectDetails {
  area: number;
}

export class Communicator {
  target!: Window;
  origin!: string;

  subscribeEvent(
    eventType: string,
    messageCallback: (e: MessageEvent) => void
  ) {
    const msg = (e: MessageEvent) => {
      const isEvent = e.data.type === eventType;

      if (e.origin !== this.origin || !isEvent) {
        return;
      }
      messageCallback(e);
      return;
    };
    window.addEventListener('message', msg);
    return msg;
  }

  unsubscribe(messageCallBack: (e: MessageEvent) => void) {
    window.removeEventListener('message', messageCallBack);
  }

  initializePost({target = window.parent, origin}: InitializePostProps) {
    this.target = target;
    this.origin = origin;
  }

  send(payload: SendPayload) {
    this.target.postMessage(payload, this.origin);
  }

  // events
  init(payload: InitPayload) {
    this.send({type: 'init', payload});
  }

  addToCart(payload: AtcPayload) {
    this.send({type: 'atc', payload});
  }

  designerHandoff(payload: DesignerHandoffPayload) {
    this.send({type: 'designerHandoff', payload});
  }

  requestToken() {
    this.send({type: 'requestToken', payload: ''});
  }

  refreshToken(token: string) {
    this.send({type: 'refreshToken', payload: token});
  }

  projectDirty() {
    this.send({type: 'projectDirty', payload: ''});
  }

  projectSaved() {
    this.send({type: 'projectSaved', payload: ''});
  }

  projectDeleted() {
    this.send({type: 'projectDeleted', payload: ''});
  }
}
