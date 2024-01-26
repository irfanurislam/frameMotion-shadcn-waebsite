import Container from "@/components/Container";
import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";

const ServicesSection = () => {
  return (
    <Container>
      <div className="text-center flex flex-col justify-between items-center">
        <h1>services the we provided </h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          magni repudiandae dignissimos vitae et quod at tenetur quos ipsa
          magnam?
        </p>
      </div>

      <div className="grid grid-cols-12 gap-[20px]">
        <BatteryReplacement></BatteryReplacement>
        <ChipsetReplacement></ChipsetReplacement>
        <DataRecovery></DataRecovery>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
