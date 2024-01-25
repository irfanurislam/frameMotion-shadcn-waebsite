import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center bg-red-400">
      <div>
        <h1 className="text-5xl lg:text-8xl font-bold text-nowrap">
          <span className="text-gray">Don't Worry,</span>
          <br />
          <span>We All Fix IT</span>
        </h1>
        <p className="max-w-[50ch]">
          welcome to <span>i repair</span> your one stop place for all kindess
          of <span>macbook repair</span>
          repairrs and diagonics
        </p>
        <Button>Book to service</Button>
      </div>
      <div className="mt-10 w-3/4 lg:w-full mx-auto">
        <img
          className="-rotate-[30deg] h-[95%]"
          src="https://i.ibb.co/4WzbDSS/360-F-601142328-Vn-Y6-DMf1s-C0-RULodema-CSrv-XSl-Fh-O1l-A.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
