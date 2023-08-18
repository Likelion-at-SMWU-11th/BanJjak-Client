import "./App.css";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/home/Home";
import Introduction from "./pages/introduction/Introduction";
import Activity from "./pages/activity/Activity";
import Notice from "./pages/notice/Notice";
import NoticeList from "./pages/notice/NoticeList";
import N1 from "./pages/notice/noticepage/N1";
import Event from "./pages/notice/Event";
import Guidance from "./pages/guidance/Guidance";
import SelfCheck from "./pages/guidance/SelfCheck";
import Agreement from "./pages/guidance/Agreement";
import MyPage from "./pages/mypage/MyPage";
import EditInfo from "./pages/mypage/EditInfo";
import EditPW from "./pages/mypage/EditPW";
import MyPost from "./pages/mypage/MyPost";
import Liked from "./pages/mypage/Liked";
import FAQ from "./pages/mypage/FAQ";
import FaqDetail from "./pages/mypage/FaqDetail";
import Adoption from "./pages/adoption/Adoption";
import ShelterAdopt from "./pages/adoption/ShelterAdopt";
import PersonalAdopt from "./pages/adoption/PersonalAdopt";
import AdoptDetail from "./pages/adoption/AdoptDetail";
import SignInSelect from "./pages/login/SignInSelect";
import LoginSelect from "./pages/login/LoginSelect";
import LoginForCommon from "./pages/login/LoginForCommon";
import LoginForShelter from "./pages/login/LoginForShelter";
import SignInForCommon from "./pages/login/SignInForCommon";
import SignInForShelter from "./pages/login/SignInForShelter";
import Missing from "./pages/missing/Missing";
import Missed from "./pages/missing/Missed";
import Seen from "./pages/missing/Seen";
import MissingDetail from "./pages/missing/MissingDetail";
import MissingDetail2 from "./pages/missing/MissingDetail2";
import Protection from "./pages/protection/Protection";
import ProtectDetail from "./pages/protection/ProtectDetail";
import Review from "./pages/review/Review";
import AdoptReview from "./pages/review/AdoptReview";
import ReunionReview from "./pages/review/ReunionReview";
import ReviewDetail from "./pages/review/ReviewDetail";
import HomeShelter from "./pages/shelter/HomeShelter";
import ShelterPosting from "./pages/shelter/ShelterPosting";
import WriteAdoption from "./pages/writing/WriteAdoption";
import WriteProtection from "./pages/writing/WriteProtection";
import WriteReview from "./pages/writing/WriteReview";
import WriteMissing from "./pages/writing/WriteMissing";
import WriteSeen from "./pages/writing/WriteSeen";
import ShelterEditInfo from "./pages/shelter/ShelterEditInfo";
import ShelterEditPW from "./pages/shelter/ShelterEditPW";
import InquiryModal from "./pages/modal/InquiryModal";
import GuidanceModal from "./pages/modal/GuidanceModal";
import MailModal from "./pages/modal/MailModal";
import AgreeModal from "./pages/modal/AgreeModal";
import DeleteModal from "./pages/modal/DeleteModal";
import ShelterPostsList from "./pages/shelter/ShelterPostsList";
import { findByLabelText } from "@testing-library/react";
import AdoptDetail2 from "./pages/adoption/AdoptDetail2";

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
        <Route path="/HomeShelter" element={<HomeShelter />}></Route>
        <Route
          path="/HomeShelter/ShelterPosting"
          element={<ShelterPosting />}
        ></Route>
        <Route
          path="/HomeShelter/ShelterPostsList"
          element={<ShelterPostsList />}
        ></Route>
        <Route
          path="/HomeShelter/ShelterEditInfo"
          element={<ShelterEditInfo />}
        ></Route>
        <Route
          path="/HomeShelter/ShelterEditInfo/ShelterEditPW"
          element={<ShelterEditPW />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/MyPage" element={<MyPage />}></Route>
        <Route path="/MyPage/FAQ" element={<FAQ />}></Route>
        <Route path="/Adoption" element={<Adoption />}>
          <Route
            path="/Adoption/ShelterAdopt"
            element={<ShelterAdopt />}
          ></Route>
          <Route
            path="/Adoption/PersonalAdopt"
            element={<PersonalAdopt />}
          ></Route>
        </Route>
        <Route
          path="/Adoption/AdoptDetail/:postId"
          element={<AdoptDetail />}
        ></Route>
        <Route
          path="/Adoption/AdoptDetail2/:postId"
          element={<AdoptDetail2 />}
        ></Route>
        <Route
          path="/Adoption/WriteAdoption"
          element={<WriteAdoption />}
        ></Route>
        <Route path="/Missing" element={<Missing />}>
          <Route path="/Missing/Missed" element={<Missed />}></Route>
          <Route path="/Missing/Seen" element={<Seen />}></Route>
        </Route>

        <Route
          path="/Missing/MissingDetail/:postId"
          element={<MissingDetail />}
        ></Route>
        <Route
          path="/Missing/MissingDetail2/:postId"
          element={<MissingDetail2 />}
        ></Route>
        <Route
          path="/Missing/Missed/WriteMissing"
          element={<WriteMissing />}
        ></Route>
        <Route path="/Missing/Seen/WriteSeen" element={<WriteSeen />}></Route>

        <Route path="/Protection" element={<Protection />}></Route>

        <Route
          path="/Protection/ProtectDetail/:postId"
          element={<ProtectDetail />}
        ></Route>
        {/* <Route
          path="/Protection/ProtectDetail"
          element={<ProtectDetail />}
        ></Route> */}
        <Route
          path="/Protection/WriteProtection"
          element={<WriteProtection />}
        ></Route>
        <Route path="/Review" element={<Review />}>
          <Route path="/Review/AdoptReview" element={<AdoptReview />}></Route>
          <Route
            path="/Review/ReunionReview"
            element={<ReunionReview />}
          ></Route>
        </Route>
        <Route path="/Review/ReviewDetail" element={<ReviewDetail />}></Route>
        <Route path="/Review/WriteReview" element={<WriteReview />}></Route>

        <Route path="/Introduction" element={<Introduction />}></Route>
        <Route path="/Activity" element={<Activity />}></Route>

        <Route path="/Notice" element={<Notice />}>
          <Route path="/Notice/NoticeList" element={<NoticeList />}></Route>
          <Route path="/Notice/NoticeList/N1" element={<N1 />}></Route>
          <Route path="/Notice/Event" element={<Event />}></Route>
        </Route>

        <Route path="/Guidance" element={<Guidance />}>
          <Route path="/Guidance/SelfCheck" element={<SelfCheck />}></Route>
          <Route path="/Guidance/Agreement" element={<Agreement />}></Route>
        </Route>
        <Route path="/MyPage/EditInfo" element={<EditInfo />}></Route>
        <Route path="/MyPage/EditInfo/EditPW" element={<EditPW />}></Route>
        <Route path="/MyPage/MyPost" element={<MyPost />}></Route>
        <Route path="/MyPage/Liked" element={<Liked />}></Route>

        <Route
          path="/Adoption/AdoptDetail/InquiryModal"
          element={<InquiryModal />}
        ></Route>
        <Route
          path="/Adoption/AdoptDetail/GuidanceModal"
          element={<GuidanceModal />}
        ></Route>
        <Route path="/MyPage/FAQ/MailModal" element={<MailModal />}></Route>
        <Route
          path="/Guidance/Agreement/AgreeModal"
          element={<AgreeModal />}
        ></Route>
        <Route path="/DeleteModal" element={<DeleteModal />}></Route>
      </Routes>
    </div>
  );
}

export default App;
