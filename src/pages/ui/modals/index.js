import React, { useState } from "react";
import {
  Card,
  Button,
  Modal,
  message,
  notification,
  Spin,
  Divider,
  Radio
} from "antd";

import ModalInsideDemo from "@pages/ui/modals/in-modal-demo";

export default function ModalsPage() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("normal");
  const [confirmLoading, setConfirmLoading] = useState(true);

  function toggleModal(modalType, event) {
    setModalType(modalType);
    setShowModal(!showModal);
  }

  function alertDifferentModal(type) {
    Modal[type]({
      title: "标题栏",
      content: "some messages...some messages...",
      maskClosable: true
    });
  }

  function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "This is a notification message",
      content: `This modal will be destroyed after ${secondsToGo} second.`
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

  return (
    <div>
      <Card className="card-wrap" title="基础 Modals">
        <Button type="primary" onClick={toggleModal.bind(this, "normal")}>
          普通弹框
        </Button>
        <Modal
          title="普通弹框"
          visible={modalType === "normal" && showModal}
          onOk={toggleModal}
          onCancel={toggleModal}
        >
          <h1> hello world</h1>
        </Modal>
        <Button type="primary" onClick={toggleModal.bind(this, "maskClosable")}>
          点击蒙层不允许关闭
        </Button>
        <Modal
          title="普通弹框"
          visible={modalType === "maskClosable" && showModal}
          onOk={toggleModal}
          onCancel={toggleModal}
          maskClosable={false}
          confirmLoading={false}
        >
          <h1> hello world</h1>
        </Modal>
        <Divider />
        <Button
          type="primary"
          onClick={e => {
            toggleModal("confirmLoading", e);
            setConfirmLoading(true);
            setTimeout(() => {
              setConfirmLoading(false);
            }, 2000);
          }}
        >
          点击加载中效果
        </Button>
        <Modal
          title="普通弹框"
          visible={modalType === "confirmLoading" && showModal}
          onOk={toggleModal}
          onCancel={toggleModal}
          maskClosable={false}
          confirmLoading={confirmLoading}
        >
          <Spin tip="Loading..." spinning={confirmLoading}>
            <h1>这里有其他东西</h1>
            <h1>这里有其他东西</h1>
            <h1>这里有其他东西</h1>
          </Spin>
        </Modal>

        <Button
          type="primary"
          onClick={e => {
            toggleModal("confirmLoading", e);
            setConfirmLoading(true);
            setTimeout(() => {
              setConfirmLoading(false);
            }, 2000);
          }}
        >
          监听确认和取消按钮
        </Button>
        <Modal
          title="普通弹框"
          visible={modalType === "confirmLoading" && showModal}
          onOk={e => {
            message.success("你点击了确认");
            toggleModal("", e);
          }}
          onCancel={e => {
            notification.open({
              message: "友好通知提醒",
              description: "你选择关闭 Modal 了"
            });
            toggleModal("", e);
          }}
          maskClosable={false}
          confirmLoading={confirmLoading}
        >
          <Spin tip="Loading..." spinning={confirmLoading}>
            <h1>这里有其他东西</h1>
            <h1>这里有其他东西</h1>
            <h1>这里有其他东西</h1>
          </Spin>
        </Modal>
        <Divider />
      </Card>
      <Card className="card-wrap" title="其他用法">
        <Button
          type="primary"
          onClick={e => {
            toggleModal("withComponent1", e);
            setConfirmLoading(true);
            setTimeout(() => {
              setConfirmLoading(false);
            }, 2000);
          }}
        >
          嵌入其他组件的Modal、自定义样式
        </Button>
        <Modal
          title="内嵌组件 ，styled 20px to Top"
          style={{ top: 20 }}
          visible={modalType === "withComponent1" && showModal}
          onOk={e => {
            message.success("你点击了确认");
            toggleModal("", e);
          }}
          onCancel={e => {
            notification.open({
              message: "友好通知提醒",
              description: "你选择关闭 Modal 了"
            });
            toggleModal("", e);
          }}
          maskClosable={false}
          confirmLoading={confirmLoading}
        >
          <Spin tip="Loading..." spinning={confirmLoading}>
            <ModalInsideDemo />
          </Spin>
        </Modal>

        <Button
          type="primary"
          onClick={e => {
            toggleModal("withComponent1", e);
            setConfirmLoading(true);
            setTimeout(() => {
              setConfirmLoading(false);
            }, 2000);
          }}
        >
          自定义页脚按钮属性
        </Button>
        <Modal
          title="内嵌组件 ，styled 20px to Top"
          style={{ top: 20 }}
          visible={modalType === "withComponent1" && showModal}
          onOk={e => {
            message.success("你点击了确认");
            toggleModal("", e);
          }}
          onCancel={e => {
            notification.open({
              message: "友好通知提醒",
              description: "你选择关闭 Modal 了"
            });
            toggleModal("", e);
          }}
          maskClosable={false}
          confirmLoading={confirmLoading}
        >
          <Spin tip="Loading..." spinning={confirmLoading}>
            <ModalInsideDemo />
          </Spin>
        </Modal>
        <Divider />
        <Radio.Group
          onChange={e => alertDifferentModal(e.target.value)}
          defaultValue="a"
        >
          <Radio.Button value="info">info</Radio.Button>
          <Radio.Button value="success">success</Radio.Button>
          <Radio.Button value="error">error</Radio.Button>
          <Radio.Button value="warning">warning</Radio.Button>
          <Radio.Button value="confirm">confirm</Radio.Button>
        </Radio.Group>
        <Divider />
        <Button type="primary" onClick={countDown}>
          可以手动更新和移除
        </Button>
        <Button type="primary" onClick={countDown}>
          倒计时
        </Button>
      </Card>
    </div>
  );
}
