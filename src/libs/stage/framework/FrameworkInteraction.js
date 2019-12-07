export default {
    AddSelectable: function (element, callback) {
        console.log(element);
        if (element instanceof PIXI.Container) {
            element.interactive = true;
            element.buttonMode = true;
            element.selectedState = false;
            element.on('pointerup', onClick);

            function onClick () {
                element.selectedState = !element.selectedState;
                callback(element, element.selectedState);
            }
        }
    }
};