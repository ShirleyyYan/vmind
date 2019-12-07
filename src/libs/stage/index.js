import FrameworkScene from './framework/FrameworkScene.js';
import ComponentNode from './Components/ComponentNode.js';

let xmindScene;
let xmindStage = (function () {

    let xmindNodeList = [];

    function GenerateNodes() {
    }

    function AddNode() {

    }

    /**
     * CreateStage 创建场景
    */
    function CreateStage (config) {
        if (!xmindScene)  {
            xmindScene = new FrameworkScene({parentDom: config.parentDom});
            // 新建文件
            let rootNode = new ComponentNode({id: '1'}, xmindScene.rootElement, xmindScene);
        }
        // TODO: 重新处理文件初始化
        return xmindScene;
    }

    /**
     * GetSelectedNode 获取当前被选中的对象
     */
    function GetSelectedNode () {
        return ComponentNode.SelectedNodes;
    }

    /**
     * 添加子节点
     */
    function AddChildNode () {
        let parent = ComponentNode.SelectedNodes[0];
        if (parent) {
            let node = new ComponentNode({
                id: parent.id + '_0',
                level: parent.level + 1,
                x: parent.x + 100,
                y: parent.y + 100
            }, xmindScene.rootElement, xmindScene);
            ComponentNode.setSelected(node.id);
        }
    }

    return {
        CreateStage,
        GetSelectedNode,
        AddChildNode
    };
})();

export default xmindStage;