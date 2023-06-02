import Gathering from "../../assets/gathering.png";
import GuyWGuitar from "../../assets/guy-with-guitar.png";
import GuySmiling from "../../assets/guy-smiling.png";

const Gallery = () => {
  return (
    <div className="relative bg-black pl-52 pr-20 py-40 w-full h-full">
      <h1 className="text-4xl absolute font-bold text-white text-[200px] top-[12%] left-[6%]">
        Gallery
      </h1>
      <div className="grid grid-cols-3 grid-rows-2">
        <img src={Gathering} alt="" />
        <img src={GuyWGuitar} alt="" />
        <img src={GuySmiling} alt="" />
        <img src={Gathering} alt="" />
        <img src={GuyWGuitar} alt="" />
        <img src={GuySmiling} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
