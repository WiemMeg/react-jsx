import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 const Carte = () => {
   return (
     <Card style={{ width: "18rem" }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>carte florale</Card.Title>
         <Card.Text>
           On vous a réuni plus de 110 variétés de fleures médicinales
         </Card.Text>
         <Button variant="primary">choisir</Button>
       </Card.Body>
     </Card>
   );
 }

export default Carte;