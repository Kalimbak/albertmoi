import Facebook from "../../assets/facebook copy.svg";
import Instagram from "../../assets/instagram copy.svg";
import Twitter from "../../assets/twitter copy.svg";
import LinkedIn from "../../assets/linked copy.svg";

const Footer = () => {
  return (
    <div className="flex bg-black justify-between py-4 text-white px-[281px] items-center">
      <p className="">Moi Albert all right reserved</p>
      <div className="text-black flex gap-8">
        <img src={Facebook} alt="" className="w-8 h-8" />
        <img src={Instagram} alt="" className="w-8 h-8" />
        <img src={Twitter} alt="" className="w-8 h-8" />
        <img src={LinkedIn} alt="" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Footer;
