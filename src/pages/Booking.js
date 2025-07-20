// src/pages/Booking.js
import React from 'react';
import BookingForm from '../components/BookingForm';
import '../index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Booking() {
  return (
    <div className="booking-page min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="container">
        <div className="row bg-white rounded-4 shadow-lg overflow-hidden animate__animated animate__fadeIn">

          {/* Left Side - Illustration */}
          <div className="col-lg-6 d-none d-lg-block p-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
              alt="Event Booking Illustration"
              className="img-fluid h-100 w-100"
              style={{
                objectFit: 'cover',
                backgroundColor: '#f0f8ff'
              }}
            />
          </div>

          {/* Right Side - Booking Form */}
          <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
            <div className="text-center mb-4">
              <h2 className="text-danger fw-bold display-5">Book Your Event</h2>
              <p className="text-muted fs-6">Tell us what you're planning, and we’ll bring your vision to life.</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <style jsx="true">{`
        .booking-page {
          background: linear-gradient(to right, #e8f0ff, #ffffff);
        }

        @media (max-width: 768px) {
          .booking-page {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
