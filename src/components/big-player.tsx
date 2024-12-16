import { AnimatePresence, motion } from "framer-motion"
import { PreviousSVG } from "./svgs/previous-svg"
import { PlaySVG } from "./svgs/play-svg"
import { NextSVG } from "./svgs/next-svg"
import { Dispatch, MouseEvent, SetStateAction } from "react"
import { PauseSVG } from "./svgs/pause-svg"

interface Props {
  toggle: () => void,
  music: { title: string, artist: string, image: string },
  isPlaying: boolean,
  setIsPlaying: Dispatch<SetStateAction<boolean>>
}

export function BigPlayer({ toggle, music, isPlaying, setIsPlaying }: Props) {
  function handleClick(e: MouseEvent<HTMLSpanElement>) {
    setIsPlaying(!isPlaying);

    e.stopPropagation();
  }

  return (
    <motion.div
      layoutId="audio-player"
      onClick={toggle} 
      className="bg-black text-white cursor-default h-36 w-64 p-2 flex justify-between gap-1"
      style={{ borderRadius: 16 }}
    >
      <motion.img 
        layoutId="audio-player-image"
        src={music.image} 
        alt="Album Cover" 
        className="h-full aspect-square"
        style={{ borderRadius: 12 }} 
      />
      <section className="flex-grow flex flex-col justify-between">
        <div className="flex flex-col pt-2 items-center ">
          <motion.span 
            key="big-title"
            layoutId="audio-player-title"
            layout="position"
            style={{ lineHeight: 1 }} 
          >
            {music.title}
          </motion.span>
          <motion.span
            key="big-artist"
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
          className="h-10 flex items-center justify-center gap-2"
        >
          <motion.span layoutId="audio-player-previous-button">
            <PreviousSVG size={20} fill="rgb(156 163 175 / 0.6)" />
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
                    key={'big-pause'}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }} 
                    exit={{ scale: 0 }}
                    transition={{ duration: .15, type: 'spring', bounce: 0 }}
                  >
                    <PauseSVG size={24} />
                  </motion.div>
                :
                  <motion.div 
                    key="big-play" 
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
            <NextSVG size={20} fill="rgb(156 163 175 / 0.6)" />
          </motion.span>
        </motion.div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .15 }} 
            className="h-6 flex items-center text-xs px-2 font-sans font-light"
          >
            <span>0:00</span>
            <div 
              className="flex h-0.5 mx-1 rounded-3xl bg-gray-400/60 flex-grow" 
            />
            <span>2:33</span>
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.div>
  )
}