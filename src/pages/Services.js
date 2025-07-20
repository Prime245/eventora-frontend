import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaClock, FaDollarSign, FaInfoCircle } from 'react-icons/fa';

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      name: "Wedding Planning",
      image: "https://www.weddingsutra.com/images/wedding-images/blog-images/mosaic-events-oman/mosaic-events-oman-img1.webp",
      fee: "Starts at $2000",
      time: "2 - 6 months",
      description: "From venue selection to guest coordination and decoration, we handle every detail of your big day."
    },
    {
      name: "Corporate Events",
      image: "https://balloonsbytommy.com/images/corporate/c1.webp",
      fee: "Custom Packages",
      time: "1 week to 3 months",
      description: "Professional organization of conferences, seminars, product launches, and team-building events."
    },
    {
      name: "Birthday Parties",
      image: "https://hizonscatering.com/wp-content/uploads/2022/06/events-venue-1",
      fee: "Starts at $500",
      time: "1 - 2 weeks",
      description: "Fun, creative, and customized birthday celebrations for all ages with themes, games, and decor."
    },
  ];

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold display-4 text-primary">Our Services</h2>
      <div className="row">
        {services.map((s, idx) => (
          <div key={idx} className="col-md-6 col-lg-4 mb-4">
            <div
              className="card shadow-sm service-card h-100 border-0"
              onClick={() => handleCardClick(s)}
              style={{ cursor: 'pointer', overflow: 'hidden', transition: 'all 0.3s ease' }}
            >
              <img
                src={s.image}
                className="card-img-top service-img"
                alt={s.name}
                style={{ height: '240px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title text-danger fw-bold fs-5">{s.name}</h5>
                <p className="card-text text-muted small">
                  Tailored {s.name.toLowerCase()} services to fit your vision and budget.
                </p>
                <div className="d-flex justify-content-between text-secondary mt-3">
                  <span><FaDollarSign className="me-1" />{s.fee}</span>
                  <span><FaClock className="me-1" />{s.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              <FaInfoCircle className="me-2 text-primary" />
              {selectedService.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedService.image}
              alt={selectedService.name}
              className="img-fluid mb-3 rounded"
            />
            <p><strong>Fee:</strong> {selectedService.fee}</p>
            <p><strong>Planning Time:</strong> {selectedService.time}</p>
            <p>{selectedService.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Custom CSS */}
      <style jsx="true">{`
        .service-img {
          transition: transform 0.4s ease;
        }

        .service-card:hover .service-img {
          transform: scale(1.05);
        }

        .service-card:hover {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .card-title {
          transition: color 0.3s ease;
        }

        .service-card:hover .card-title {
          color: #dc3545;
        }
      `}</style>
    </div>
  );
}
