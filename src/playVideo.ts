import React, { useRef } from "react"

const usePlayVideo = () => {
  const videoRefs = useRef([])

  const playVideo = (index: number, status: 'play' | 'pause') => {
    if (videoRefs.current.length > 0) {
      // @ts-ignore
      const current: any = videoRefs.current[index]
      // 当前视频处于可以播放状态
      if (current.current.readyState < 3) {
        return
      }
      if (status === 'play') {
        current.current.currentTime = 0
        current.current?.play()
      } else {
        if (current.current) {
          current.current.currentTime = 0
          current.current.pause()
        }
      }
    }
  }

  const addVideoRef = (index: number) => {
    videoRefs.current[index] = videoRefs.current[index] || React.createRef()
  }
  return {
    videoRefs,
    playVideo,
    addVideoRef
  }
}

export default usePlayVideo
