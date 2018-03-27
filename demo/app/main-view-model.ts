import {Observable} from 'tns-core-modules/data/observable';
import {ImageModal} from 'nativescript-image-modal';

export class HelloWorldModel extends Observable {
    public message: string;
    private imageModal: ImageModal;

    constructor() {
        super();

        this.imageModal = new ImageModal();

        setTimeout(() => {
            this.imageModal.showModal("https://orig00.deviantart.net/8a2e/f/2015/109/c/c/vertical_banner_of_the_new_ussr_by_glide08-d8q9zjn.png", () => {
                console.log('Se cerró el modal');
            });
        }, 2000);

    }
}
