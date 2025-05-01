"use client";

import "./Header.css";

// Import assets:
import logo from "../images/logo.svg";
import dropDownIcon from "../images/icon-arrow-down.svg"
import dropTopIcon from "../images/icon-arrow-up.svg";
import Buttons from "../Buttons/Button";
import bar from "..//images/icon-menu.svg";
import XIcon from "../images/icon-close-menu.svg"
import listIcon from "../images/icon-todo.svg";
import calenderIcon from "../images/icon-calendar.svg";
import remindersIcon from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
const Header = () => {
    let barIco = dropDownIcon;
    const showBar = () => {
        const bar = document.querySelector("ul li ul.bar");
        const toggle = document.querySelector("ul li.bar");
        if (toggle.id == "false") {
            toggle.id = "true";
        }else{
            toggle.id = "false";
        }
        if (toggle.id == "false") {
            bar?.classList.add("hidden");
        }else{
            bar?.classList.remove("hidden");
        }
    }
    


        const showBar1 = () => {
          const bar1 = document.querySelector("ul li ul.bar1");
          const toggle1 = document.querySelector("ul li.bar1");
          const bar = document.querySelector("ul li ul.bar");
          const toggle = document.querySelector("ul li.bar");
          
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
        <header className="flex justify-between align-center">
          <img src={logo.src} alt="" />
          <nav>
            <ul className="main flex justify-between align-center">
              <li className="bar" onClick={showBar}>
                features <img src={barIco.src} />
                <ul className="bar hidden">
                  <li>
                    <img src={listIcon.src} alt="" /> todo list
                  </li>
                  <li>
                    <img src={calenderIcon.src} alt="" /> calendar
                  </li>
                  <li>
                    <img src={remindersIcon.src} alt="" /> reminders
                  </li>
                  <li>
                    <img src={planning.src} alt="" /> planning
                  </li>
                </ul>
              </li>
              <li className="bar1" onClick={showBar1}>
                company <img src={barIco.src} />
                <ul className="bar1 hidden">
                  <li>history</li>
                  <li>our team</li>
                  <li>blog</li>
                </ul>
              </li>
              <li>
                <a href="">careers</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-between align-center">
            <Buttons />
          </div>
          <button
            className="bar toggle"
            id="false"
            onClick={() => {
              const nav = document.querySelector("div.right-nav");
              const rightNav = `
              <img src=${XIcon.src} alt="" />
              <ul className="main flex justify-between align-center">
                <li>
                        <a href="">
                        features <img src=${barIco.src} />
                        </a>
                        <ul>
                            <li><img src=${listIcon.src} alt="" /></li>
                            <li><img src=${calenderIcon.src} alt="" /></li>
                            <li><img src=${remindersIcon.src} alt="" /></li>
                            <li><img src=${planning.src} alt="" /></li>
                        </ul>
                    </li>
                    <li>
                                    <a href="">
                                        company <img src=${barIco.src} />
                                    </a>
                                </li>
                                <li>
                                    <a href="">careers</a>
                                </li>
                                <li>
                                    <a href="">about</a>
                                </li>
                            </ul>
              `;
              const toggle = document.querySelector(".toggle");
              if (toggle.id == "false") {
                toggle.id = "true";
              } else {
                toggle.id = "false";
                console.log(toggle.id);
              }
              if (toggle.id == "false") {
                if (nav) {
                  nav.remove();
                }
              } else {
                const div = document.createElement("div");
                if (document.body.lastChild.className == "right-nav") {
                  return;
                } else {
                  div.innerHTML = rightNav;
                  document.body.appendChild(div);
                }
              }
            }}
          >
            <img src={bar.src} alt="" />
          </button>
        </header>
      </>
    );
};
export default Header;
