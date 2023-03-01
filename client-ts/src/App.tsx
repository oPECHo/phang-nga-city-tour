import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
// import Homepage from './page/Home'
import Indexpage from './page/Index'
import LoginPage from './page/Login'
import LogoutPage from './page/Logout'
import RegisterPage  from './page/Register'
import TripDetailPage from './page/tripDetail'
import { ScrollToTop } from './helper'
import UserStatusPage from './page/Userstatus'
// import LogoutPage from './page/Logout'
// import PaymentPage from './page/Payment'
// import { ProtectRoute , ScrollToTop } from './helper'
import GenrePage from './page/Genre'
import ReviewPage from './page/Review'
import HistoryPage from './page/history'
import ProfilePage from './page/profilePage'



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Indexpage />} />
        <Route path="/home" element={<Indexpage />} />
        {<Route path="/genre/:type" element={<GenrePage />} />}
        {<Route path="/TripDetailPage/:id" element={<TripDetailPage/>}/>}
        <Route path="/TripDetailPage/:id/review" element={<ReviewPage />} />
        {/* <Route path="/detail/:id/payment" element={<ProtectRoute><PaymentPage/></ProtectRoute>}/> */}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Logout" element={<LogoutPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/TripDetail" element={<TripDetailPage />} />
        {<Route path="/userstatus" element={<UserStatusPage />} /> }
        {/* <Route path="/logout" element={<LogoutPage />} /> */}
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App