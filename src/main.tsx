import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameProvider } from './utils/gameContext.tsx'
import { PlayerProvider } from './utils/playerContext.tsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Pages
// import { ErrorPage } from './pages/ErrorPage.tsx'
// import { Town } from './pages/Town.tsx'
// import { Dungeon } from './pages/Dungeon.tsx'
// import { Shop } from './pages/Shop.tsx'

// Routing to pages is not necessary at the moment.


import './assets/App.css'
import App from './App.tsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [{
//       path: '/town',
//       element: <Town />
//     },
//     {
//       path: '/dungeon',
//       element: <Dungeon />
//     },
//     {
//       path: '/shop',
//       element: <Shop />
//     }
//     ]
//   }
// ]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameProvider>
      <PlayerProvider>
        <App />
      </PlayerProvider>
    </GameProvider>
  </StrictMode>,
)
