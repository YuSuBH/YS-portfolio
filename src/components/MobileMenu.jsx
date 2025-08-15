export const MobileMenu = ({ menuOpen, setmenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10, 10, 10, 0.95)] z-60 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setmenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setmenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 hover:text-blue-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setmenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 delay-75 hover:text-blue-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => setmenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 delay-150 hover:text-blue-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setmenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 delay-225 hover:text-blue-500 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Contact
      </a>
    </div>
  );
};
