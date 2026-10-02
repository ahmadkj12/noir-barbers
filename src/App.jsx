import './App.css'

function App() {
  return (
    <div className="website">

      <section id="services" className="servicesSection">

  <div className="sectionHeader">
    <p className="subtitle">WHAT WE DO</p>
    <h2>OUR SERVICES</h2>
    <p>
      Precision barbering tailored to your style.
      No rush. No shortcuts.
    </p>
  </div>

  <div className="serviceGrid">

    <div className="serviceCard">
      <span>01</span>
      <h3>Signature Haircut</h3>
      <p>
        Consultation, precision cut and professional styling.
      </p>
      <strong>£30</strong>
    </div>

    <div className="serviceCard">
      <span>02</span>
      <h3>Skin Fade</h3>
      <p>
        Clean skin fade finished with sharp detailing.
      </p>
      <strong>£35</strong>
    </div>

    <div className="serviceCard">
      <span>03</span>
      <h3>Hair & Beard</h3>
      <p>
        Full haircut combined with beard shaping and detailing.
      </p>
      <strong>£45</strong>
    </div>

    <div className="serviceCard">
      <span>04</span>
      <h3>Beard Sculpt</h3>
      <p>
        Shape, line-up and detailed beard grooming.
      </p>
      <strong>£20</strong>
    </div>

  </div>

</section>

      <nav className="navbar">
        <div className="logo">NOIR.</div>

        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bookButton">
          Book Now
        </button>
      </nav>

      <main id="home" className="heroSection">

        <p className="subtitle">
          PREMIUM BARBERING • LONDON
        </p>

        <h1>
          SHARP CUTS.
          <br />
          CLEAN CONFIDENCE.
        </h1>

        <p className="description">
          Premium cuts, fades and beard grooming designed
          around your style.
        </p>

        <div className="heroButtons">
          <button className="primaryButton">
            Book Appointment
          </button>

          <button className="secondaryButton">
            View Services
          </button>
        </div>

      </main>

    </div>
  )
}

export default App
