import loader from '../../assets/imgs/loader.gif';

import { 
    Container
} from './style.ts';

function Spinner(props) {
  return (
    <Container img={loader} className="spinner"/>
  );
}

export default Spinner;