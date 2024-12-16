import { AnimatePresence, motion } from "framer-motion"
import { PreviousSVG } from "./svgs/previous-svg"
import { PlaySVG } from "./svgs/play-svg"
import { NextSVG } from "./svgs/next-svg"
import { Dispatch, MouseEvent, SetStateAction } from "react"
import { PauseSVG } from "./svgs/pause-svg"

interface Props {
  toggle: () => void,
  isPlaying: boolean,
  music: { title: string, artist: string, image: string },
  setIsPlaying: Dispatch<SetStateAction<boolean>>
}

export function SmallPlayer({ toggle, music, isPlaying, setIsPlaying }: Props) {
  function handleClick(e: MouseEvent<HTMLSpanElement>) {
    setIsPlaying(!isPlaying);

    e.stopPropagation();
  }

  return (
    <motion.div 
      layoutId="audio-player"
      onClick={toggle} 
      className="bg-black text-white cursor-default h-14 w-64 p-2 flex justify-between"
      style={{ borderRadius: 12 }}
    >
    <motion.img 
      layoutId="audio-player-image"
      src={music.image} 
      alt="Album Cover" 
      className="w-10 h-10"
      style={{ borderRadius: 6 }} 
    />
      <div className="flex w-[90px] flex-col justify-center">
        <motion.span 
          key="small-title"
          layout="position"
          layoutId="audio-player-title"
          style={{ lineHeight: 1 }} 
        >
          {music.title}
        </motion.span>
        <motion.span
          key="small-artist"
          layoutId="audio-player-artist"
          layout="position"
          style={{ lineHeight: 1, fontSize: 14 }}
          className="text-gray-400" 
        >
          {music.artist}
        </motion.span>
      </div>
      <motion.div 
        layoutId="audio-player-controls" 
        className="h-full w-24 flex justify-between items-center"
      >
        <motion.span layoutId="audio-player-previous-button">
          <PreviousSVG size={18} fill="rgb(156 163 175 / 0.6)" />
        </motion.span>
        <motion.span
          onClick={handleClick} 
          layoutId="audio-player-play-button" 
          className="bg-red-500 p-2 rounded-full cursor-pointer"
        >
          <AnimatePresence initial={false} mode="wait">
            {
              isPlaying ?
              <motion.div 
                key="small-pause"
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                exit={{ scale: 0 }}
                transition={{ duration: .15, type: 'spring', bounce: 0 }}
              >
                <PauseSVG size={24} />
              </motion.div>
              :
                <motion.div
                  key="small-play" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  exit={{ scale: 0 }}
                  transition={{ duration: .15, type: 'spring', bounce: 0 }}
                >
                  <PlaySVG size={24} />
                </motion.div>
            }
          </AnimatePresence>
        </motion.span>
        <motion.span layoutId="audio-player-next-button">
          <NextSVG size={18} fill="rgb(156 163 175 / 0.6)" />
        </motion.span>
      </motion.div>
    </motion.div>
  )
}