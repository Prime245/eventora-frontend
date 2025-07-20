// src/components/BookingForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Event booking submitted:", data);

    try {
      const response = await fetch('https://eventora-44qf.onrender.com/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success("🎉 Booking successful!");
        reset();
      } else {
        toast.error("❌ Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error("❌ Booking submission error:", err);
      toast.error("⚠️ An error occurred. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      {/* Name */}
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your full name"
          {...register("name", { required: "Name is required" })}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Email & Phone */}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email"
                }
              })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="e.g. +1 234 567 8901"
              {...register("phone", {
                required: "Phone number is required",
                minLength: { value: 10, message: "Enter a valid phone number" }
              })}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      {/* Address */}
      <Form.Group className="mb-3">
        <Form.Label>Event Location</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Enter event venue or address"
          {...register("address", { required: "Address is required" })}
          isInvalid={!!errors.address}
        />
        <Form.Control.Feedback type="invalid">
          {errors.address?.message}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Service Type & Date */}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Event Type</Form.Label>
            <Form.Select {...register("service", { required: true })}>
              <option value="">Select event type</option>
              <option value="Wedding Planning">Wedding Planning</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Engagement or Baby Shower">Engagement/Baby Shower</option>
              <option value="Private Party or Gala">Private Party/Gala</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Preferred Event Date</Form.Label>
            <Form.Control
              type="date"
              {...register("date", { required: true })}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Time Slot */}
      <Form.Group className="mb-4">
        <Form.Label>Preferred Time Slot</Form.Label>
        <Form.Select {...register("time", { required: true })}>
          <option value="">Select time</option>
          <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
          <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
          <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
        </Form.Select>
      </Form.Group>

      {/* Submit Button */}
      <Button type="submit" variant="success" disabled={isSubmitting} className="w-100">
        {isSubmitting ? 'Submitting...' : 'Submit Booking'}
      </Button>
    </Form>
  );
}
