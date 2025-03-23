import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  RegisterAccount,
  Dashboard,
  Login,
  Home,
  ExpoDisplay,
  Blogs,
  Gallery,
  Careers,
  About,
  TestimonialPage,
  ContactUs,
  PrivacyPolicy,
  TermsConditions,
  ProductDisplay,
  LaserEngraving,
  DecalStickers,
  BannersFlag,
  Signs,
  PrivacySecurityFilms,
  Marketing,
  Promo,
  ElectricSigns,
  VehicleTrailer,
  IndoorSigns,
  OutdoorSigns,
  Accessories,
} from "./pages";
import { PrivateRoutes, ProtectedRoutes, Navbar, Footer } from "./components";

// Layout Component to Handle Navbar Visibility
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/create-account"];

  return (
    <>
      {/* Show Navbar only if not in hideNavbarRoutes */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expo-display" element={<ExpoDisplay />} />
          <Route path="/laser-engraving" element={<LaserEngraving />} />
          <Route path="/decals-stickers" element={<DecalStickers />} />
          <Route path="/banners-flag" element={<BannersFlag />} />
          <Route path="/signs" element={<Signs />} />
          <Route path="/privacy-security" element={<PrivacySecurityFilms />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/electric-signs" element={<ElectricSigns />} />
          <Route path="/vehicle-trailer" element={<VehicleTrailer />} />
          <Route path="/indoor-signs" element={<IndoorSigns />} />
          <Route path="/outdoor-signs" element={<OutdoorSigns />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/product/:productName" element={<ProductDisplay />} />

          {/* Protected Routes */}
          <Route
            path="/create-account"
            element={
              <ProtectedRoutes>
                <RegisterAccount />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoutes>
                <Login />
              </ProtectedRoutes>
            }
          />

          {/* Private Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
