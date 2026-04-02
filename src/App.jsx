import Navbar from "./components/Navbar";
import './App.css'
import Profile from "./components/Profile";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Profile />
      <About />
      <Stack />
      <Projects />
    </div>
  )
}

export default App
