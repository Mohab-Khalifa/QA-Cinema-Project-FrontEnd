import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  // toggles the menu dropdown when using small screens
  function toggleMenu() {
    const navLinks = document.querySelector("nav-link");
    navLinks.forEach(element => element.classList.toggle("show"));
  }

  return (
    <div className='App'>
      <header>
        <h1>QA CINEMAS</h1>
      </header>

      <nav id="navbar">
          <Link id="toggle" to="#" onClick={toggleMenu}>Menu</Link>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/listingsgallery">Listings Gallery</Link>
          <Link className="nav-link" to="/gettingthere">Getting There</Link>
          <Link className="nav-link" to="/classifications">Classifications</Link>
          <Link className="nav-link" to="/ticketbooking">Ticket Booking</Link>
          <Link className="nav-link" to="/newreleases">New Releases</Link>
          <Link className="nav-link" to="/contactus">Contact Us</Link>
      </nav>

      <Outlet/>
    </div>
  );
}

export default App;
