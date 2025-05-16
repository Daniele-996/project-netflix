import { Component } from "react";
import { Container, Row, Col, Image, Spinner, Alert } from "react-bootstrap";

class CreateGallery extends Component {
  state = {
    query: ["Harry Potter", "Vacanze di natale", "Indiana Jones", "Thor"],

    galleries: {},
  };

  componentDidMount() {
    this.state.query.forEach((query) => {
      this.fetchData(query);
    });
  }

  fetchData = (query) => {
    if (!query) return;

    this.setState((newState) => ({
      galleries: {
        ...newState.galleries,
        [query]: { loading: true, error: null, images: [] },
      },
    }));

    const API_KEY = "ef76adc";
    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(
      query
    )}&apikey=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          this.setState((newState) => ({
            galleries: {
              ...newState.galleries,
              [query]: { loading: false, error: null, images: data.Search },
            },
          }));
        } else {
          this.setState((newState) => ({
            galleries: {
              ...newState.galleries,
              [query]: { loading: false, error: data.Error, images: [] },
            },
          }));
        }
      })
      .catch(() => {
        this.setState((newState) => ({
          galleries: {
            ...newState.galleries,
            [query]: {
              loading: false,
              error: "Errore nella chiamata API",
              images: [],
            },
          },
        }));
      });
  };

  renderNewGallery = (query) => {
    const gallery = this.state.galleries[query] || {};
    const { images = [], loading = false, error = null } = gallery;

    return (
      <div key={query} className="mb-5">
        <h4>{query}</h4>

        {loading && (
          <div className="d-flex justify-content-center my-3">
            <Spinner animation="border" role="status" />
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        <Row xs={1} sm={2} lg={4} xl={6} className="g-3 ">
          {images.map((poster) => (
            <Col key={poster.imdbID} className="text-center">
              <Image
                src={
                  poster.Poster !== "N/A"
                    ? poster.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={poster.Title}
                fluid
                rounded
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  render() {
    return (
      <Container className="mt-3">
        {this.state.query.map((q) => this.renderNewGallery(q))}
      </Container>
    );
  }
}

export default CreateGallery;
