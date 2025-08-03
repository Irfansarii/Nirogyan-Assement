import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AppointmentForm from '../components/AppointmentForm';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiArrowLeft } from 'react-icons/fi';

const DoctorProfile = () => {
  const { selectedDoctor } = useAppContext();
  const navigate = useNavigate();

  if (!selectedDoctor) return <p>Doctor not found</p>;

  return (
    <Container className="my-5 position-relative">
      <Button
        variant="outline-secondary"
        className="float-end m-3 rounded-pill px-4 py-1"
        onClick={() => navigate('/')} 
      >
        <FiArrowLeft size={18} /> Back
      </Button>

      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Img
              variant="top"
/*               src={`/${selectedDoctor.image}`} */
            src={`${process.env.PUBLIC_URL}/${selectedDoctor.image}`}
              alt={selectedDoctor.name}
              className="rounded-top-4"
              style={{ height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/doctors/default.jpg';
              }}
            />
            <Card.Body>
              <Card.Title className="fw-bold fs-4 mb-2">
                {selectedDoctor.name}
              </Card.Title>
              <Card.Text className="text-muted mb-3">
                {selectedDoctor.specialization}
              </Card.Text>
              <AppointmentForm doctor={selectedDoctor} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorProfile;
