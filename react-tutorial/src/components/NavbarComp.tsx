import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import RollOutAnimation from "../pages/RollOutAnimation";
import Collapse from "../pages/Collapse";
import Contact from "../pages/Contact";
import Parallax from "../pages/Parallax";

const NavbarComp = () => {
  return (
    <>
      <Router>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/rollout-animation"}>
                  Roll-out-animation
                </Nav.Link>
                <Nav.Link as={Link} to={"/collapse"}>
                  Collapse
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>
                  Contact
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/parallax"}>
                    Parallax
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/test"}>
                    Test
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
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <>
          <Routes>
            <Route
              path="/"
              element={<div>HELLO WELCOME TO MY DEMO WEBSITE</div>}
            ></Route>
            <Route
              path="/rollout-animation"
              element={<RollOutAnimation cardText="SHIIIIIBA" />}
            />
            <Route path="collapse/" element={<Collapse />} />
            <Route path="contact/" element={<Contact />} />
            <Route path="parallax" element={<Parallax />} />
            <Route path="test" element={<div>hello</div>}></Route>
          </Routes>
        </>
      </Router>
    </>
  );
};

export default NavbarComp;
