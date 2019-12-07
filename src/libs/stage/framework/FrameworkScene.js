import SupportCheckEnv from '../Support/SupportCheckEnv';

export default class FrameworkScene {
    constructor(config) {
        let _self = this;
        this.xmindRenderMind = SupportCheckEnv();

        this.canvas = document.createElement('canvas');

        if (config.parentDom) {
            config.parentDom.appendChild(this.canvas);
        } else {
            console.error('Error');
        }

        this.xmindApp = new PIXI.Application({
            backgroundColor: 0xFFFFFF,
            autoDensity: true,
            view: this.canvas
        });

        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';

        this.rootElement = new PIXI.Container();
        this.xmindApp.stage.addChild(this.rootElement);

        this.ratio = {
            width: this.canvas.width,
            height: this.canvas.height,
            ratio: this.canvas.width / this.canvas.height
        };
        console.log(this.ratio);

        window.onresize = this.updateStageRadio.bind(this);
        this.updateStageRadio();
    }

    updateStageRadio () {
        this.rootElement.scale.x =  this.ratio.ratio / (this.getRatio() || this.ratio.ratio);
    }

    getRatio () {
        return this.canvas.offsetWidth / this.canvas.offsetHeight
    }
}