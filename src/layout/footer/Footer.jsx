import Albert from "../../assets/bgFooter.png";

const Footer = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Albert})`,
  };
  return (
    <div style={backgroundImageStyle} className="py-20 ">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-40 border-2 border-white px-12 pt-12 pb-24">
        <div className="flex flex-col gap-12 pb-8">
          <div className="flex flex-col gap-2 self-center">
            <p className="bg-white h-1 w-12"></p>
            <p className="bg-white h-1 w-32"></p>
            <p className="bg-white h-1 w-56"></p>
          </div>
          <p className="text-white text-6xl font-bold text-center">
            Get <span className="text-darkBrown">Back</span> To Us
          </p>
        </div>
        <form className="max-w-xl mx-auto flex flex-col">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-white border-opacity-40 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm  text-white opacity-40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-white border-opacity-40 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm  text-white opacity-40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email{" "}
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-white border-opacity-40 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm  text-white opacity-40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Email{" "}
            </label>
          </div>
          <button
            type="submit"
            className="text-black mt-4 bg-white  font-medium text-sm sm:w-auto px-5 py-2.5 text-center "
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
