import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import LinkedIn from "../../assets/linked.svg";

const Contact = () => {
  return (
    <div className="px-40 py-20 flex flex-col gap-20">
      <p className="bg-[#8C5B00] h-6 w-16"></p>
      <p className="text-xl font-semibold">
        Albert Paul Moifula studied at the African Leadership University,
        Rwanda, where he graduated with a Bachelor of Art Honors in Global
        Challenges, focusing on Governance and a mission of digitizing Creative
        Arts in Afrika. As the Founder and CEO of &quot;Totonga Art & Music
        Younest&quot;, he believes that technology has an integral role in the
        production and distribution stream of Africa&apos;s Creative Art
        Industry. Aside from Gospel Music, Moi Albert leads a team of great
        minds committed to digitizing African creative arts.
      </p>
      <div className="flex justify-between">
        <div className="text-black flex gap-8">
          <img src={Facebook} alt="" className="w-12 h-12" />
          <img src={Instagram} alt="" className="w-12 h-12" />
          <img src={Twitter} alt="" className="w-12 h-12" />
          <img src={LinkedIn} alt="" className="w-12 h-12" />
        </div>
        <p className="bg-darkBrown h-6 w-16"></p>
      </div>
    </div>
  );
};

export default Contact;
