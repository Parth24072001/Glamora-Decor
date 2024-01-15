<<<<<<< HEAD
import clsx from "clsx";
=======
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
import { motion } from "framer-motion";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

<<<<<<< HEAD
export const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: any;
  isOpen: boolean;
}) => (
  <motion.button
    onClick={toggle}
    className={clsx("framer_button", {
      "open_button !pointer-events-auto": isOpen,
    })}
    initial={{ opacity: 0, x: -1500 }}
    animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
  >
=======
export const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button onClick={toggle} className="framer_button">
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
<<<<<<< HEAD
  </motion.button>
=======
  </button>
>>>>>>> a108a58f36224a732ef4170b9625727c2873a9b8
);
