import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { NavHashLink } from "react-router-hash-link";
import LoactionModal from "../../Pages/Components/LoactionModal";

const NavigationsBar = () => {
  return (
    <div>

      <Navbar fixed="top" bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand className="mx-auto" href="/">
            {" "}
            <Link to="/">
              <img className="img-fluid" width="150" src={logo} alt="" />
            </Link>{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto  text-center">
              <Navbar className="fw-bold" href="#home">
                Deliver To
              </Navbar>
              <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn">
                <i
                  style={{ color: "#f37032" }}
                  class="fas fa-map-marker-alt"
                ></i>{" "}
                <span>
                  Current Loaction: <b>Dhaka Cantonment </b>{" "}
                  <small>
                    <i class="fas fa-chevron-down"></i>{" "}
                  </small>{" "}
                </span>{" "}
              </button>
            </Nav>
            <Nav className="ms-auto">
              <NavHashLink to="/user_profile#user_profile">
                <span className="my_profile"> My Profile</span>
              </NavHashLink>
              <NavHashLink to="/login#login_area">
                <Button className="home-login-btn">Login</Button>
              </NavHashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoactionModal></LoactionModal>
    </div>
  );
};

export default NavigationsBar;
