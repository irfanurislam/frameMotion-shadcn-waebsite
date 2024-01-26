import useScrollGrowHook from "@/Hooks/useScrollGrowHook";
import { motion } from "framer-motion";
const ChipsetReplacement = () => {
  const { styleValue, componentRef } = useScrollGrowHook();
  return (
    <motion.div
      style={styleValue}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5"
    ></motion.div>
  );
};

export default ChipsetReplacement;
