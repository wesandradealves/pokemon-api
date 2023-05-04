import { 
    FilterItem,
    Container,
    Text
} from './style.ts';
import Icon from '@mui/material/Icon';

function Spinner(props) {
  return (
    <Container className="d-flex align-items-center justify-content-end">
      <FilterItem className="d-flex align-items-center me-1">
        <Text>Filter by:</Text>
      </FilterItem>       
      <FilterItem className="d-flex align-items-center me-1">
        <Icon onClick={() => props.onFilter('name')} title="Alphabetical Order">sort_by_alpha</Icon>
      </FilterItem>      
      <FilterItem className="d-flex align-items-center">
        <Icon onClick={() => props.onFilter('order')} title="Order">low_priority</Icon>
      </FilterItem>      
    </Container>
  );
}

export default Spinner;