import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/home/Home.js";
import FAQ from "./pages/mypage/FAQ";
import MyPage from "./pages/mypage/MyPage";
import Adoption from "./pages/adoption/Adoption";
import AdoptDetail from "./pages/adoption/AdoptDetail";
import SignInSelect from "./pages/login/SignInSelect";
import LoginSelect from "./pages/login/LoginSelect";
import LoginForCommon from "./pages/login/LoginForCommon";
import LoginForShelter from "./pages/login/LoginForShelter";
import SignInForCommon from "./pages/login/SignInForCommon";
import SignInForShelter from "./pages/login/SignInForShelter";

function App() {
  return (
    <div id="frame">
      <GlobalStyle />
      <Routes>
        <Route path="/SignIn" element={<SignInSelect />}></Route>
        <Route path="/SignIn/ForCommon" element={<SignInForCommon />}></Route>
        <Route path="/SignIn/ForShelter" element={<SignInForShelter />}></Route>
        <Route path="/Login" element={<LoginSelect />}></Route>
        <Route path="/Login/ForCommon" element={<LoginForCommon />}></Route>
        <Route path="Login/ForShelter" element={<LoginForShelter />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/MyPage" element={<MyPage />}></Route>
        <Route path="/MyPage/FAQ" element={<FAQ />}></Route>
        <Route path="/Adoption" element={<Adoption />}></Route>
        <Route path="/Adoption/AdoptDetail" element={<AdoptDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
