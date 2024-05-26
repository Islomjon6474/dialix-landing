import React, { useEffect, useState } from "react";
import cx from "classnames";

const Dashboard = ({ children }: { children: any }) => {
  const [expandedMenu, setExpandedMenu] = useState(true);

  useEffect(() => {
    //   Add window resize event listener
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setExpandedMenu(true);
      } else {
        setExpandedMenu(false);
      }
    });

    //   Remove event listener
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 1024) {
          setExpandedMenu(true);
        }
      });
    };
  }, []);

  return (
    <div className="flex justify-between">
      <div className="fixed w-fit h-svh z-20">
        <nav
          className={cx("sidebar px-2.5 py-3.5", {
            close: !expandedMenu,
          })}
        >
          <div className="relative">
            <div className="flex items-center">
              <span className="image">
                <img src="logo.png" alt="logo" />
              </span>
              <div className="text flex flex-col">
                <span className="name">DialixAI</span>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between h-[calc(100%-3.438rem)]">
            <div className="mt-10">
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-home-alt icon"></i>
                    <span className="text nav-text">Dashboard</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-phone-call icon"></i>
                    <span className="text nav-text">Conversations</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-content">
              <li className="">
                <a href="#">
                  <i className="bx bx-log-out icon"></i>
                  <span className="text nav-text">Logout</span>
                </a>
              </li>
            </div>
            <i
              className="bx bx-chevron-right toggle"
              onClick={() => setExpandedMenu(!expandedMenu)}
            ></i>
          </div>
        </nav>
      </div>

      <div
        className={cx(
          "fixed z-10 bg-white transition-all duration-300 ease-in",
          {
            "w-[calc(100%-15.625rem)] ml-[15.625rem]": expandedMenu,
            "w-[calc(100%-5.5rem)] ml-[5.5rem]": !expandedMenu,
          },
        )}
      >
        <div className="flex w-full items-center justify-between px-2.5 py-5">
          <div>Dashboard</div>
          <div>Language selector</div>
        </div>
      </div>

      <div
        className={cx("w-full h-[1500px] transition-all duration-300 ease-in", {
          "ml-[15.625rem]": expandedMenu,
          "ml-[5.5rem]": !expandedMenu,
        })}
      >
        <div className="home">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
