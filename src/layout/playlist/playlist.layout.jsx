import "./playlist.css";
import ImageText from "./ImageText";
import ImageText2 from "./ImageText2";
import Sites from "./Sites";

function PlaylistLayout() {
  return (
    <section className="pl-16 flex flex-col gap-20 py-20 ">
      <section className="playlist__head pl-32">
        <figcaption>
          <div className="flex flex-col gap-2">
            <p className="bg-black h-1 w-12"></p>
            <p className="bg-black h-1 w-32"></p>
            <p className="bg-black h-1 w-56"></p>
          </div>
          <h2 className="h2playlist">
            Released
            <span className="color"> playlist</span>
          </h2>
        </figcaption>
      </section>
      <section className="playlist__body flex flex-col gap-32">
        <div className="flex gap-12 items-center">
          <p className="text-black opacity-20 font-bold text-7xl">01</p>
          <div className="grid grid-cols-2 divide-x-2 ">
            <div className="w-max ">
              <ImageText />
            </div>
            <div className="justify-self-center pl-20">
              <Sites />
            </div>
          </div>
        </div>
        <div className="flex gap-12 items-center">
          <p className="text-black opacity-20 font-bold text-7xl">01</p>
          <div className="grid grid-cols-2 divide-x-2 ">
            <div className="w-max ">
              <ImageText2 />
            </div>
            <div className="justify-self-center pl-20">
              <Sites />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default PlaylistLayout;
