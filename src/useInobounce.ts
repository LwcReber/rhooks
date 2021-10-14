import inobounce from 'inobounce'
import { useEffect } from 'react'
// ios,ipad 禁止页面回弹效果
const userInobounce = () => {
  useEffect(() => {
    const u = navigator.userAgent
    if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
      inobounce.enable()
    }
    return () => {
      inobounce.disable()
    }
  }, [])
}

export default userInobounce