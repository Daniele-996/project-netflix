import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg" bg="bg-dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="src\assets\logo.png"
              alt="Logo"
              style={{ width: "100px", height: "55px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link className="fw-bold active" href="#">
                Home
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                TV Shows
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                Movies
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                Recently Added
              </Nav.Link>
              <Nav.Link className="fw-bold" href="#">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3 text-white">
              <i className="bi bi-search"></i>
              <div className="fw-bold">KIDS</div>
              <i className="bi bi-bell"></i>
              <i className="bi bi-person-circle"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row className="row align-items-center">
        <Col className="col-md-6 d-flex align-items-center">
          <h2 className=" me-4">TV Shows</h2>
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Comedy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Thriller
                </a>
              </li>
            </ul>
          </div>
        </Col>

        <Col className="col-md-6 d-flex justify-content-end">
          <i className="bi bi-grid icons me-3"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </Col>
      </Row>
    </>
  );
};

export default MyNavbar;
