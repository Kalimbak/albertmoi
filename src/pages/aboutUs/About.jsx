import Header from "../../components/layout/NavBar";
import Hero from "../../components/aboutUs/Hero";
import Contact from "../../components/aboutUs/Contact";
import Gallery from "../../components/aboutUs/Gallery";
// import Poetry from "../../components/aboutUs/Poetry";
import Footer from "../../components/aboutUs/Footer";
import Albert from "../../assets/albertOG.png";

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Albert})`,
  };
  return (
    <div className="max-w-[1380px] mx-auto">
      <div className="relative">
        <div className="pr-20 pl-44 w-full h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Hero />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 w-full top-0 grid grid-cols-7 grid-rows-1 h-screen">
          <div className="col-span-3 grid grid-rows-2">
            <div className="bg-white"></div>
            <div className="bg-black"></div>
          </div>
          <div
            className="col-span-4 row-span-2 bg-blend-hard-light bg-cover bg-center bg-[url()]"
            style={backgroundImageStyle}
          ></div>
        </div>
      </div>
      <Contact />
      <Gallery />
      {/* <Poetry /> */}
      <Footer />
    </div>
  );
};

export default About;
