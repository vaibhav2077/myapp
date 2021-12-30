import React from "react";
import { Nav, Navbar, Container, NavDropdown, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

export default function MyNavbar(props) {
  return (
    <div>
      <Navbar bg={props.mode} expand="lg" variant={props.mode}>
        <Container>
          <Navbar.Brand className="d-inline-block align-top" href="#home">
            {props.title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {/* <Link
                  to="home"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  {" "} */}
                {props.home}
                {/* </Link> */}
              </Nav.Link>
              <Nav.Link>
                {/* <Link
                  to="about"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  {" "} */}
                {props.link}
                {/* </Link> */}
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form>
                <Form.Check
                  type="switch"
                  id="darkmode-switch"
                  label="Dark Mode"
                  onClick={props.toggleMode}
                  style={{ color: props.mode == "light" ? "black" : "white" }}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
MyNavbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  link: PropTypes.string,
};
MyNavbar.defaultProps = {
  title: "Title",
  home: "Home",
  link: "Link",
};
