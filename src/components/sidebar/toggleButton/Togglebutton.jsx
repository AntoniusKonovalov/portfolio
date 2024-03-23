import { motion, useCycle } from "framer-motion";

const variants = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Togglebutton = ({ setOpen, open }) => {
  const [animate, cycleAnimate] = useCycle("closed", "open");

  const toggleBtn = () => {
    setOpen((prev) => !prev);
    cycleAnimate();
  };

  return (
    <motion.button
      onClick={toggleBtn}
      className={animate === "open" ? "btnActive" : ""}
      whileTap={{ scale: 0.95 }}
      variants={variants}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default Togglebutton;
