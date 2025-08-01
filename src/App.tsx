import { GameScreen } from "./components/GameScreen"
import { SpriteGallery } from "./components/SpriteGallery"
import { useState } from "react"

function App() {
  const [showGallery, setShowGallery] = useState(false)
  return (
    <main>
      {!showGallery && (
        <>
          <button className='gallerybtn' onClick={() => setShowGallery(true)}>
            Show Sprite Gallery    
          </button>
          <GameScreen />
        </>
      )}
      {
        showGallery && (
          <>
          <button className='gallerybtn' onClick={() => setShowGallery(false)}>
            Hide Sprite Gallery    
          </button>
          <SpriteGallery/>
          </>

        )
        } 

    </main>
  )
}

export default App

// <>
//   <header>
//     <>Just another roguelike</>
//   </header>
//   <main>
//   </main>
// </>
// <div id='sprite-gallery'>
//   {
//     !showGallery && (
//       <button onClick={() => setShowGallery(true)}>
//         Show Sprite Gallery
//       </button>

//     )

//   }
//   {
//     showGallery && (
//       <>
//         <button onClick={() => setShowGallery(false)}>
//           Hide Sprite Gallery
//         </button>
//         <SpriteGallery />
//       </>
//     )
//   }
// </div>