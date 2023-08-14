import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/home/Home";
import Introduction from "./pages/introduction/Introduction";
import Activity from "./pages/activity/Activity";
import Notice from "./pages/notice/Notice";
import Guidance from "./pages/guidance/Guidance";
import MyPage from "./pages/mypage/MyPage";
import EditInfo from "./pages/mypage/EditInfo";
import EditPW from "./pages/mypage/EditPW";
import MyPost from "./pages/mypage/MyPost";
import Liked from "./pages/mypage/Liked";
import FAQ from "./pages/mypage/FAQ";
import FaqDetail from "./pages/mypage/FaqDetail";
import Adoption from "./pages/adoption/Adoption";
import AdoptDetail from "./pages/adoption/AdoptDetail";
import WriteAdoption from "./pages/adoption/WriteAdoption";
import Missing from "./pages/missing/Missing";
import MissingDetail from "./pages/missing/MissingDetail";
import Protection from "./pages/protection/Protection";
import ProtectDetail from "./pages/protection/ProtectDetail";
import WriteProtection from "./pages/protection/WriteProtection";
import Review from "./pages/review/Review";
import ReviewDetail from "./pages/review/ReviewDetail";


function App() {
  return (
    <div id="frame">
      <GlobalStyle />
      <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Introduction" element={<Introduction/>}></Route>
      <Route path="/Activity" element={<Activity/>}></Route>
      <Route path="/Notice" element={<Notice/>}></Route>
      <Route path="/Guidance" element={<Guidance/>}></Route>
      <Route path="/MyPage" element={<MyPage/>}></Route>
      <Route path="/MyPage/EditInfo" element={<EditInfo/>}></Route>
      <Route path="/MyPage/EditInfo/EditPW" element={<EditPW/>}></Route>  
      <Route path="/MyPage/MyPost" element={<MyPost/>}></Route>
      <Route path="/MyPage/Liked" element={<Liked/>}></Route>
      <Route path="/MyPage/FAQ" element={<FAQ/>}></Route>
      <Route path="/MyPage/FAQ/FaqDetail" element={<FaqDetail/>}></Route>
      <Route path="/Adoption" element={<Adoption/>}></Route>
      <Route path="/Adoption/AdoptDetail" element={<AdoptDetail/>}></Route>
      <Route path="/Adoption/WriteAdoption" element={<WriteAdoption/>}></Route>
      <Route path="/Missing" element={<Missing/>}></Route>
      <Route path="/Missing/MissingDetail" element={<MissingDetail/>}></Route>
      <Route path="/Protection" element={<Protection/>}></Route>
      <Route path="/Protection/ProtectDetail" element={<ProtectDetail/>}></Route>
      <Route path="/Protection/WriteProtection" element={<WriteProtection/>}></Route>
      <Route path="/Review" element={<Review/>}></Route>
      <Route path="/Review/ReviewDetail" element={<ReviewDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;