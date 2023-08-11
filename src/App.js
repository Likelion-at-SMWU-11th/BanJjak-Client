import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/home/Home.js";
import FAQ from "./pages/mypage/FAQ";
import MyPage from "./pages/mypage/MyPage";
import Adoption from "./pages/adoption/Adoption";
import AdoptDetail from "./pages/adoption/AdoptDetail";
import Missing from "./pages/missing/Missing";
import MissingDetail from "./pages/missing/MissingDetail";
import Protection from "./pages/protection/Protection";
import ProtectDetail from "./pages/protection/ProtectDetail";
import Review from "./pages/review/Review";
import ReviewDetail from "./pages/review/ReviewDetail";


function App() {
  return (
    <div id="frame">
      <GlobalStyle />
      <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/MyPage" element={<MyPage/>}></Route>
      <Route path="/MyPage/FAQ" element={<FAQ/>}></Route>
      <Route path="/Adoption" element={<Adoption/>}></Route>
      <Route path="/Adoption/AdoptDetail" element={<AdoptDetail/>}></Route>
      <Route path="/Missing" element={<Missing/>}></Route>
      <Route path="/Missing/MissingDetail" element={<MissingDetail/>}></Route>
      <Route path="/Protection" element={<Protection/>}></Route>
      <Route path="/Protection/ProtectDetail" element={<ProtectDetail/>}></Route>
      <Route path="/Review" element={<Review/>}></Route>
      <Route path="/Review/ReviewDetail" element={<ReviewDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;