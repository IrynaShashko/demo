import { useEffect, useState } from "react";
import NavRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import { Container, Header, Main } from "./App.styled";
import Footer from "./components/Footer/Footer";

function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  const handlePageLoad = () => {
    setPageLoaded(true);
  };
  useEffect(() => {
    window.addEventListener("load", handlePageLoad);
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
  return (
    <div>
      <Header>
        <Container>
          <NavBar />
        </Container>
      </Header>
      <Main>
        <NavRoutes />
      </Main>
      {isPageLoaded && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
