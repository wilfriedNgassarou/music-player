import { AnimatePresence, motion } from "framer-motion"
import { ShuffleSVG } from "./svgs/shuffle-svg"
import { PreviousSVG } from "./svgs/previous-svg"
import { NextSVG } from "./svgs/next-svg"
import { ReplaySVG } from "./svgs/replay-svg"
import { PlaySVG } from "./svgs/play-svg"
import { Dispatch, MouseEvent, SetStateAction } from "react"
import { PauseSVG } from "./svgs/pause-svg"

interface Props {
  toggle: () => void,
  music: { title: string, artist: string, image: string },
  isPlaying: boolean,
  setIsPlaying: Dispatch<SetStateAction<boolean>>
}

export function MediumPlayer({ toggle, music, isPlaying, setIsPlaying }: Props) {
  function handleClick(e: MouseEvent<HTMLSpanElement>) {
    setIsPlaying(!isPlaying);

    e.stopPropagation();
  }

  return (
    <motion.div
      layoutId="audio-player"
      onClick={toggle} 
      className="bg-black text-white cursor-default h-56 w-56 p-2 flex flex-col justify-between"
      style={{ borderRadius: 16 }}
    >
      <section className="bg-black contrast-[0.95] rounded-xl h-28 flex items-center justify-center">
        <motion.img 
          layoutId="audio-player-image"
          src={music.image} 
          alt="Album Cover" 
          className="w-20 h-20"
          style={{ borderRadius: 8 }} 
        />
      </section>
      <div className="flex flex-col items-center ">
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
          className="text-gray-400"
          style={{ fontSize: 14, lineHeight: 1 }}
        >
          {music.artist}
        </motion.span>
      </div>
        <motion.div 
          layoutId="audio-player-controls" 
          className="h-14 flex justify-between px-4 items-center"
        >
          <span>
            <ShuffleSVG size={20} fill="rgb(156 163 175 / 0.6)" />
          </span>
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
                    key={'medium-pause'}
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    exit={{ scale: 0 }}
                    transition={{ duration: .15, type: 'spring', bounce: 0 }}
                  >
                    <PauseSVG size={24} />
                  </motion.div>
                :
                  <motion.div 
                    key="medium-play" 
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
          <span>
            <ReplaySVG size={20} fill="rgb(156 163 175 / 0.6)" />
          </span>
        </motion.div>
    </motion.div>
  )
}