import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar__brand" href="#home">
        First App
      </a>
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
