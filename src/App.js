import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import FAQ from "./pages/mypage/FAQ";

function App() {
  return (
    <div id="frame">
      <GlobalStyle />
      <Routes>
      <Route path="/FAQ" element={<FAQ/>}></Route>
      </Routes>
    </div>
  );
}

export default App;