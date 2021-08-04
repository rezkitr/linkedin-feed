import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption title="Me" onClick={onLogout} avatar={true} />
      </div>
    </div>
  );
}

export default Header;
