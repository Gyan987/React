import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import './App.css'

const cards = [
  {
    title: 'Mountain Trail',
    description: 'A quiet ridge walk above the treeline.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'City Lights',
    description: 'Evening streets and warm windows.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Coastal Path',
    description: 'Wind, salt air, and a long horizon.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Forest Cabin',
    description: 'Pine needles, wood smoke, and stillness.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Desert Road',
    description: 'Open sky and a stretch of red earth.',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Night Market',
    description: 'Lanterns, spices, and late conversations.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
]

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__main">
        <header className="app__intro">
          <h1>Places worth a second look</h1>
          <p>Six cards, each with its own title, description, and photo — passed in as props.</p>
        </header>
        <div className="cards">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
