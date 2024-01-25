import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", bounce: 0.5 },
    },
  };

  const laptop = {
    initial: { y: 0, rotate: 0, scale: 4 },
    animate: {
      y: 20,
      rotate: -30,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          repeat: Infinity,
          duration: 3,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center bg-red-400">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className="text-5xl lg:text-8xl font-bold text-nowrap"
          >
            <span className="text-gray">Don't Worry,</span>
            <br />
            <span>We All Fix IT</span>
          </motion.h1>
          <motion.p className="max-w-[50ch]" variants={introChildren}>
            welcome to <span>i repair</span> your one stop place for all kindess
            of <span>macbook repair</span>
            repairrs and diagonics
          </motion.p>
          <motion.div className="mt-10" variants={introChildren}>
            <Button>Book to service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 w-3/4 lg:w-full mx-auto"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img
            className=" h-[95%]"
            src="https://i.ibb.co/4WzbDSS/360-F-601142328-Vn-Y6-DMf1s-C0-RULodema-CSrv-XSl-Fh-O1l-A.jpg"
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
