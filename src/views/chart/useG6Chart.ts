import { onMounted, ref } from 'vue';
import { Graph, registerNode } from '@antv/g6';

// const imageUrl = `https://pic1.zhimg.com/80/v2-04aabe210371262d7a8df460b0ab784e_720w.png`;

const useG6Chart = () => {
  const domRef = ref<HTMLDivElement>();
  onMounted(() => {
    registerDomNode();
    startRender();
  });
  /**
   * 注册dom节点
   */
  const registerDomNode = () => {
    registerNode('dom-node', {
      drawShape: (cfg: any, group) => {
        const stroke = cfg.style ? cfg.style.stroke || '#5B8FF9' : '#5B8FF9';
        const shape = group?.addShape('dom', {
          attrs: {
            width: cfg.size[0],
            height: cfg.size[1],
            html: `
            <div id=${
              cfg.id
            } class='dom-node' style="background-color: #fff; border: 2px solid ${stroke}; border-radius: 5px; width: ${
              cfg.size[0] - 5
            }px; height: ${cfg.size[1] - 5}px; display: flex;">
              <div style="height: 100%; width: 33%; background-color: #CDDDFD">
                <img alt="" style="line-height: 100%; margin-left: 7px;" src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Q_FQT6nwEC8AAAAAAAAAAABkARQnAQ" width="20" height="20" />  
              </div>
              <span style="margin:auto; padding:auto; color: #5B8FF9">${cfg.label}</span>
            </div>
              `,
          },
          draggable: true,
        });
        return shape as any;
      },
    });
  };

  /** 数据 */
  const data = {
    nodes: [
      {
        id: 'node1',
        x: 10,
        y: 100,
        label: 'Homepage',
      },
      {
        id: 'node2',
        x: 200,
        y: 100,
        label: 'Subpage',
      },
    ],
    edges: [
      {
        source: 'node1',
        target: 'node2',
      },
    ],
  };
  const startRender = () => {
    const g = new Graph({
      container: domRef.value as HTMLDivElement, // 图的 DOM 容器
      fitView: true, // 是否开启画布自适应。开启后图自动适配画布大小。
      fitViewPadding: 100, // 画布的padding值

      defaultNode: {
        size: [30, 30],
        type: 'circle',
      },
      // 设置为true，启用 redo & undo 栈功能
      enabledStack: true,
      modes: {
        default: ['drag-node', 'drag-canvas'],
      },
    });
    g.data(data); // 初始化的图数据，是一个包括 nodes 数组和 edges 数组的对象

    g.render(); // 渲染图
  };

  return {
    domRef,
  };
};

export default useG6Chart;
