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

<<<<<<< HEAD
const MenuItems = ["home ", "About Us", "Services", "contact"];
=======
const MenuItems = [
  "home ",
  "About Us",
  "Services",
  "Portfolio",
  "career",
  "blog",
  "contact",
];
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8

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
<<<<<<< HEAD

<motion.image
  className="framer_li"
  variants={variants}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
></motion.image>;
=======
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
