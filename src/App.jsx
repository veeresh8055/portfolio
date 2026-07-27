import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(245,247,250,1)_45%,rgba(241,245,249,1)_100%)]">
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  )
}
