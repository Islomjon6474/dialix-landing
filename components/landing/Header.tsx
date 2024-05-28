import React, { useEffect, useState, useRef } from "react";
import { observer } from "mobx-react";
import Link from "next/link";
import Button from "@/components/Button";
import throttle from "lodash/throttle";

export type NavItem = {
  title: string;
  to: string;
};

const Header = observer(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sectionMode, setSectionMode] = useState("light");
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const st = window.scrollY;
      setIsScrolled(st > 10);
    }, 100); // Adjust throttle time as needed

    const sections = document.querySelectorAll(".observe-section");

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSectionMode(
                  entry.target.classList.contains("dark") ? "dark" : "light",
              );
            }
          });
        },
        { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
      handleScroll.cancel();
    };
  }, []);

  const navItems: NavItem[] = [
    { title: "Product", to: "/#intro" },
    { title: "Templates", to: "/#components" },
    { title: "Customers", to: "/#customers" },
    { title: "Resources", to: "/#cards" },
  ];

  return (
      <>
        <div
            ref={headerRef}
            className={`w-screen fixed top-0 left-0 font-inter transition-bg duration-300 ease-in z-[1000] ${
                isScrolled
                    ? "bg-white bg-opacity-80 backdrop-blur-3xl"
                    : "bg-transparent"
            }`}
        >
          <div className="items-center w-full justify-between py-[20px] px-[30px] flex gap-2">
            <div className="shrink w-full font-bold text-xl grow-0">
              Dialix AI
            </div>
            <div className="m-0 hidden sm:flex items-center rounded-[6px] lg:gap-16 sm:gap-8">
              {navItems.map((nav, idx) => (
                  <div key={idx} className="flex items-center">
                    <Link
                        href={nav.to}
                        className="flex items-center gap-1 group hover:underline"
                        title={nav.title}
                        scroll={true}
                    >
                      <span>{nav.title}</span>
                    </Link>
                  </div>
              ))}
            </div>
            <div className="w-full flex gap-2 justify-end">
              <Button variant={"white"}>Sign In</Button>
            </div>
          </div>
        </div>
      </>
  );
});

export default Header;
