import Interaction from '../framework/FrameworkInteraction';

export default class ComponentNode {
    constructor ({
        id, 
        parent = '0', 
        level = 0, 
        x = 100,
        y = 200,
        content = {
            text: 'new node'
        }} = {}, parentElement, scene) {

        this.id = id;
        this.app = scene;
        this.level = level;

        this.width = 200 * (1 - level * 0.05);
        this.height = 50 * (1 - level * 0.05);
        console.log(level, this.width, this.height);
        
        this.graphcs = new PIXI.Container();

        // TODO: 根据level和主题重新处理样式
        this.graphcBackground = new PIXI.Graphics();
        this.graphcBackground.lineStyle(2, 0xCC00CC, 1);
        this.graphcBackground.beginFill(0xDDAADD, 1);
        this.graphcBackground.drawRoundedRect(0, 0, this.width, this.height, 10);
        this.graphcBackground.endFill();
        this.graphcs.addChild(this.graphcBackground);

        this.graphcBackgroundActive = new PIXI.Graphics();
        this.graphcBackgroundActive.lineStyle(2, 0xFF00FF, 1);
        this.graphcBackgroundActive.beginFill(0xFFCCFF, 1);
        this.graphcBackgroundActive.drawRoundedRect(0, 0, this.width, this.height, 10);
        this.graphcBackgroundActive.endFill();
        this.graphcs.addChild(this.graphcBackgroundActive);
        this.graphcBackgroundActive.visible = false;

        this.graphcText = new PIXI.Text(content.text);
        this.graphcs.addChild(this.graphcText);

        parentElement && parentElement.addChild(this.graphcs);
        
        this.graphcs.position.set(x, y);
        this.x = x;
        this.y = y;

        this.selected = false;

        this.addEvent();

        ComponentNode.NodeList.push(this);
    }

    addEvent () {
        Interaction.AddSelectable(this.graphcs, this.updateSelectedState.bind(this));
    }

    updateSelectedState (element, bool) {
        console.log('selected', this.id, !!bool);
        if (!!bool) {
            ComponentNode.setSelected(this.id);
        } else {
            ComponentNode.setSelected();
        }
    }

    setSelectedState (bool) {
        this.graphcBackgroundActive.visible = !!bool;
        this.selected = !!bool;
    }

    static setSelected (id) {
        ComponentNode.SelectedNodes = [];
        for (let i = 0; i < ComponentNode.NodeList.length; ++i) {
            if (id && id === ComponentNode.NodeList[i].id) {
                ComponentNode.NodeList[i].setSelectedState(true);
                ComponentNode.SelectedNodes.push(ComponentNode.NodeList[i]);
            } else {
                ComponentNode.NodeList[i].setSelectedState(false);
            }
        }
        console.log(ComponentNode.NodeList.length, ComponentNode.SelectedNodes[0]);
    }
}

ComponentNode.NodeList = [];
ComponentNode.SelectedNodes = [];
window.NodeList = ComponentNode.NodeList;
