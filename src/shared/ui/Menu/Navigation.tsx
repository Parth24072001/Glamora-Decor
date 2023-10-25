import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import clsx from "clsx";
import logo from "../../../assets/icons/apple-touch-icon.png";
import image1 from "../../../assets/images/1.jpg";
import image2 from "../../../assets/images/2.jpg";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import Call from "../../../assets/icons/call.svg?react";
import Location from "../../../assets/icons/location.svg?react";
import Mail from "../../../assets/icons/mail.svg?react";
import Facebook from "../../../assets/icons/facebook.svg?react";
import Youtube from "../../../assets/icons/youtube.svg?react";
import Instagram from "../../../assets/icons/instagram.svg?react";
import Linkedin from "../../../assets/icons/linkedin.svg?react";

import { useWindowSize } from "usehooks-ts";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsImage = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 0,
    opacity: 0,
  },
};

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  const { width } = useWindowSize();

  const itemIds = [0, 1, 2, 3, 4];

  const sideMenu = () => {
    if (width >= 1023) {
      return true;
    }

    return false;
  };

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <>
      {!sideMenu() && (
        <motion.ul
          variants={variants}
          className={clsx("framer_ul text-white", {
            "bg-[#30373E] !pointer-events-auto z-30": isOpen,
          })}
        >
          {itemIds.map((i) => (
            <MenuItem i={i} key={i} />
          ))}
        </motion.ul>
      )}
      {sideMenu() && (
        <motion.div
          variants={variantsImage}
          className={clsx("sidebar_image text-white", {
            "bg-[#30373E] !pointer-events-auto z-30 body-overlay": isOpen,
          })}
        >
          <div className=" relative z-10">
            <motion.div
              className={clsx("flex justify-start items-center gap-3")}
            >
              <img src={logo} alt="GD" className="sidebar_logo" />
              <div className="flex justify-start flex-col">
                <p className=" uppercase font-normal text-[20px] leading-[18px] tracking-[3px] ">
                  Glamora
                </p>
                <p className=" uppercase font-normal text-[16px] leading-2 tracking-[4px]">
                  Decors
                </p>
              </div>
            </motion.div>

            <div className="flex justify-start flex-col gap-[30px] mb-[46px] mt-[30px]">
              <div className="info">
                <Call />

                <Link to="tel:+1800229933">+91 8866679422</Link>
              </div>
              <div className="info2">
                <Location />
                <Link
                  className=" max-w-[360px]"
                  to="https://maps.app.goo.gl/Ceo6yXEzKhLBSGsp9"
                  target="_blank"
                >
                  FF 107, Dream Rise, Science City Road, Nr. Hetarth Party Plot,
                  Sola, Ahmedabad, 380059
                </Link>
              </div>
              <div className="info2">
                <Mail />

                <a href="mailto:glamoradecor@gmail.com">
                  Glamoradecor@gmail.com
                </a>
              </div>
            </div>
            <div className="flex justify-start items-center mb-[63px] gap-3">
              <div className="flex items-center justify-center bg-grey w-[35px] h-[35px] rounded-full social_icon">
                <Facebook />
              </div>
              <div className="flex items-center justify-center bg-grey w-[35px] h-[35px] rounded-full social_icon">
                <Link
                  to="https://instagram.com/glamoradecor?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <Instagram />
                </Link>
              </div>
              <div className="flex items-center justify-center bg-grey w-[35px] h-[35px] rounded-full social_icon">
                <Youtube />
              </div>
              <div className="flex items-center justify-center bg-grey w-[35px] h-[35px] rounded-full social_icon">
                <Linkedin />
              </div>
            </div>

            <div className=" h-[470px]  flex justify-center items-center gap-[10px] mb-[30px]">
              <div className=" flex flex-col justify-start items-center gap-[10px] h-full">
                <motion.div
                  initial={false}
                  animate={
                    isOpen
                      ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                      : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                  }
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={image1}
                    alt=""
                    className=" h-[260px] object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={false}
                  animate={
                    isOpen
                      ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                      : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                  }
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img src={image2} alt="" className="h-[200px] object-cover" />
                </motion.div>
              </div>
              <div className=" flex flex-col justify-start items-center gap-[10px] h-full">
                <motion.div
                  initial={false}
                  animate={
                    isOpen
                      ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                      : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                  }
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img src={image3} alt="" className="h-[200px] object-cover" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={
                    isOpen
                      ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                      : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                  }
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={image4}
                    alt=""
                    className=" h-[260px] object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <p className=" mb-[20px]">
              © Copyright 2023 DC Studio. All rights reserved.
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};
