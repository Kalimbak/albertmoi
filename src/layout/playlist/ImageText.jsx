import Gathering from "../../assets/gathering.png";
import { FaRegPlayCircle } from "react-icons/fa";

const ImageText = () => {
  return (
    <div className="flex gap-12 ">
      <img src={Gathering} alt="" className="max-w-[300px] object-fit object-center" />
      <div className="divide-y-4  divide-black ">
        <div className="flex-col flex gap-2 pt-8 pb-12">
          <p className=" text-3xl font-bold">Divine breakthough</p>
          <p className="text-darkBrown text-lg font-bold">MOI ALBERT MUSIC</p>
        </div>
        <div className="divide-y-2 space-y-4 pt-12 ">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <FaRegPlayCircle className="text-darkBrown text-2xl" />
              <p>My Pillar</p>
            </div>

            <p className="underline">Song Details</p>
          </div>
          <div className="flex justify-between py-4">
            <div className="flex gap-2">
              <FaRegPlayCircle className="text-darkBrown text-2xl" />
              <p>Good God</p>
            </div>

            <p className="underline">Song Details</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ImageText;
