"use client";
// import styles:
import "../../layout/scss/Header/Header.css";
import "../../layout/responsive/header/mobile/HeaderMob.css";
// Import assets:
import logo from "../../images/logo.svg";
import dropDownIcon from "../../images/icon-arrow-down.svg";
import dropTopIcon from "../../images/icon-arrow-up.svg";
import Buttons from "../Buttons/Button";
import bar from "../../images/icon-menu.svg";
import XIcon from "../../images/icon-close-menu.svg";
import listIcon from "../../images/icon-todo.svg";
import calenderIcon from "../../images/icon-calendar.svg";
import remindersIcon from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";
const Header = () => {
  let barIco = dropDownIcon;
  const showBar = () => {
    const bar = document.querySelector("div.bar");
    const toggle = document.querySelector("ul li.bar");
    if (toggle?.id == "false") {
      toggle.id = "true";
      if (bar) {
        bar.classList.add("hidden");
      }
    }else{
      if (bar) {
        bar.classList.remove("hidden");
      }
      if (toggle) {
        toggle.id = "false";
      }
    }
    if (toggle?.id == "false") {
      barIco = dropTopIcon;
    } else {
      barIco = dropDownIcon;
    }
  };
  const showBar1 = () => {
    const bar1 = document.querySelector("ul li ul.bar1");
    const toggle1 = document.querySelector("ul li.bar1");
    const bar = document.querySelector("ul li ul.bar");
    if (toggle1.id == "false") {
      toggle1.id = "true";
    } else {
      toggle1.id = "false";
    }
    if (toggle1.id == "false") {
      bar?.classList.add("hidden");
      barIco = dropDownIcon;
      bar1?.classList.add("hidden");
    } else {
      bar?.classList.add("hidden");
      barIco = dropTopIcon;
      bar1?.classList.remove("hidden");
    }
    bar?.classList.add("hidden");
  };
  return (
    <>
      <header className="kumbh-sans-400 flex justify-between align-center">
        <div className="right flex flex-start align-center">
          <img src={logo.src} alt="" />
          <nav>
            <ul className="main flex justify-between align-center">
              <li className="bar" onClick={showBar}>
                <p>features</p>
                <img src={barIco.src} />
                <div className="bar hidden">
                  <div>
                    <img src={listIcon.src} alt="" />
                    <span>todo list</span>
                  </div>
                  <div>
                    <img src={calenderIcon.src} alt="" />
                    <span>calendar</span>
                  </div>
                  <div>
                    <img src={remindersIcon.src} alt="" />
                    <span>reminders</span>
                  </div>
                  <div>
                    <img src={planning.src} alt="" />
                    <span>planning</span>
                  </div>
                </div>
              </li>
              <li className="bar1" onClick={showBar1}>
                company <img src={barIco.src} />
                <div className="bar1 hidden">
                  <span>history</span>
                  <span>our team</span>
                  <span>blog</span>
                </div>
              </li>
              <li>
                <a href="">careers</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between align-center">
          <Buttons />
        </div>
        <button
          className="bar toggle"
          id="false"
          onClick={() => {
            console.log("clicked");
          }}
        >
          <img src={bar.src} alt="" />
        </button>
      </header>
    </>
  );
};
export default Header;
