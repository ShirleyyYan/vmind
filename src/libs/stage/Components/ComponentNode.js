import Interaction from '../framework/FrameworkInteraction';

export default class ComponentNode {
    constructor ({
        id, 
        parent = '0', 
        level = 0, 
        content = {
            text: 'new node'
        }} = {}, parentElement) {

        this.id = id;
        
        this.graphcs = new PIXI.Container();

        // TODO: 根据level和主题重新处理样式
        this.graphcBackground = new PIXI.Graphics();
        this.graphcBackground.lineStyle(2, 0xCC00CC, 1);
        this.graphcBackground.beginFill(0xDDAADD, 1);
        this.graphcBackground.drawRoundedRect(0, 0, 200, 50, 10);
        this.graphcBackground.endFill();
        this.graphcs.addChild(this.graphcBackground);

        this.graphcBackgroundActive = new PIXI.Graphics();
        this.graphcBackgroundActive.lineStyle(2, 0xFF00FF, 1);
        this.graphcBackgroundActive.beginFill(0xFFCCFF, 1);
        this.graphcBackgroundActive.drawRoundedRect(0, 0, 200, 50, 10);
        this.graphcBackgroundActive.endFill();
        this.graphcs.addChild(this.graphcBackgroundActive);
        this.graphcBackgroundActive.visible = false;

        this.graphcText = new PIXI.Text(content.text);
        this.graphcs.addChild(this.graphcText);

        parentElement && parentElement.addChild(this.graphcs);

        this.graphcs.position.set(400, 400);

        this.addEvent();
    }

    addEvent () {
        Interaction.AddSelectable(this.graphcs, this.updateSelectedState.bind(this));
    }

    updateSelectedState (element, bool) {
        console.log('updating');
        this.graphcBackgroundActive.visible = !!bool;
        
    }
}