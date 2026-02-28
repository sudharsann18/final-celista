import { useNavigate, useLocation } from "react-router-dom";
import PillNav from "./PillNav";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (item) => {
    // If it's anchor scroll inside home
    if (item.href.startsWith("#")) {
      // If not already on home page, go home first
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Route navigation
      navigate(item.href);
    }
  };

  return (
    <PillNav
      logo={logo}
      logoAlt="Celista Logo"
      items={[
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Events", href: "#events" },
        { label: "Location", href: "#location" },
        { label: "Memories", href: "/memories" }, // ✅ New Page
      ]}
      onItemClick={handleNavigation}
      baseColor="#000000"
      pillColor="#ffffff"
      pillTextColor="#000000"
      hoveredPillTextColor="#ffffff"
      initialLoadAnimation={false}
    />
  );
};

export default Navbar;