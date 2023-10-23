import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItems = [
  "home ",
  "About Us",
  "Services",
  "Portfolio",
  "career",
  "blog",
  "contact",
];

export const MenuItem = ({ i }: { i: any }) => {
  return (
    <motion.li
      className="framer_li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {MenuItems[i]}
    </motion.li>
  );
};
