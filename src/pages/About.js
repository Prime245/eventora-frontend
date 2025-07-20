import React from 'react';

export default function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary display-5">About Eventora</h2>
        <p className="lead text-muted mt-3">
          Crafting unforgettable events with creativity, precision, and passion.
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <p className="fs-5">
            <strong>Eventora</strong> is a full-service event management agency dedicated to creating extraordinary experiences. From elegant weddings to dynamic corporate events, we bring your vision to life with <span className="text-primary fw-semibold">meticulous planning</span> and <span className="text-primary fw-semibold">innovative design</span>.
          </p>
          <ul className="list-unstyled mt-4">
            <li className="mb-2">✅ Personalized Event Planning</li>
            <li className="mb-2">✅ Experienced & Creative Team</li>
            <li className="mb-2">✅ End-to-End Management</li>
            <li className="mb-2">✅ Budget-Friendly Packages</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between gap-3 flex-wrap">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="Wedding Event"
              className="about-img img-fluid rounded shadow-sm"
            />
            <img
              src="https://www.eikongraphics.co.uk/wp-content/uploads/2019/04/Spirit-Aerosytems-2018-Awards-Ceremony-corparate-event.jpg"
              alt="Corporate Event"
              className="about-img img-fluid rounded shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Optional Styles */}
      <style jsx="true">{`
        .about-img {
          height: 300px;
          width: 60%;
          object-fit: cover;
          transition: transform 0.4s ease, box-shadow 0.3s ease;
        }

        .about-img:hover {
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .about-img {
            width: 100%;
            height: 150px;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
