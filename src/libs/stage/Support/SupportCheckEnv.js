export default function () {
    let type = "WebGL";
    if(!PIXI.utils.isWebGLSupported()){
        type = "canvas";
    }

    PIXI.utils.sayHello(type);
    return type;

}