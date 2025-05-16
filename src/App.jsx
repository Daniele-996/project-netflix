import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import CreateGallery from "./components/CreateGallery";

function App() {
  return (
    <>
      <MyNavbar />
      <CreateGallery />
      <Footer />
    </>
  );
}

export default App;
