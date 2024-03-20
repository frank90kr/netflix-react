import "./App.css";
import MyNavbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Movies from "./components/Movies.jsx";
import TVShows from "./components/TVShows.jsx"; // Importa il componente TVShows
import MyFooter from "./components/Footer.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Header />
      <Container fluid>
        <Routes>
          {/* Definisci ciascuna rotta utilizzando <Route> */}

          <Route path="/tv-shows" element={<TVShows />} />
        </Routes>

        <Row>
          <Col>
            <Movies title="Marvel" category="Marvel" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Movies title="Batman" category="Marvel" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Movies title="The walking dead" category="The Walking Dead" />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
