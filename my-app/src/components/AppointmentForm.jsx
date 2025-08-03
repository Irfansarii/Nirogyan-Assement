import React, { useState } from 'react';
import { Form, Button, Alert, FloatingLabel } from 'react-bootstrap';

const AppointmentForm = ({ doctor }) => {
  const [formData, setFormData] = useState({ name: '', email: '', datetime: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return submitted ? (
    <Alert variant="success" className="mt-3 text-center rounded-4 shadow-sm">
      Appointment booked successfully with <strong>{doctor.name}</strong>!
    </Alert>
  ) : (
    <Form onSubmit={handleSubmit} className="bg-light p-4 rounded-4 shadow-sm mt-3">
      <FloatingLabel controlId="formName" label="Patient Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="formEmail" label="Email Address" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="formDatetime" label="Select Appointment Time" className="mb-4">
        <Form.Select
          name="datetime"
          value={formData.datetime}
          onChange={handleChange}
          required
        >
          <option value="">Select Time</option>
          {doctor.availability.map(slot => (
            <option key={slot} value={slot}>
              {new Date(slot).toLocaleString()}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <div className="d-grid">
        <Button type="submit" variant="primary" className="rounded-pill fw-semibold">
          Book Appointment
        </Button>
      </div>
    </Form>
  );
};

export default AppointmentForm;
