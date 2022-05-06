import React from "react";
import usePlayVideo from '../../src/playVideo'


const App = () => {
  const list = [
    {
      src: 'https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4',
      poster: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img'
    },
    {
      src: 'https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4',
      poster: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img'
    },
    {
      src: 'https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4',
      poster: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img'
    }
  ]
  const {
    videoRefs,
    playVideo,
    addVideoRef
  } = usePlayVideo()
  addVideoRef(0)
  

  return (
    <div>
      <div>
        <h2>单个使用</h2>
        <button onClick={() => playVideo(0, 'play')}>play</button>
        <button onClick={() => playVideo(0, 'pause')}>pause</button>
        <div>
          <video style={{width: '400px'}} ref={videoRefs.current[0]}
            src="https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4"
            loop
            poster="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOEcdM.img"
            data-object-fit="true"
            muted
          >抱歉，你的浏览器不支持内嵌视频
            </video>
        </div>
      </div>
      <div>
        <h2>视频列表</h2>
        {
          list.map((item, iindex) => {
          // 为了与单个使用的栗子区分开，所以+1
          addVideoRef(iindex + 1)
          return (
            <div key={iindex + 1}>
              <div>
                <button onClick={() => playVideo(iindex + 1, 'play')}>play</button>
                <button onClick={() => playVideo(iindex + 1, 'pause')}>pause</button>
              </div>
              <video ref={videoRefs.current[iindex +1]}
                style={{width: '400px'}}
                poster={item.poster}
                src={item.src}
                loop
                data-object-fit="true"
                muted
              >抱歉，你的浏览器不支持内嵌视频
                </video>
            </div>
          )
          })
        }
      </div>
    </div>
  )
}

export default App