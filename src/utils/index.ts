import { Modal } from 'ant-design-vue';

export const confirm = ({ title = '提示', content = '是否确认' } = {}) => {
  return new Promise<void>((resolve, reject) => {
    Modal.confirm({
      title,
      content,
      onOk() {
        resolve();
      },
      onCancel() {
        reject();
      },
    });
  });
};
