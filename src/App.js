import NavRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import { Container, Header, Main } from "./App.styled";
import Footer from "./components/Footer/Footer";

function App() {
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
