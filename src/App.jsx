import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";
import DayLight from "./components/DayLight";
import Fund from "./components/Fund";
import Choose from "./components/Choose";
import Ready from "./components/Ready";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Display />
              <DayLight />
              <Fund />
              <Choose />
              <Ready />
              <Footer />
            </>
          }
        />

        {/* You can also add other routes like How It Works, etc., here later */}
      </Routes>
    </>
  );
}
