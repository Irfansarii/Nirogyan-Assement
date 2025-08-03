import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Card, Badge } from 'react-bootstrap';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const { setSelectedDoctor } = useAppContext();

  const handleClick = () => {
    setSelectedDoctor(doctor);
    navigate(`/doctor/${doctor.id}`);
  };

  return (
    <Card onClick={handleClick} className="h-100 shadow-sm" style={{ cursor: 'pointer' }}>
      <Card.Img
        variant="top"
        src={doctor.image}
        alt={doctor.name}
        style={{ height: '100%', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{doctor.name}</Card.Title>
        <Card.Text>{doctor.specialization}</Card.Text>
        <Badge bg={doctor.availability.length ? 'success' : 'danger'}>
          {doctor.availability.length ? 'Available' : 'Unavailable'}
        </Badge>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
