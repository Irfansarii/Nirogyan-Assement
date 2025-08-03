import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import doctors from '../data/doctors.json';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [search, setSearch] = useState('');
  

  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <Container className="mt-4 mb-4" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', backgroundImage: 'url("assets/Images/1.webp")', backgroundSize: 'cover', backgroundPosition: 'center' }}>


      <h2 className="mb-4" style={{color: "darkcyan"}}>All Available Doctors</h2>
      <SearchBar className="search" value={search} onChange={setSearch} />

      <Row>
        {filteredDoctors.map(doc => (
          <Col key={doc.id} xs={12} sm={6} md={4} data-aos="fade-right"
            data-aos-easing="ease-in-sine" className="mb-4">
            <DoctorCard doctor={{ ...doc, id: String(doc.id) }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
