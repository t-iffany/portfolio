import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Skills, Projects, StarsCanvas, Attributes } from './components';

function App() {

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <Hero />
          <Projects />
          <Attributes />
          <Skills />
          <Experience />
          <About />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
