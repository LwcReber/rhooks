import React from 'react'
import { Modal, Button } from 'antd'
import { useDialog } from '../../src/dialog'
const App = () => {
  
  const dialogA = useDialog({
    confirmed (data)  {
      console.log('A的确认回调数据', data);
    }
  })
  const openA = () => {
    dialogA.open()
  }
  const submit = () => {
    dialogA.onConfirm({aa: 'aaa', c: 'cc'})
  }

  const dialogB = useDialog({})
  const openB = () => {
    dialogB.open()
  }
  return (
      <div>
        <Button onClick={openA}>modal A 点我</Button>
        <Modal title="modal A" visible={dialogA.visible} onOk={submit} onCancel={dialogA.onClose}>
          AAAAAAAA
        </Modal>
        <Button onClick={openB}>modal B 点我</Button>
        <Modal title="modal B" visible={dialogB.visible} onOk={dialogB.onConfirm} onCancel={dialogB.onClose}>
          BBBBBBBB
        </Modal>
      </div>
  )
}

export default App
