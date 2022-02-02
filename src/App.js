import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import TC from "./Pages/TC/TC";
import Privacy from "./Pages/Privacy/Privacy";
import ContactUs from "./Pages/ContactUs/ContactUs";
import CancellationAndRefundPolicy from "./Pages/CancellationAndRefundPolicy/CancellationAndRefundPolicy";
import Faq from "./Pages/Faq/Faq";
import Apps from "./Pages/Apps/Apps";
import Resturent from "./Pages/Resturent/Resturent";
import MarchentLogin from "./Pages/MarchentLogin/MarchentLogin";
import RiderPage from "./Pages/RiderPage/RiderPage";
import MerchantSignup from "./Pages/Merchant/MerchantSignup";
import MyCart from "./Pages/MyCart/MyCart";
import Login from "./Pages/UserLoginRegister/Login";
import CodeFromSMS from "./Pages/UserLoginRegister/CodeFromSMS/CodeFromSMS";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UserAddress from "./Pages/UserProfile/UserAddress";
import OldOrder from "./Pages/UserProfile/OldOrder";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import AllFoods from "./Pages/AllFoods/AllFoods";
import AllResturent from "./Pages/AllResturent/AllResturent";
import NavigationsBar from "./Shared/NavigationsBar/NavigationsBar";
import Footer from "./Shared/NavigationsBar/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationsBar></NavigationsBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resturant" element={<Resturent />} />
          <Route path="/merchant" element={<MarchentLogin />} />
          <Route path="/raider-page" element={<RiderPage />} />
          <Route path="/join-merchant" element={<MerchantSignup />} />
          <Route path="/All-foods" element={<AllFoods />} />
          <Route path="/All-resturrens" element={<AllResturent />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TC />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route
            path="/cancellationAndRefundPolicy"
            element={<CancellationAndRefundPolicy />}
          />
          <Route path="/faq" element={<Faq />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/login" element={<Login />} />
          <Route path="/code_from_sms" element={<CodeFromSMS />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/user_address" element={<UserAddress />} />
          <Route path="/old_order" element={<OldOrder />} />
          <Route path="/track_order" element={<TrackOrder />} />
      
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

      {/*cls
      


Website Pages Design;
1. Home
2. all food
3. restaurants
4. all restuarants
5. Cart
6. Order-successful
8. join-rider
9. join-merchants
17. Modal Design

7. user-profile
10. login
11. track-Order
16. Apps

12. TERMS AND CONDITIONS
13. PRIVACY POLICY
14. About US
15. contact-us

      */}
    </div>
  );
}

export default App;
