import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardItem = ({ modernArt }) => {
  const { name, id, button, img } = modernArt;
  return (
    <>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card className="bg-danger">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <span>
              <Card.Title className="text-light text-start">{name}</Card.Title>
              <Link to={`/order/${id}`}>
              <Button className="text-end" variant="outline-warning">{button}</Button>{' '}
              </Link>
              </span>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CardItem;
