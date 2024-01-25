import useScrollGrowHook from "@/Hooks/useScrollGrowHook";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
  const { styleValue, componentRef } = useScrollGrowHook();
  return (
    <motion.div
      style={styleValue}
      ref={componentRef}
      className="bg-red-500 h-[415px] rounded-2xl col-span-12"
    ></motion.div>
  );
};

export default BatteryReplacement;
