import Gathering from "../../assets/gathering.png";

const Poetry = () => {
  return (
    <div className="px-20 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p className="bg-black h-[6px] w-28"></p>
          <p className="bg-black h-[6px] w-52"></p>
          <p className="bg-black h-[6px] w-72"></p>
        </div>
        <h1 className="text-[180px] font-bold">
          Poet<span className="text-darkBrown">ry</span>
        </h1>
      </div>
      <div className="py-28 grid gap-12 pr-20">
        <div className="grid grid-cols-2  gap-16 grid-rows-1">
          <img
            src={Gathering}
            alt=""
            className="w-[520px] object-cover object-center"
          />
          <div className="flex flex-col gap-6 justify-center items-start h-full">
            <p className="text-5xl font-bold">The Unforgettable</p>
            <p className="text-lg text-left">
              On 23/07/18, I set my feet in this &quot;Land of a thousand
              hills&quot;. Yes, of course, I heard so much about Rwanda, and my
              curiosity left me no choice but to feed my wallowing mind worth
              the satisfaction. There I…
            </p>
            <p className="text-darkBrown text-base">Read more</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 grid-rows-1">
          <img
            src={Gathering}
            alt=""
            className="w-[520px] object-cover object-center"
          />
          <div className="flex flex-col gap-6 justify-center items-start h-full">
            <p className="text-5xl font-bold">The Unforgettable</p>
            <p className="text-lg text-left">
              On 23/07/18, I set my feet in this &quot;Land of a thousand
              hills&quot;. Yes, of course, I heard so much about Rwanda, and my
              curiosity left me no choice but to feed my wallowing mind worth
              the satisfaction. There I…
            </p>
            <p className="text-darkBrown text-base">Read more</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 grid-rows-1">
          <img
            src={Gathering}
            alt=""
            className="w-[520px] object-cover object-center"
          />
          <div className="flex flex-col gap-6 justify-center items-start h-full">
            <p className="text-5xl font-bold">The Unforgettable</p>
            <p className="text-lg text-left">
              On 23/07/18, I set my feet in this &quot;Land of a thousand
              hills&quot;. Yes, of course, I heard so much about Rwanda, and my
              curiosity left me no choice but to feed my wallowing mind worth
              the satisfaction. There I…
            </p>
            <p className="text-darkBrown text-base">Read more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poetry;
