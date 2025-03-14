import { Nav } from "./components/navbar"
import './App.css'
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
    <header>
        <Nav />
    </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default App
