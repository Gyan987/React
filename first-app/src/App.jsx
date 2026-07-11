import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Cards from './components/Card.jsx'

function App() {


  return (
    <>
      <Navbar />
      <div className="card">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer />
    </>
  )
}

export default App
