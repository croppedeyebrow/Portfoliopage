import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import { darkTheme, lightTheme } from "./components/Themes";

//컴포넌트페이지들
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <SoundBar />
      <GlobalStyle />
      <Router basename="/Portfoliopage">
        <Routes>
          <Route path="/Portfoliopage" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
