import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SearchPage from './views/search-page'
import TripDetailPage from './views/trip-detail-page'
import PaymentPage from './views/payment-page'
import HistoryPage from './views/history-page'
import Home from './views/home'
import TripDetailPageMobileDetails from './views/trip-detail-page-mobile-details'
import LoginPage from './views/login-page'
import CommentPage from './views/comment-page'
import ProfilePage from './views/profile-page'
import YourBookingPage from './views/your-booking-page'
import PaymentSuccess from './views/payment-success'
import RegisterPage from './views/register-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={SearchPage} exact path="/search-page" />
        <Route component={TripDetailPage} exact path="/trip-detail-page" />
        <Route component={PaymentPage} exact path="/payment-page" />
        <Route component={HistoryPage} exact path="/history-page" />
        <Route component={Home} exact path="/" />
        <Route
          component={TripDetailPageMobileDetails}
          exact
          path="/trip-detail-page-mobile-details"
        />
        <Route component={LoginPage} exact path="/login-page" />
        <Route component={CommentPage} exact path="/comment-page" />
        <Route component={ProfilePage} exact path="/profile-page" />
        <Route component={YourBookingPage} exact path="/your-booking-page" />
        <Route component={PaymentSuccess} exact path="/payment-success" />
        <Route component={RegisterPage} exact path="/register-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
