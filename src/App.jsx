import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Strengths } from './components';

function App() {

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <Hero />
          <Works />
          <Strengths />
          <Tech />
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
