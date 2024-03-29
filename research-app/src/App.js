import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePages/Home";
import LabReviews from './pages/DynamicPages/LabReviews';
import { LoginPage } from './pages/SubmissionPages/LoginPage';
import HomeLoggedIn from './pages/HomePages/HomeLoggedIn';
import { InputSubmission } from './pages/SubmissionPages/InputSubmission';
import { SignupPage } from './pages/SubmissionPages/SignupPage';
import LabsPage from "./pages/DynamicPages/LabHome";
import BlankPage from "./pages/SubmissionPages/BlankPage";
import SchoolSubmission from './pages/SubmissionPages/SchoolSubmission';
import InputSubmissionFromReviewsPage from "./pages/SubmissionPages/InputSubmissionFromReviewsPage";
import { Auth } from './components/authentication';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HomeLoggedIn />} />
        <Route path="/labs/:selectedOption" element={<LabsPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/labs/:collegeName/:labId" element={<LabReviews />} />
        <Route path="/ReviewInput/:id" element={<InputSubmission />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blank" element={<BlankPage />} />
        <Route path="/SchoolSubmission" element={<SchoolSubmission />} />
        <Route path="/authentication" element={<Auth />} />


        {/* Include the collegeName as a URL parameter for the InputSubmissionFromReviewsPage */}
        <Route exact path="/add-review/:labId/:collegeName" element={<InputSubmissionFromReviewsPage />} />
        <Route exact path="/lab-reviews/:collegeName/:labId" element={<LabReviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
