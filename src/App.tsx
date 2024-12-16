import { useState } from "react"
import { SmallPlayer } from "./components/small-player";
import { BigPlayer } from "./components/big-player";
import { MediumPlayer } from "./components/medium-player";

function App() {
  const states = ['small', 'big', 'medium'] as const
  const [activeState, setActiveState] = useState<typeof states[number]>(states[0])

  const [isPlaying, setIsPlaying] = useState(false) ;

  const music = {
    artist: 'Omah Lay',
    title: 'reason',
    image: '/cover.webp'
  }

  function toggle() {
    const index = states.indexOf(activeState)!;

    const isLastIndex = (states.length - 1) == index ;

    if(isLastIndex) return setActiveState(states[0])
    
    setActiveState(states[index + 1]);
  }

  return (
    <section className="w-full h-dvh flex items-center justify-center font-medium">
      {
        activeState == 'small' && (
          <SmallPlayer 
            music={music}
            toggle={toggle} 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )
      }
      {
        activeState == 'big' && (
          <BigPlayer
            music={music}
            toggle={toggle} 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )
      }
      {
        activeState == 'medium' && (
          <MediumPlayer
            music={music}
            toggle={toggle} 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )
      }
    </section>
  )
}

export default App
