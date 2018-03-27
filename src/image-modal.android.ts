import {Common} from './image-modal.common';
import * as app from "tns-core-modules/application";

declare var com: any;

export class ImageModal extends Common {
    constructor() {
        super();
    }

    public showModal(url: string, cb: any): void {
        var imageModal = new com.erickarroyo.imagemodal.ImageModal(app.android.foregroundActivity);
        imageModal.showModal(url, new android.content.DialogInterface.OnDismissListener({
            onDismiss: function () {
                cb();
            }
        }));
    }

}
