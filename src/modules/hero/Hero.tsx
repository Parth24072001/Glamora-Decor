import { useState } from "react";

import ExploreCard from "./ExploreCard";
import { motion } from "framer-motion";
import image1 from "../../assets/images/19.jpg";
import image2 from "../../assets/images/10.jpeg";
import image3 from "../../assets/images/17.jpg";
import image4 from "../../assets/images/11.jpeg";
import image5 from "../../assets/images/20.jpeg";

const Hero = () => {
  const exploreWorlds = [
    {
      id: "world-1",
      imgUrl: image1,
      title: "The Hogwarts",
    },
    {
      id: "world-2",
      imgUrl: image2,
      title: "The Upside Down",
    },
    {
      id: "world-3",
      imgUrl: image3,
      title: "Kadirojo Permai",
    },
    {
      id: "world-4",
      imgUrl: image4,
      title: "Paradise Island",
    },
    {
      id: "world-5",
      imgUrl: image5,
      title: "Hawkins Labs",
    },
  ];

  const [active, setActive] = useState("world-2");
  return (
    <section className={`sm:px-4 xs:px-8 px-6 `} id="explore">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={` w-full mx-auto flex flex-col`}
      >
        <div className="mt-[10px] flex lg:flex-row flex-col min-h-[70vh] gap-[6px] maxMd:mt-3">
          {exploreWorlds.map((world: any, index: any) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
