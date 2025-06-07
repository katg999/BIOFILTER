import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";

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
            </>
          }
        />

        {/* You can also add other routes like How It Works, etc., here later */}
      </Routes>
    </>
  );
}
