import {Observable} from 'tns-core-modules/data/observable';
import {ImageModal} from 'nativescript-image-modal';

export class HelloWorldModel extends Observable {
    public message: string;
    private imageModal: ImageModal;

    constructor() {
        super();

        this.imageModal = new ImageModal();

        setTimeout(() => {
            this.imageModal.showModal("https://s3.amazonaws.com/uploads.hipchat.com/635619/5430738/KUxwEwM1Id5nXNY/ic_novedades_test.png", () => {
                console.log('Se cerró el modal');
            });
        }, 2000);

    }
}
