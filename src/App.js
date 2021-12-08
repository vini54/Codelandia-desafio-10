import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import {GlobalStyles} from "../src/Styles/Global"
import { ThemeProvider } from "styled-components";
import { MainTheme } from "./Styles/Theme";
import { Container } from "./Styles/AppStyle";
import { Home } from "./pages/Home/Home";
import { Animes } from "./pages/Animes/Animes";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import { ScrollToTop } from "./pages/ScrollTop";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
    <Container>
    <GlobalStyles />
    <Router>
      <header>
        <Link to="/"><h2>Naped</h2></Link>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/series">Séries</NavLink></li>
          <li><NavLink to="/filmes">Filmes</NavLink></li>
          <li><NavLink to="/animes">Animes</NavLink></li>
          <li><NavLink to="/games">Games</NavLink></li>
          <li><button>Minha Conta</button></li>
        </ul>
      </header>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/series" element={<Animes />} />
      <Route path="/filmes" element={<Animes />} />
      <Route path="/animes" element={<Animes />} />
      <Route path="/games" element={<Animes />} />
      <Route path="/article" element={<ArticlePage />} />
    </Routes>
    </Router>
    </Container>
    </ThemeProvider>
  );
}

export default App;