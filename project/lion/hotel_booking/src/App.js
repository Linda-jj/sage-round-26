import "./App.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import About from "./components/About/About";
import Activity from "./components/Activity/Activity";
import GusestsReview from "./components/GusteReview/GusetsReview";
import Contact from "./components/contact/Contact";
import HotellList from "./components/HotelList/HotellList";
import HotelDetails from "./screens/HotelDetails";
import RoomsContextProvider from "./contex/RoomsContext";

export const backendUrl = "http://localhost:7000";

export default function App() {
  return (
    <RoomsContextProvider>
      <NavBar />

      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <HotellList />
              <About />
              <Activity />
              <GusestsReview />
              <Contact />
            </>
          }
        />

        {/* Hotel details page alone */}
        <Route path="/room/:id" element={<HotelDetails />} />
      </Routes>

      <Footer />
    </RoomsContextProvider>
  );
}
