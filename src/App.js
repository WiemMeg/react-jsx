import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap/Card";
import Image from './Image';
import Article from './Article';
import Price from './Price';
import Description from './Description';
import Product from './Product';

function App() {
  const firstName=Product.Name
  return (
<div className="App">

<div className=''>
<Card style={{ width:'18rem'}}>
  <Card.Body><Image />

<Card.Title><Article/></Card.Title>
<Card.Text><Description/>
</Card.Text><Price/>
{firstName?'Hello! ${firstName}':'Hello there!'}
</Card.Body>
</Card>


</div>
</div>
  );
}

export default App;
