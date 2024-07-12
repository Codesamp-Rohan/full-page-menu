import { useState } from "react";
import "./App.css";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="bg-[#182A2A] nippo3 w-screen h-screen relative text-[#E2CB97]">
        <div
          className={`fixed flex flex-col p-10 overflow-hidden justify-between w-screen h-screen bg-[#000] duration-[800ms] ${
            openMenu
              ? `translate-y-0 rounded-none`
              : `translate-y-[-140%] rounded-full pointer-events-none`
          }`}>
          <nav className="flex justify-between">
            <h1>aww.wards</h1>
            <button type="button" onClick={() => setOpenMenu(!openMenu)}>
              close
            </button>
          </nav>
          <div className="flex flex-col text-[2rem] md:text-[4rem] gap-[2rem]">
            <div className="h-[60px] overflow-hidden relative">
              <a
                className={`absolute ease-in-out duration-200 delay-[950ms] translate-y-[-50%] ${
                  openMenu ? `top-[50%]` : `top-[-80%]`
                }`}
                href="#">
                MENU ONE
              </a>
            </div>
            <div className="h-[60px] overflow-hidden relative">
              <a
                className={`absolute ease-in-out duration-200 delay-[950ms] translate-y-[-50%] ${
                  openMenu ? `top-[50%]` : `top-[-80%]`
                }`}
                href="#">
                MENU 2
              </a>
            </div>
            <div className="h-[60px] overflow-hidden relative">
              <a
                className={`absolute ease-in-out duration-200 delay-[950ms] translate-y-[-50%] ${
                  openMenu ? `top-[50%]` : `top-[-80%]`
                }`}
                href="#">
                MENU THREE
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <a href="https://instagram.com/aww.wards">Instagram</a>
            <a href="https://github.com/codesamprohan">GitHub</a>
          </div>
        </div>
        <nav className="nippo3 p-10 flex justify-between">
          <h1>aww.wards</h1>
          <button type="button" onClick={() => setOpenMenu(!openMenu)}>
            menu
          </button>
        </nav>
      </div>
    </>
  );
}

export default App;
