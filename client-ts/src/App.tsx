import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
// import Homepage from './page/Home'
import Indexpage from './page/Index'
import LoginPage from './page/Login'
import TripDetailPage from './page/tripDetail'
import { ScrollToTop } from './helper'
// import UserStatusPage from './page/UserStatus'
// import LogoutPage from './page/Logout'
// import PaymentPage from './page/Payment'
// import { ProtectRoute , ScrollToTop } from './helper'
import GenrePage from './page/Genre'
// import Detailpage from './page/Detail'
import ReviewPage from './page/Review'
import HistoryPage from './page/history'
import SearchPage from './page/search'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route index element={<Indexpage />} />
        <Route path="/home" element={<Indexpage />} />
          {<Route path="/genre/:type" element={<GenrePage/>}/>}
          {/* <Route path="/detail/:id" element={<Detailpage/>}/> */}
            <Route path="/detail/:id/review" element={<ReviewPage/>}/>
            {/* <Route path="/detail/:id/payment" element={<ProtectRoute><PaymentPage/></ProtectRoute>}/> */}
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/TripDetail" element={<TripDetailPage />} />
        {/* <Route path="/userstatus" element={<ProtectRoute><UserStatusPage /></ProtectRoute>} /> */}
        {/* <Route path="/logout" element={<LogoutPage />} /> */}
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/history" element={<HistoryPage />}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App