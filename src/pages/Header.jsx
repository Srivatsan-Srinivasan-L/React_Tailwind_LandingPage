import  React from "react";
import { Sun,Moon } from "lucide-react";
import useTheme from "../context/theme";

const Header = () => {
    const { darkMode, toggleDarkMode } = useTheme();


  return (
      
  


    <div
      class="absolute top-0 left-0 z-40 flex items-center  w-full  ud-header"
    >
      <div class="container px-4 mx-auto">
        <div class="relative flex items-center  justify-between -mx-4">
          <div class="max-w-full px-4 w-60">
            <a href="" class="block w-full py-5  navbar-logo">
              <img
                src="assets/images/logo/logo-white.svg"
                alt="logo" 
                class="w-full header-logo" 
              />
            </a>
          </div>
          <div class="flex items-center justify-between w-full px-4">
            <div>
              <button
                id="navbarToggler"
                class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  class="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
              >
                <ul class="blcok lg:flex 2xl:ml-20">
                  <li class="relative group">
                    <a
                      href="#home"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                    >
                      Home
                    </a>
                  </li>
                  <li class="relative group">
                    <a
                      href="#about"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      About
                    </a>
                  </li>
                  <li class="relative group">
                    <a
                      href="#pricing"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Pricing
                    </a>
                  </li>
                  <li class="relative group">
                    <a
                      href="#team"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Team
                    </a>
                  </li>
               
                  <li class="relative group">
                    <a
                      href="#blog"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Blog
                    </a>
                  </li>
                  <li class="relative group">
                    <a
                      href="#"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Pages
                    </a>
                  </li>
                  <li class="relative group">
                    <a
                      href="#"
                      class="flex py-2 mx-8 text-base font-medium ud-menu-scroll text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      Contact
                    </a>
                  </li>
                
                </ul>
              </nav>
            </div>
            <div class="flex items-center justify-end pr-16 lg:pr-0">
            <button onClick={toggleDarkMode} className={`relative w-32 h-14 flex items-center px-2 rounded-full bg-gradient-to-r bg-amber-500 shadow-xl hover:cursor-pointer transition-all duration-300`}>
                <div className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 ${
                    darkMode ? "translate-x-16" : "translate-x-0"}`}>
                    
                    {darkMode ? (
                    <Moon size={28} className="text-blue-700" />
                    ) : (
                    <Sun size={28} className="text-yellow-500" />
                  )}
                </div>
                <div className="flex w-full justify-between items-center px-5 text-white font-semibold">
                  <Sun size={24} />
                  <Moon size={24} />
                </div>
              </button>
           
            </div>
          </div>
        </div>
      </div>
    </div>
 


    
  );
};

export default Header;
