import "./home.css";
import Header from "../../components/layout/NavBar";
import Albert from "../../assets/albertOG.png";

function homeLayout() {
  const backgroundImageStyle = {
    backgroundImage: `url(${Albert})`,
  };
  return (
    <div className="relative ">
      <div className="pr-20 pl-44 w-full h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <div className="h-full flex flex-col justify-around">
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col gap-2">
                <p className="bg-black h-1 w-12"></p>
                <p className="bg-black h-1 w-32"></p>
                <p className="bg-black h-1 w-56"></p>
              </div>
              <div className="self-start -space-y-10">
                <p className="text-darkBrown text-7xl font-semibold">Meet</p>
                <h1 className="text-[150px] font-bold ">
                  Moi
                  <span className="text-darkBrown "> Albert</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col space-y-5 pb-6">
              <div className="flex flex-col gap-2">
                <p className="bg-white h-1 w-12"></p>
                <p className="bg-white h-1 w-32"></p>
                <p className="bg-white h-1 w-56"></p>
              </div>
              <div className="self-start flex flex-col gap-5">
                <p className="text-darkBrown text-4xl max-w-lg">
                  Gospel Recording Artist Founder
                  <span className="text-white"> |</span> Author
                  <span className="text-white"> |</span> Speaker
                  <span className="text-white"> |</span> Musician
                  <span className="text-white"> |</span> Exe-Producer
                </p>
                <button className="text-xl text-[#8C5B00] border-2 w-fit p-3 border-dashed border-[#8C5B00]">
                  Find out more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 w-full top-0 grid grid-cols-9 grid-rows-1 h-screen">
        <div className="col-span-5 grid grid-rows-5">
          <div className="bg-white row-span-3"></div>
          <div className="bg-black row-span-2"></div>
        </div>
        <div
          className="col-span-4 row-span-2 bg-blend-hard-light bg-cover bg-center bg-[url()]"
          style={backgroundImageStyle}
        ></div>
      </div>
    </div>
  );
}

export default homeLayout;
