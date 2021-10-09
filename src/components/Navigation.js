import React from "react";
import { useState } from "react";
import { FaDev } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Navigation = (props) => {
  const [showMenu, setshowMenu] = useState(false);

  const toggle = () => {
    setshowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container__hamburger-menu" onClick={() => props.openMenu()}></div>
        <a href="http://dev.to" className="header-container__logo">
          <FaDev />
        </a>

        <div className="header-container__search">
          <form>
            <input type="text" placeholder="Search..." aria-label="search" />
          </form>
        </div>

        <div className="header-container__right">
          <button>Write a post</button>
          <i className="hidden-search">
            <FiSearch />
          </i>
          <i>
            <BiMessageRoundedCheck />
          </i>
          <i>
            <RiNotificationLine />
          </i>
          <span onClick={toggle}>
            <img src="https://picsum.photos/200" alt="profile avatar" />
          </span>
        </div>
      </div>
      <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
        <ul>
          <li onClick={toggle}>
            <a href="/profile">
              <div className="u-name">CodeBucks</div>
              <small className="u-name-id">@codebucks</small>
            </a>
          </li>
          <li onClick={toggle}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li onClick={toggle}>
            <a href="/post">Writing a post</a>
          </li>
          <li onClick={toggle}>
            <a href="/list">Writing a list</a>
          </li>
          <li onClick={toggle}>
            <a href="/setting">Setting</a>
          </li>
          <li onClick={toggle}>
            <a href="/signout">Sign out</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
