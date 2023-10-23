import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./useDimensions";
import logo from "../../../assets/icons/apple-touch-icon.png";

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
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<any>(null);
  const { height } = useDimensions(containerRef);

  return (
    <div ref={containerRef}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
      >
        <div className="navbar">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <img src={logo} alt="GD" className="nav_logo" />
              <div className="flex justify-start flex-col">
                <p className=" uppercase font-normal text-[14px] leading-[18px] tracking-[3px] ">
                  Glamora
                </p>
                <p className=" uppercase font-normal text-[11px] leading-2 tracking-[4px]">
                  Decors
                </p>
              </div>
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
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
