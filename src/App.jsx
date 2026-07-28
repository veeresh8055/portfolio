import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import SplashCursor from "./components/SplashCursor"

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(245,247,250,1)_45%,rgba(241,245,249,1)_100%)]">
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />
      <Navbar />
      <main className="mb-1.5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  )
}
