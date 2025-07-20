import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <h2 className="fw-bold text-primary mb-4">Contact Eventora</h2>
          <p className="text-muted mb-5">
            Planning something special? Reach out and let's make it unforgettable.
          </p>

          <div className="bg-white shadow rounded-4 p-4">
            <div className="mb-4 d-flex align-items-center">
              <FaEnvelope className="me-3 text-primary fs-4" />
              <div>
                <h6 className="mb-0 fw-semibold">Email</h6>
                <p className="mb-0 text-muted">hello@eventora.com</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-center">
              <FaPhone className="me-3 text-success fs-4" />
              <div>
                <h6 className="mb-0 fw-semibold">Phone</h6>
                <p className="mb-0 text-muted">+1-800-777-2025</p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <FaMapMarkerAlt className="me-3 text-danger fs-4" />
              <div>
                <h6 className="mb-0 fw-semibold">Address</h6>
                <p className="mb-0 text-muted">456 Celebration Ave, Event City, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional styling */}
      <style jsx="true">{`
        .shadow {
          transition: all 0.3s ease-in-out;
        }

        .shadow:hover {
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
        }

        h2 {
          font-size: 2.5rem;
        }

        .fs-4 {
          font-size: 1.5rem !important;
        }
      `}</style>
    </div>
  );
}
