import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/home/Home.js";
import FAQ from "./pages/mypage/FAQ";
import MyPage from "./pages/mypage/MyPage";

function App() {
  return (
    <div id="frame">
      <GlobalStyle />
      <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/FAQ" element={<FAQ/>}></Route>
      <Route path="/MyPage" element={<MyPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;