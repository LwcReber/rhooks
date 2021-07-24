import { useState } from 'react'

interface IProps {
  closed?: (data?: any) => void;
  confirmed?: (data?: any) => void;
}

interface type  {
  visible: boolean;
  onClose: (data?: any) => void;
  onConfirm: (data?: any) => void;
  open: () => void;
  close: () => void;
}

export const useDialog = (props: IProps) => {
  // dialog 显示隐藏
  const [visible, setVisible] = useState(false)

  const { closed, confirmed } = props
  // 关闭弹框
  const onClose = (data?: any) => {
    setVisible(false)
    closed && closed(data)
  }

  // dialog确认按钮
  const onConfirm = (data?: any) => {
    setVisible(false)
    confirmed && confirmed(data)
  }

  // 打开dialog
  const open = () => {
    setVisible(true)
  }

   // 关闭dialog
   const close = () => {
    setVisible(false)
  }

  return {
    visible,
    onClose,
    onConfirm,
    open,
    close
  } as type
}