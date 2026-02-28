import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import EventModeSelection from "./pages/EventModeSelection";
import EventsList from "./pages/EventsList";
import EventDetail from "./pages/EventDetail";
import CountdownTimer from "./components/CountdownTimer";
import GlobalSmoke from "./components/GlobalSmoke";
import CustomCursor from "./components/CustomCursor";
import Footer from "./pages/Footer";
import Location from "./pages/Location";
import Particles from "./components/Particles";
import ChatBot from "./components/Chatbot/Chatbot";
import Memories from "./pages/Memories";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockTimer = scrollY > 400;
  const hideSmoke = scrollY < window.innerHeight;

  return (
    <>
      {/* Background Effects */}
      <Particles />
      <GlobalSmoke hidden={hideSmoke} />
      <ChatBot />

      {/* Foreground */}
      <div className="main-content">
        <CustomCursor />
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CountdownTimer docked={dockTimer} />
                <About />
                <EventModeSelection />
                <Location />
                <Footer />
              </>
            }
          />

          {/* Events Pages */}
          <Route path="/events/:category" element={<EventsList />} />
          <Route
            path="/events/:category/:eventId"
            element={<EventDetail />}
          />

          {/* Memories Page */}
          <Route path="/memories" element={<Memories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;