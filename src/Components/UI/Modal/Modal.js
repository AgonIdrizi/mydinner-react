import React from 'react';
import { Modal as AntdModal } from 'antd';
const Modal = ({title, visible, onOk, onCancel, style, children}) => {
  return (
    <AntdModal
      title={title}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      style={style}
      centered
    >
      {children}
    </AntdModal>
  );
}

export default Modal;
