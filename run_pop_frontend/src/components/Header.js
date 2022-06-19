import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  // STATE WHICH WE WILL USE TO TOGGLE THE MENU ON HAMBURGER BUTTON PRESS
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
      <nav className="flex justify-between flex-wrap content-center bg-red-900 p-4 sticky top-0">
        <div className="flex items-center text-white mr-6">
            <Link to="/">
                <span className="font-semibold text-xl tracking-tight">Run Pop</span>
            </Link>
        </div>
        <div className="block lg:hidden">
          <button
              className="flex items-center px-2 py-1 border rounded text-amber-200 border-amber-400 hover:text-white hover:border-white"
              onClick={() => setToggleMenu(!toggleMenu)}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
          </button>
        </div>
        <div className={`animate-fade-in-down w-full ${toggleMenu ? "block" : "hidden"} flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div className="text-sm lg:flex">
                <a href={"https://github.com/milsman2/run_pop"} target={"_blank"} rel={"noreferrer"}
                    className="block mt-4 lg:inline-block lg:mt-0 mx-4 text-white">
                    Git Repo
                </a>
            </div>
        </div>
      </nav>
  );
}

export default Header