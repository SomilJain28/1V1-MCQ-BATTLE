import { Menu } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Urls } from "../../constant/Urls";
import AuthContext from "../../contexts/auth.context.js";
import { ClearAll } from "../../services/cookie/authToken.cookie.js";

const Navbar = () => {
  const { isLoggedInUser, setIsLoggedInUser } = useContext(AuthContext); 
  const navigate = useNavigate(); 
  const [currentSelectedNavItem, setCurrentSelectedNavItem] = useState(null); 
  const location = useLocation(); 

  const [navItems, setNavItems] = useState(Initial_Nav_Items); 

  useEffect(() => {
    setNavItems(
      Initial_Nav_Items.filter((item) => {
        if (isLoggedInUser) {
          return item.showAfterLogin; 
        }
        return !item.isprotected; 
      })
    );

    if (isLoggedInUser) {

      setNavItems((prev) => [
        ...prev,
        {
          label: (
            <div
              onClick={() => {
                ClearAll(); 
                setIsLoggedInUser(null); 
                navigate(Urls.Login()); 
              }}
              className="px-4"
            >
              Logout
            </div>
          ),
          style: { marginLeft: "auto" }, 
          key: "/logout",
          isprotected: true,
          showAfterLogin: true,
        },
      ]);
    }
  }, [isLoggedInUser]);

  useEffect(() => {
   
    const path = location.pathname;
    const navItem = Initial_Nav_Items.find((item) => path === item.key);
    if (navItem) {
      setCurrentSelectedNavItem([navItem.key]);
    }
  }, [location.pathname, isLoggedInUser]); 

  return (
    <header className="border-b border-gray-300">
      <div className="container mx-auto mt-3">
        <Menu
          mode="horizontal"
          selectedKeys={currentSelectedNavItem}
          items={navItems}
          className="border-b-0"
        />
      </div>
    </header>
  );
};

export default Navbar;


const Initial_Nav_Items = [
  {
    label: (
      <Link to={Urls.Home()} className="p-4">
        Home
      </Link>
    ),
    key: Urls.Home(),
    isprotected: false, 
    showAfterLogin: true, 
  },
  {
    label: (
      <Link to={Urls.Mcqs.Mcqs()} className="p-4">
        Mcqs
      </Link>
    ),
    key: Urls.Mcqs.Mcqs(),
    isprotected: true, 
    showAfterLogin: true, 
  },
  {
    label: (
      <Link to={Urls.Login()} className="p-4">
        Login
      </Link>
    ),
    key: Urls.Login(),
    style: { marginLeft: "auto" }, 
    isprotected: false, 
    showAfterLogin: false, 
  },
  {
    label: (
      <Link to={Urls.Signup()} className="p-4">
        Signup
      </Link>
    ),
    key: Urls.Signup(),
    isprotected: false, 
    showAfterLogin: false,
  },
];
