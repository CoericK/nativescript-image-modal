var ImageModal = require("nativescript-image-modal").ImageModal;
var imageModal = new ImageModal();

describe("greet function", function() {
    it("exists", function() {
        expect(imageModal.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(imageModal.greet()).toEqual("Hello, NS");
    });
});