import { createContext, useContext, useEffect, useState } from "react";
import "./assets/css/app.css";
import Blog from "./blog/Blog";
import Brands from "./brands/Brands";
import Experience from "./experience/Experience";
import HeroBanner from "./heroBanner/HeroBanner";
import Insights from "./insights/Insights";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Strategies from "./strategies/Strategies";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <main className=" pt-40 lg:pb-14 pb-16">
        <HeroBanner />
        <Brands />
        <Strategies />
        <Experience />
        <Insights />
        <Blog />
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
