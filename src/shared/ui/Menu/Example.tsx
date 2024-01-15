import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./useDimensions";
import logo from "../../../assets/icons/apple-touch-icon.png";
import { useWindowSize } from "usehooks-ts";
import clsx from "clsx";

export const Example = () => {
  const { width } = useWindowSize();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<any>(null);
  const { height } = useDimensions(containerRef);

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
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
      >
        <div className="navbar">
          <div className="flex justify-between items-center">
            <motion.div
              className={clsx("flex justify-center items-center gap-3", {})}
              initial={{ opacity: 0, x: -400 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
              }}
            >
              <img src={logo} alt="GD" className="nav_logo" />
              <div className="flex justify-start flex-col">
                <p className=" uppercase font-normal text-[14px] leading-[18px] tracking-[3px] ">
                  Glamora
                </p>
                <p className=" uppercase font-normal text-[11px] leading-2 tracking-[4px]">
                  Decors
                </p>
              </div>
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
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
