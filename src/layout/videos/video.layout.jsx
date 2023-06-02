import "./video.css";

function VideoLayout() {
  return (
    <section className=" bg-black flex flex-col gap-8 py-12 px-48 ">
      <figcaption>
        <div className="flex flex-col gap-2">
          <p className="bg-white h-1 w-12"></p>
          <p className="bg-white h-1 w-32"></p>
          <p className="bg-white h-1 w-56"></p>
        </div>{" "}
      </figcaption>
      <h2 className="txt text-white">
        new <span className="color__video"> videos</span> out
      </h2>
      <button className="btn__video w-fit">
        Subscribe to my Youtube Channel
      </button>
    </section>
  );
}

export default VideoLayout;
