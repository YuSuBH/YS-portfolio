import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-background text-foreground`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
          <div
            className={`transition-opacity duration-300 ${
              menuOpen ? "opacity-20" : "opacity-100"
            }`}
          >
            <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
            <Home />
            <About />
            <Projects />
            <Contact />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
