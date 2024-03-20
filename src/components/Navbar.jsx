import { Link } from "react-router-dom";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/img/netflix_logo.png";
import Avatar from "../assets/img/avatar.png";

const MyNavbar = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <img className="ms-5" src={Logo} id="logo" alt="Netflix" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link className="nav-link">Home</Nav.Link>
          {/* Aggiungi il Link alla pagina TV Shows */}
          <Nav.Link as={Link} to="/tv-shows" className="nav-link">
            TV Shows
          </Nav.Link>
          {/* Fine modifica */}
          <Nav.Link className="nav-link">Movies</Nav.Link>
          <Nav.Link className="nav-link">Recently Added</Nav.Link>
          <Nav.Link className="nav-link">My List</Nav.Link>
        </Nav>
        <Nav id="nav-utilities" className="d-flex align-items-center gap-1">
          <BsSearch className="navbar-icon fs-5 mx-2 text-white search " />
          <BsFillBellFill className="navbar-icon fs-5" />
          <Nav.Link>Francesco</Nav.Link>
          <NavDropdown title={<img src={Avatar} id="avatar" alt="profile" />}>
            <NavDropdown.Item className="nav-drop">Settings</NavDropdown.Item>
            <NavDropdown.Item className="nav-drop">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
