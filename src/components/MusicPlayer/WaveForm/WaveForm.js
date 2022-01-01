import { useState, useRef, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'
import WaveSurfer from 'wavesurfer.js'
const WaveForm = ({ song_url }) => {
  const [playing, setPlaying] = useState(false)
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)

  const handlePlayPause = () => {
    setPlaying(!playing)
    if (wavesurfer.current) {
      wavesurfer.current.playPause()
    }
  }
  useEffect(() => {
    if (song_url !== '') {
      if (waveformRef.current) {
        const settings = {
          container: waveformRef.current,
          waveColor: 'transparent',
          progressColor: 'white',
          cursorColor: 'white',
          barWidth: 10,
          barRadius: 10,
          responsive: true,
          height: 75,
          normalize: true,
        }
        wavesurfer.current = WaveSurfer.create(settings)
        wavesurfer.current.load(song_url)
        wavesurfer.current.on('ready', function () {
          wavesurfer.current.play()
          setPlaying(true)
        })

        wavesurfer.current.on('finish', () => {
          setPlaying(false)
        })
      }
    }
    return () => {
      console.log('destroying wavesurfer instance')
      if (wavesurfer.current) wavesurfer.current.destroy()
    }
  }, [song_url])

  return (
    <>
      <div
        className="container-fluid px-0 w-75 my-4 position-relative"
        style={{ height: 75, maxWidth: '500px' }}
      >
        <div ref={waveformRef} style={{ maxWidth: 500 }}></div>
        <div
          className="position-absolute w-100 bg-white"
          style={{
            height: '2px',
            top: '50%',
          }}
        ></div>
      </div>
      <div onClick={handlePlayPause} className="pb-5">
        <FeatherIcon icon={playing ? 'pause' : 'play'} fill="white" size={36} />
      </div>
    </>
  )
}

export default WaveForm
