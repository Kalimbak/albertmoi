const Hero = () => {
  return (
    <div className="h-full flex flex-col justify-around">
      <div className="flex flex-col -space-y-10">
        <div className="flex flex-col gap-2">
          <p className="bg-black h-1 w-12"></p>
          <p className="bg-black h-1 w-32"></p>
          <p className="bg-black h-1 w-56"></p>
        </div>
        <h1 className="text-darkBrown text-[150px] font-bold self-start">
          Albert
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <p className="bg-white h-1 w-12"></p>
          <p className="bg-white h-1 w-32"></p>
          <p className="bg-white h-1 w-56"></p>
        </div>
        <div className="-space-y-12 self-start flex flex-col">
          <h1 className="text-darkBrown text-[100px] font-bold">Outside</h1>
          <h1 className="text-white text-[100px] font-bold  self-start">
            Music
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
