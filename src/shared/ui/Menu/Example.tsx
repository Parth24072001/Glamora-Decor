<<<<<<< HEAD
import { useEffect, useRef } from "react";
=======
import { useRef } from "react";
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./useDimensions";
import logo from "../../../assets/icons/apple-touch-icon.png";
<<<<<<< HEAD
import { useWindowSize } from "usehooks-ts";
import clsx from "clsx";

export const Example = () => {
  const { width } = useWindowSize();
=======

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<any>(null);
  const { height } = useDimensions(containerRef);

<<<<<<< HEAD
  const menuOpen = () => {
    // if (width <= 1023) {
    toggleOpen();
    // }
  };

  useEffect(() => {
    if (width >= 1023) {
      if (isOpen === true) return toggleOpen();
    }
  }, [width]);

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add("body-overlay");
  //   } else {
  //     document.body.classList.remove("body-overlay");
  //   }
  // }, [width, isOpen]);

  return (
    <div ref={containerRef} className="px-4">
=======
  return (
    <div ref={containerRef}>
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
      >
        <div className="navbar">
          <div className="flex justify-between items-center">
<<<<<<< HEAD
            <motion.div
              className={clsx("flex justify-center items-center gap-3", {})}
              initial={{ opacity: 0, x: -400 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
              }}
            >
=======
            <div className="flex justify-center items-center gap-3">
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
              <img src={logo} alt="GD" className="nav_logo" />
              <div className="flex justify-start flex-col">
                <p className=" uppercase font-normal text-[14px] leading-[18px] tracking-[3px] ">
                  Glamora
                </p>
                <p className=" uppercase font-normal text-[11px] leading-2 tracking-[4px]">
                  Decors
                </p>
              </div>
<<<<<<< HEAD
            </motion.div>
            <div className=" flex justify-center items-center  menu_option">
              <ul className=" inline-flex menu_bar">
                <motion.li
                  initial={{ opacity: 0, y: -600 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                >
                  <span>home</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -600 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                >
                  <span>About Us</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -600 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                >
                  <span>Services</span>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, y: -600 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                >
                  <span>Contact</span>
                </motion.li>
              </ul>
            </div>

            <Navigation isOpen={isOpen} />

            <MenuToggle toggle={() => menuOpen()} isOpen={isOpen} />
=======
            </div>
            <div className=" flex justify-center items-center  menu_option">
              <ul className=" inline-flex menu_bar">
                <li>
                  <span>home</span>
                </li>
                <li>
                  <span>About Us</span>
                </li>
                <li>
                  <span>Services</span>
                </li>
                <li>
                  <span>Portfolio</span>
                </li>
                <li>
                  <span>Career</span>
                </li>
                <li>
                  <span>Blog</span>
                </li>
                <li>
                  <span>Contact</span>
                </li>
              </ul>
            </div>
            <div className="w-[100px]"></div>
            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
