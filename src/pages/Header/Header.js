import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="danger"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={HashLink} to="/#home">
          Kalla Kendra
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-end">
              <Nav.Link className="text-light" as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" as={HashLink} to="/cards#cards">
                Cards
              </Nav.Link>
              {user?.displayName ? (
                <Button className="mr-2 text-light" onClick={logOut} variant="light">
                  Logout
                </Button>
              ) : (
                <Nav.Link className="text-light" as={HashLink} to="/login#login">
                  Login
                </Nav.Link>
              )}
            </Nav>
            <Navbar.Text className="text-light">
            Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
