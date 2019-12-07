import FrameworkScene from './framework/FrameworkScene.js';
import ComponentNode from './Components/ComponentNode.js';


var xmindStage = (function () {
    let xmindScene;
    let xmindNodeList = [];

    function GenerateNodes() {
    }

    function AddNode() {

    }

    /**
     * CreateStage 创建场景
    */
    function CreateStage (config) {
        xmindScene = new FrameworkScene({parentDom: config.parentDom});
        
        // 新建文件
        let rootNode = new ComponentNode({id: '1'}, xmindScene.rootElement);

        // TODO: 重新处理文件初始化

        return xmindScene;
    }

    return {
        CreateStage
    };
})();

export default xmindStage;