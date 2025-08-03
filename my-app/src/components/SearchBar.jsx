import { Form } from 'react-bootstrap';

const SearchBar = ({ value, onChange }) => (
  <Form.Control
    type="text"
    placeholder="Search doctors..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="mb-4"
  />
);


export default SearchBar;