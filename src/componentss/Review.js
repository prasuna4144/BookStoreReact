
import React from 'react';
import Card from 'react-bootstrap/Card';

const Location = () => {
  return (
    <div  id='ABOUT'style={{backgroundColor:"lightgrey",borderRadius:"2rem",marginTop:"2rem",marginLeft:"2rem", height:"20rem"}}>
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug " >Our Customers</h2>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>REVIEW</Card.Title>
            <Card.Text>
              A mix of concepts on React without giving a concrete base. I would love a book that shows me first the whole picture with props and state, and then drill down thru components and how they communicate.
            </Card.Text>
            <Card.Link href="/Register">BUY NOW</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>REVIEW</Card.Title>
            <Card.Text>
              A mix of concepts on React without giving a concrete base. I would love a book that shows me first the whole picture with props and state, and then drill down thru components and how they communicate.
            </Card.Text>
            <Card.Link href="/Register">BUY NOW</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>REVIEW</Card.Title>
            <Card.Text>
              A mix of concepts on React without giving a concrete base. I would love a book that shows me first the whole picture with props and state, and then drill down thru components and how they communicate.
            </Card.Text>
            <Card.Link href="/Register">BUY NOW</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>REVIEW</Card.Title>
            <Card.Text>
              A mix of concepts on React without giving a concrete base. I would love a book that shows me first the whole picture with props and state, and then drill down thru components and how they communicate.
            </Card.Text>
            <Card.Link href="/Register">BUY NOW</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Location;
