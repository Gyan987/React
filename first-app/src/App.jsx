import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Cards from './components/Card.jsx'

function App() {


  return (
    <>
      <Navbar />
      <div className="card">
        <Cards title="Card 1" description="I am the first card." />
        <Cards title="Card 2" description="I am the second card." />
        <Cards title="Card 3" description="I am the third card." />
        <Cards title="Card 4" description="I am the fourth card." />
        <Cards title="Card 5" description="I am the fifth card." />
        <Cards title="Card 6" description="I am the sixth card." />
      </div>
      <Footer />
    </>
  )
}

export default App
