import {Common} from './image-modal.common';

let window: UIWindow;

declare var ImageModalIOS: any;
let imageModal;

export class ImageModal extends Common {
    constructor() {
        super();
    }

    public showModal(url: string, cb: any): void {
        window = UIApplication.sharedApplication.keyWindow;
        imageModal = ImageModalIOS.alloc().init();
        imageModal.setFrameWithFrame(window.bounds);
        cb ? imageModal.setImageWithUrl(url) : imageModal.setImageWithUrlCb(url, cb);
        window.addSubview(imageModal.getView());
    }

}
