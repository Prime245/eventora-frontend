import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Carousel Section */}
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <div
              className="d-block w-100 position-relative text-white text-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '70vh',
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.6)' }}></div>
              <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-3 fw-bold text-light">Welcome to Eventora</h1>
                <p className="lead fs-4">Bringing Your Vision to Life, One Event at a Time</p>
                <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
                  <Link to="/services" className="btn btn-outline-warning btn-lg px-4">Our Services</Link>
                  <Link to="/booking" className="btn btn-success btn-lg px-4">Plan Your Event</Link>
                  <Link to="/about" className="btn btn-outline-info btn-lg px-4">About Us</Link>
                  <Link to="/contact" className="btn btn-outline-light btn-lg px-4">Get in Touch</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="4000">
            <div
              className="d-block w-100 position-relative text-white text-center"
              style={{
                backgroundImage: `url('https://www.eventsparadise.com/images/2024/03/20/Event-Planning.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '70vh',
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.6)' }}></div>
              <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-3 fw-bold text-light">Unforgettable Experiences</h1>
                <p className="lead fs-4">Making every event a masterpiece</p>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="4000">
            <div
              className="d-block w-100 position-relative text-white text-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1531058020387-3be344556be6')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '70vh',
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.6)' }}></div>
              <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-3 fw-bold text-light">Tailored Just for You</h1>
                <p className="lead fs-4">Personalized planning for every celebration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Info Section */}
      <div className="container py-5">
        <h2 className="text-center text-primary mb-4">Why Choose Eventora?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-stars display-4 text-success"></i>
            <h5 className="mt-3">Creative Excellence</h5>
            <p>We design memorable experiences tailored to your unique style and goals.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-calendar2-check display-4 text-warning"></i>
            <h5 className="mt-3">Seamless Coordination</h5>
            <p>From concept to execution, we ensure every detail runs smoothly.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-people display-4 text-info"></i>
            <h5 className="mt-3">Experienced Team</h5>
            <p>Our event specialists bring years of expertise in weddings, corporate events, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
