import React, { ReactNode, useEffect, useState, useRef } from "react";
import { observer } from "mobx-react";
import Link from "next/link";
import Button from "@/components/Button";

export type NavItem = {
  title: string;
  to: string;
};

const Header = observer(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [textColor, setTextColor] = useState("text-black");

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let st = window.scrollY;

      if (st > lastScrollTop && st > 10) {
        setIsScrolled(true);
      } else if (st < lastScrollTop && st < 10) {
        setIsScrolled(false);
      }

      setLastScrollTop(st); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const sections = document.querySelectorAll(".observe-section");
    console.log(sections, "sections");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(
              entry.target.classList,
              "entry",
              entry.target.classList.contains("dark"),
            );
            if (entry.target.classList.contains("dark")) {
              setTextColor("text-white");
            } else {
              setTextColor("text-black");
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems: NavItem[] = [
    {
      title: "Product",
      to: "",
    },
    {
      title: "Templates",
      to: "",
    },
    {
      title: "Customers",
      to: "",
    },
    {
      title: "Resources",
      to: "",
    },
  ];

  return (
    <>
      <div
        ref={headerRef}
        className={`w-screen fixed top-0 left-0 font-inter transition-bg duration-300 ease-in z-[1000] bg-transparent ${
          isScrolled
            ? "bg-black bg-opacity-10 backdrop-blur-3xl"
            : "bg-transparent"
        } ${textColor}`}
      >
        <div className="items-center w-full justify-between py-[20px] px-[30px] flex gap-2">
          <Link href="/" className="shrink w-full font-bold text-xl grow-0">
            Dialix
          </Link>
          <div className="m-0 hidden sm:flex items-center rounded-[6px] lg:gap-16 sm:gap-8">
            {navItems.map((nav, idx) => {
              return (
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
              );
            })}
          </div>
          <div className="w-full flex gap-2 justify-end">
            <Button variant={"white"}>Sign In</Button>
            {/*<Button variant={"primary"}>Sign Up</Button>*/}
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
